import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: any;
}

const initialState: DataState = {
  data: null,
};

const GetPlayingNowMovies = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPlayingNowMovies: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setPlayingNowMovies } = GetPlayingNowMovies.actions;

export default GetPlayingNowMovies.reducer;
