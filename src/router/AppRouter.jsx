import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LifeDiaryRoutes } from '../LifeDiary/routes/LifeDiaryRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>} />
      <Route path="/*" element={<LifeDiaryRoutes></LifeDiaryRoutes>} />
    </Routes>
  );
};
