import { RootState } from './../app/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Advice {
  slip: AdviceSlip;
}

export interface AdviceSlip {
  id: string;
  advice: string;
}

export interface AdviceInitialState {
  advice: Advice | null;
  status: string;
  error: string;
}

export interface Error {
  errorMessage: string;
}

const ADVICE_API = 'https://api.adviceslip.com/advice';

const initialState: AdviceInitialState = {
  advice: null,
  status: 'idle',
  error: '',
};

export const fetchRandomAdvice = createAsyncThunk<Advice>(
  '/advice/randomAdvice',
  async () => {
    try {
      const randomAdvice = await axios.get<Advice>(ADVICE_API);

      return randomAdvice.data;
    } catch (error: any) {
      return error.message;
    }
  }
);

const adviceSlice = createSlice({
  name: 'advice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRandomAdvice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomAdvice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.advice = action.payload;
      })
      .addCase(fetchRandomAdvice.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      });
  },
});

export const selectRandomAdvice = (state: RootState) => state.advice.advice;
export const selectAdviceStatus = (state: RootState) => state.advice.status;
export const selectErrorMessage = (state: RootState) => state.advice.error;
export default adviceSlice.reducer;
