import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

export const LifeDiaryRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
