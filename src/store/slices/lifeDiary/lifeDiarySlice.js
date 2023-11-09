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

      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;

      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) return action.payload;

        return note;
      });

      state.isSaving = false;
      state.messageSaved = `${action.payload.title} was successfully updated!`;
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
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = lifeDiarySlice.actions;
