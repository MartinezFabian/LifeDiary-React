import { Fab } from '@mui/material';
import { LifeDiaryLayout } from '../layout/LifeDiaryLayout';
import { Add } from '@mui/icons-material';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/NoteView';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/thunks/lifeDiary/startNewNote';

export const HomePage = () => {
  const { isSaving } = useSelector((state) => state.lifeDiary);
  const dispatch = useDispatch();

  const onAddNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <LifeDiaryLayout>
      <NothingSelectedView></NothingSelectedView>

      <Fab
        onClick={onAddNewNote}
        disabled={isSaving}
        size="large"
        color="secondary"
        aria-label="add"
        sx={{ position: 'fixed', right: 50, bottom: 50 }}
      >
        <Add />
      </Fab>
    </LifeDiaryLayout>
  );
};
