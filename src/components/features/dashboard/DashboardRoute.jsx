// src/components/features/dashboard/DashboardRoute.jsx - SIMPLE VERSION
import React, { Suspense } from 'react';
import { lazy } from 'react';
import useAuthStore from '../../../stores/authStore';
import { USER_ROLES } from '../../../utils/constants';
import LoadingSpinner from '../../layout/LoadingSpinner';

// Import dashboard components
const StudentDashboard = lazy(() => import('./StudentDashboard'));
const AssistantDashboard = lazy(() => import('./AssistantDashboard'));
const AdminDashboard = lazy(() => import('./AdminDashboard'));

/**
 * DashboardRoute Component - SIMPLE VERSION for Demo Accounts
 */
const DashboardRoute = () => {
  const { user, isLoading } = useAuthStore();
  
  // Show loading if auth is still loading
  if (isLoading) {
    console.log('🔄 DashboardRoute: Loading...');
    return <LoadingSpinner />;
  }

  // Handle case when user is not loaded yet
  if (!user) {
    console.log('⚠️ DashboardRoute: No user found, showing StudentDashboard');
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <StudentDashboard />
      </Suspense>
    );
  }

  // Debug current user
  console.log('🔍 DashboardRoute Current User:', {
    user: user,
    role: user.role,
    roleType: typeof user.role
  });
  
  console.log('🔍 USER_ROLES Constants:', USER_ROLES);
  
  // Simple role matching
  const userRole = user.role;
  let DashboardComponent;
  let componentName;
  
  if (userRole === 'admin') {
    DashboardComponent = AdminDashboard;
    componentName = 'AdminDashboard';
  } else if (userRole === 'assistant') {
    DashboardComponent = AssistantDashboard;
    componentName = 'AssistantDashboard';
  } else if (userRole === 'student') {
    DashboardComponent = StudentDashboard;
    componentName = 'StudentDashboard';
  } else {
    // Fallback untuk role yang tidak dikenali
    console.log('⚠️ Unknown role, defaulting to StudentDashboard. Role:', userRole);
    DashboardComponent = StudentDashboard;
    componentName = 'StudentDashboard (fallback)';
  }

  console.log(`✅ DashboardRoute: Rendering ${componentName} for role "${userRole}"`);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardComponent />
    </Suspense>
  );
};

export default DashboardRoute;