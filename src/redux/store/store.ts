'use client';

import { configureStore } from '@reduxjs/toolkit';
import playingNowMoviesSlice from '../movieData/playingNowMoviesSlice';

export const store = configureStore({
  reducer: {
    playingNowMovies: playingNowMoviesSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
