import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LifeDiaryRoutes } from '../LifeDiary/routes/LifeDiaryRoutes';
import { useSelector } from 'react-redux';
import { AUTH_STATUS } from '../store/slices/auth/authStatus';
import { CheckingAuth } from '../ui/CheckingAuth';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  if (status === AUTH_STATUS.CHECKING) {
    return <CheckingAuth></CheckingAuth>;
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>} />
      <Route path="/*" element={<LifeDiaryRoutes></LifeDiaryRoutes>} />
    </Routes>
  );
};
