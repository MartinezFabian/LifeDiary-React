/* eslint-disable no-undef */

import {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  lifeDiarySlice,
  savingNewNote,
  setActiveNote,
  setImagesToActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from '../../../../src/store/slices/lifeDiary/lifeDiarySlice';

describe('tests in lifeDiarySlice.js', () => {
  const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
  };

  test('must have the correct initial state', () => {
    expect(lifeDiarySlice.name).toBe('lifeDiary');
    expect(lifeDiarySlice.getInitialState()).toEqual(initialState);
  });

  test('must set isSaving to true', () => {
    const state = lifeDiarySlice.reducer(initialState, savingNewNote());

    expect(state.isSaving).toBe(true);
  });

  test('must add a new empty note', () => {
    const newNote = {
      id: 'ASD234JLN423JN',
      title: '',
      body: '',
      date: new Date().getTime(),
      imagesUrls: [],
    };

    const state = lifeDiarySlice.reducer(initialState, addNewEmptyNote(newNote));

    expect(state.notes).toHaveLength(1);
    expect(state.notes[0]).toEqual(newNote);
    expect(state.isSaving).toBe(false);
  });

  test('must set the active note', () => {
    const activeNote = {
      id: 'ASD234JLN423JN',
      title: 'Test note',
      body: 'This is a test note!',
      date: new Date().getTime(),
      imagesUrls: [],
    };

    const state = lifeDiarySlice.reducer(initialState, setActiveNote(activeNote));

    expect(state.activeNote).toEqual(activeNote);
    expect(state.messageSaved).toBe('');
  });

  test('must set the notes', () => {
    const notes = [
      {
        id: 'ASD234JLN423JN',
        title: 'Test note 1',
        body: 'This is a test note!',
        date: new Date().getTime(),
        imagesUrls: [],
      },
      {
        id: 'NJJ3IH43B42312',
        title: 'Test note 2',
        body: 'This is a test note!',
        date: new Date().getTime(),
        imagesUrls: [],
      },
    ];

    const state = lifeDiarySlice.reducer(initialState, setNotes(notes));

    expect(state.notes).toEqual(notes);
  });

  test('must set isSaving to true and messageSaved to an empty string', () => {
    const state = lifeDiarySlice.reducer(initialState, setSaving());
    expect(state.isSaving).toBe(true);
    expect(state.messageSaved).toBe('');
  });

  test('must handle updating a note', () => {
    const notes = [
      {
        id: 'ASD234JLN423JN',
        title: 'Test note',
        body: 'This is a test note!',
        date: new Date().getTime(),
        imagesUrls: [],
      },
    ];

    const updatedNote = {
      id: 'ASD234JLN423JN',
      title: 'Updated Title',
      body: 'Updated content',
      date: new Date().getTime(),
      imagesUrls: [],
    };

    const state = lifeDiarySlice.reducer({ ...initialState, notes }, updateNote(updatedNote));

    expect(state.notes[0]).toEqual(updatedNote);
    expect(state.isSaving).toBe(false);
    expect(state.messageSaved).toBe('Updated Title was successfully updated!');
  });

  test('must handle deleting a note by id', () => {
    const initialStateWithActiveNote = {
      isSaving: false,
      messageSaved: '',
      notes: [
        {
          id: 'ASD234JLN423JN',
          title: 'Test note',
          body: 'This is a test note!',
          date: new Date().getTime(),
          imagesUrls: [],
        },
      ],
      activeNote: {
        id: 'ASD234JLN423JN',
        title: 'Test note',
        body: 'This is a test note!',
        date: new Date().getTime(),
        imagesUrls: [],
      },
    };

    const state = lifeDiarySlice.reducer(
      initialStateWithActiveNote,
      deleteNoteById('ASD234JLN423JN')
    );

    expect(state.notes).toHaveLength(0);
    expect(state.activeNote).toBe(null);
    expect(state.isSaving).toBe(false);
  });

  test('must set the images of the active note', () => {
    const initialStateWithActiveNote = {
      isSaving: false,
      messageSaved: '',
      notes: [],
      activeNote: {
        id: 'ASD234JLN423JN',
        title: 'Test note',
        body: 'This is a test note!',
        date: new Date().getTime(),
        imagesUrls: ['image1.jpg', 'image2.jpg'],
      },
    };

    const images = ['image3.jpg', 'image4.jpg'];
    const state = lifeDiarySlice.reducer(initialStateWithActiveNote, setImagesToActiveNote(images));

    expect(state.activeNote.imagesUrls).toEqual([
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
    ]);
    expect(state.isSaving).toBe(false);
  });

  test('must handle clearing notes on logout', () => {
    const notes = [
      {
        id: 'ASD234JLN423JN',
        title: 'Test note',
        body: 'This is a test note!',
        date: new Date().getTime(),
        imagesUrls: [],
      },
    ];
    const state = lifeDiarySlice.reducer({ ...initialState, notes }, clearNotesLogout());

    expect(state.isSaving).toBe(false);
    expect(state.messageSaved).toBe('');
    expect(state.notes).toHaveLength(0);
    expect(state.activeNote).toBe(null);
  });
});
