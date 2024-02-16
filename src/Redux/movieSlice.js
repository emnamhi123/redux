import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data";

const movieSlice = createSlice({
  name: "moviemang",
  initialState: { movies: Data },
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((el) => el.id !== action.payload);
    },
    updateMovie: (state, action) => {
      state.movies = state.movies.map((el) =>
        el.id === action.payload.id ? (el = action.payload.updatedMovie) : el
      );
    },
  },
});

export default movieSlice.reducer;
export const { addMovie, deleteMovie, updateMovie } = movieSlice.actions;