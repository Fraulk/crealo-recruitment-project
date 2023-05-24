import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  }
)

export interface BookState {
  books: [],
}

const initialState: BookState = {
  books: [],
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload.slice(0, 10)
    });
  }
})

export default bookSlice.reducer