import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '559-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      console.log(state);
      console.log(action);

      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      console.log(action);

      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      console.log(action);
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;
