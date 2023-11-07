import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  activeNote: null,
};

export const lifeDiarySlice = createSlice({
  name: 'lifeDiary',
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
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

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteById,
} = lifeDiarySlice.actions;
