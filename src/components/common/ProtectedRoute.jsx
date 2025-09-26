import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';
import LoadingSpinner from '../layout/LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading, isAuthenticated } = useAuthStore();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated || !user) {
    return (
      <Navigate 
        to="/auth/login" 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }

  // User is authenticated, render children
  return children;
};

export default ProtectedRoute;