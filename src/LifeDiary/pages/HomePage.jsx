import { LifeDiaryLayout } from '../layout/LifeDiaryLayout';
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const HomePage = () => {
  return (
    <LifeDiaryLayout>
      <NoteView></NoteView>
    </LifeDiaryLayout>
  );
};
