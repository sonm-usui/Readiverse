import {createAsyncThunk, createEntityAdapter, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { updateData } from '../../services/api.services';
import { RootState } from '../store/store';

export const SEARCH_SAVED = 'saved'

const initialState: any = {};

const update = async (state: any) => {
     await updateData(1, state);
}

export const savedSlice = createSlice({
    name: SEARCH_SAVED,
    initialState,
    reducers: {
      getFavorite: (state: any, action: any) => {
        state.value = [...action.payload];
        console.log(action.payload)
      },
      addFavorites: (state: any, action: any) => {
        const value = [...state.value, action.payload];
        state.value = value;
        update(state.value);
        return state;
      },
    },
    extraReducers: (builder: any) => {
    },
  });

export const savedReducer = savedSlice.reducer;
export const { addFavorites, getFavorite } = savedSlice.actions;
export const selectFavorite = (state: RootState) => state[SEARCH_SAVED].value;