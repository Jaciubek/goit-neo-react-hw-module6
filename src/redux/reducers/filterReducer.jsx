import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from "./redux/actions/filterActions.jsx";

const initialState = '';

const filterReducer = createReducer(initialState, {
  [setFilter]: (state, { payload }) => (state = payload),
});

export default filterReducer;
