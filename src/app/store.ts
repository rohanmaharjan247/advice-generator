import { configureStore } from '@reduxjs/toolkit';
import adviceReducer from '../features/adviceSlice';

export const store = configureStore({
  reducer: {
    advice: adviceReducer,
  },
});

// Inferred the `RootState` and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostState, comments: CommentState, users: UserState}
export type AppDispatch = typeof store.dispatch;
