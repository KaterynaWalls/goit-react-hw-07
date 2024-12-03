import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Селектор для отримання списку контактів
export const selectContacts = state => state.contacts.items;

// Експорт редюсера
export const contactsReducer = contactsSlice.reducer;

// Експорт екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
