import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const pending = state => {
  state.isLoading = true;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'numbers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addNumber: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteNumber: {
  //     reducer(state, action) {
  //       return state.filter(contact => contact.id !== action.payload);
  //     },
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContacts.pending, pending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, rejected)
      .addCase(deleteContacts.pending, pending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
