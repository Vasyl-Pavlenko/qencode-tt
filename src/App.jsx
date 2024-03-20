import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { ResetPasswordPage, NewPasswordPage, LoginPage } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/newPassword" element={<NewPasswordPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Layout>
  );
}

export default App;
