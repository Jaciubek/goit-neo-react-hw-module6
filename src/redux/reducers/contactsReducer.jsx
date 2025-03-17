import { createReducer } from '@reduxjs/toolkit';
import contactsItems from '../components/data/contactsItems.js';
import { addContact, deleteContact } from './redux/actions/contactsActions.jsx';

const initialState = contactsItems;

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => (state = [payload, ...state]),
  [deleteContact]: (state, { payload }) =>
    (state = state.filter(c => c.id !== payload)),
});

export default contactsReducer;
