import {createAsyncThunk, createEntityAdapter, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';

export const SEARCH_SAVED = 'saved'

const initialState: any = {
    value: 0,
    status: 'idle',
  };

export const savedSlice = createSlice({
    name: SEARCH_SAVED,
    initialState,
    reducers: {
      increment: (state: any) => {
        state.value += 1;
      },
      decrement: (state: any) => {
        state.value -= 1;
      },
      incrementByAmount: (state: any, action: any) => {
        state.value += action.payload;
      },
    },
    extraReducers: (builder: any) => {
     
    },
  });

export const savedReducer = savedSlice.reducer;
