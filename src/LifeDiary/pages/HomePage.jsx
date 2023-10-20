import { Fab } from '@mui/material';
import { LifeDiaryLayout } from '../layout/LifeDiaryLayout';
import { Add } from '@mui/icons-material';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/NoteView';

export const HomePage = () => {
  return (
    <LifeDiaryLayout>
      <NothingSelectedView></NothingSelectedView>

      <Fab
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
