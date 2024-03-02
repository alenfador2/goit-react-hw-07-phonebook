import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://65e37fe788c4088649f5daea.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      console.log('data: ', res.data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contactItem, thunkAPI) => {
    try {
      const contact = await axios.post('/contacts', contactItem);
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contact/deleteContact',
  async (id, thunkAPI) => {
    try {
      const contact = await axios.delete(`/contacts/${id}`);
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
