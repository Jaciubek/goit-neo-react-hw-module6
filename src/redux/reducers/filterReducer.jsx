import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from '../actions/filterActions';

export const initialState = '';

const filterReducer = createReducer(initialState, {
  [setFilter]: (state, { payload }) => (state = payload),
});

