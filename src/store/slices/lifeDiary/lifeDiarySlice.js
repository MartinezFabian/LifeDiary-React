import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: true,
  messageSaved: '',
  notes: [],
  active: null,
};

export const lifeDiarySlice = createSlice({
  name: 'lifeDiary',
  initialState,
  reducers: {
    addNewEmptyNote: () => {
      // ...
    },
    setActiveNote: () => {
      //...
    },
    setNote: () => {
      //...
    },
    setSaving: () => {
      // ...
    },
    updateNote: () => {
      // ...
    },
    deleteNoteById: () => {
      // ...
    },
  },
});

export const { addNewEmptyNote, setActiveNote, setNote, setSaving, updateNote, deleteNoteById } =
  lifeDiarySlice.actions;
