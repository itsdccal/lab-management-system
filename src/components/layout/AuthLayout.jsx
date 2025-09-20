// src/components/layout/AuthLayout.jsx
import { Outlet, Navigate } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';

const AuthLayout = () => {
  const { isAuthenticated } = useAuthStore();

  // Redirect jika sudah login
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <Outlet />
    </div>
  );
};

export default AuthLayout;