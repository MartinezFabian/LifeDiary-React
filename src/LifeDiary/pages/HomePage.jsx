import { LifeDiaryLayout } from '../layout/LifeDiaryLayout';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const HomePage = () => {
  return (
    <LifeDiaryLayout>
      <NothingSelectedView></NothingSelectedView>
    </LifeDiaryLayout>
  );
};
