import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LifeDiaryRoutes } from '../LifeDiary/routes/LifeDiaryRoutes';
import { AUTH_STATUS } from '../store/slices/auth/authStatus';
import { CheckingAuth } from '../ui/CheckingAuth';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase/config';
import { login, logout } from '../store/slices/auth/authSlice';
import { startLoadingNotes } from '../store/thunks/lifeDiary/startLoadingNotes';

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(login({ uid, email, displayName, photoURL }));

        dispatch(startLoadingNotes());
      } else {
        dispatch(logout());
      }
    });
  }, []);

  const { status } = useSelector((state) => state.auth);

  if (status === AUTH_STATUS.CHECKING) {
    return <CheckingAuth></CheckingAuth>;
  }

  return (
    <Routes>
      {status === AUTH_STATUS.AUTHENTICATED ? (
        <Route path="/*" element={<LifeDiaryRoutes></LifeDiaryRoutes>} />
      ) : (
        <>
          <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>} />
          <Route path="/*" element={<Navigate to="/auth/login"></Navigate>}></Route>
        </>
      )}
    </Routes>
  );
};
