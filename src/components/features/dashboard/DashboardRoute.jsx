// src/components/features/dashboard/DashboardRoute.jsx
import React from 'react';
import useAuthStore from '../../../stores/authStore';
import { USER_ROLES } from '../../../utils/constants';

// Import dashboard components
import StudentDashboard from './StudentDashboard';
import AssistantDashboard from './AssistantDashboard';
import AdminDashboard from './AdminDashboard';

const DashboardRoute = () => {
  const { user } = useAuthStore();

  // Route to appropriate dashboard based on user role
  switch (user.role) {
    case USER_ROLES.ADMIN:
      return <AdminDashboard />;
    case USER_ROLES.ASSISTANT:
      return <AssistantDashboard />;
    case USER_ROLES.STUDENT:
      return <StudentDashboard />;
    default:
      return <StudentDashboard />;
  }
};

export default DashboardRoute;