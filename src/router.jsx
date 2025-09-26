import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import useAuthStore from './stores/authStore';
import { USER_ROLES } from './utils/constants';

// Layout imports (tidak lazy load untuk core layout)
import MainLayout from './components/layout/MainLayout.jsx';
import AuthLayout from './components/layout/AuthLayout.jsx';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';
import LoadingSpinner from './components/layout/LoadingSpinner.jsx';
import NotFound from './components/common/NotFound.jsx';

// =======================================================
// LAZY LOADED COMPONENTS
// =======================================================

// Auth pages
const Login = lazy(() => import('./components/features/auth/Login.jsx'));

// Dashboard pages - role-based
const StudentDashboard = lazy(() => import('./components/features/dashboard/StudentDashboard.jsx'));
const AssistantDashboard = lazy(() => import('./components/features/dashboard/AssistantDashboard.jsx'));
const AdminDashboard = lazy(() => import('./components/features/dashboard/AdminDashboard.jsx'));

// Student pages
const MyClassPage = lazy(() => import('./components/features/student/MyClassPage.jsx'));
const StudentAssignmentsPage = lazy(() => import('./components/features/student/StudentAssignmentsPage.jsx'));
const StudentGradesPage = lazy(() => import('./components/features/student/StudentGradesPage.jsx'));

// Assistant pages
const SessionsPage = lazy(() => import('./components/features/assistant/SessionsPage.jsx'));
const GroupsPage = lazy(() => import('./components/features/assistant/GroupsPage.jsx'));
const AssistantGradingPage = lazy(() => import('./components/features/assistant/AssistantGradingPage.jsx'));

// Admin pages
const UsersPage = lazy(() => import('./components/features/admin/UsersPage.jsx'));
const SubjectsPage = lazy(() => import('./components/features/admin/SubjectsPage.jsx'));
const ClassManagementPage = lazy(() => import('./components/features/admin/ClassManagementPage.jsx'));
const ReportsPage = lazy(() => import('./components/features/admin/ReportsPage.jsx'));
const SystemConfigPage = lazy(() => import('./components/features/admin/SystemConfigPage.jsx'));

// Materials page (sudah ada)
const MaterialsPage = lazy(() => import('./components/features/materials/MaterialsPage.jsx'));

// Profile page (NEW LOCATION - dari folder profile, bukan shared)
const ProfilePage = lazy(() => import('./components/features/profile/ProfilePage.jsx'));


// =======================================================
// SMART ROUTE COMPONENTS
// =======================================================

// Dashboard Route Component - Role-based dashboard routing
const DashboardRoute = () => {
  const { user } = useAuthStore();
  
  // Suspense wrapper untuk lazy loading
  const DashboardComponent = lazy(() => {
    switch (user?.role) {
      case USER_ROLES.ADMIN:
        return import('./components/features/dashboard/AdminDashboard.jsx');
      case USER_ROLES.ASSISTANT:
        return import('./components/features/dashboard/AssistantDashboard.jsx');
      case USER_ROLES.STUDENT:
      default:
        return import('./components/features/dashboard/StudentDashboard.jsx');
    }
  });

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardComponent />
    </Suspense>
  );
};

// =======================================================
// ROUTER CONFIGURATION - UPDATED
// =======================================================

export const router = createBrowserRouter([
  // =======================================================
  // AUTH ROUTES
  // =======================================================
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '',
        element: <Navigate to="/auth/login" replace />,
      },
    ],
  },

  // =======================================================
  // MAIN APPLICATION ROUTES
  // =======================================================
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      // Root redirect
      {
        path: '',
        element: <Navigate to="/dashboard" replace />,
      },
      
      // =======================================================
      // DASHBOARD - Role-based routing
      // =======================================================
      {
        path: 'dashboard',
        element: <DashboardRoute />,
      },

      // =======================================================
      // STUDENT ROUTES
      // =======================================================
      {
        path: 'my-class',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MyClassPage />
          </Suspense>
        ),
      },
      {
        path: 'assignments',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StudentAssignmentsPage />
          </Suspense>
        ),
      },
      {
        path: 'grades',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <StudentGradesPage />
          </Suspense>
        ),
      },

      // =======================================================
      // ASSISTANT ROUTES
      // =======================================================
      {
        path: 'sessions',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SessionsPage />
          </Suspense>
        ),
      },
      {
        path: 'groups',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <GroupsPage />
          </Suspense>
        ),
      },
      {
        path: 'grading',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AssistantGradingPage />
          </Suspense>
        ),
      },

      // =======================================================
      // ADMIN ROUTES
      // =======================================================
      {
        path: 'users',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: 'subjects',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SubjectsPage />
          </Suspense>
        ),
      },
      {
        path: 'class-management',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ClassManagementPage />
          </Suspense>
        ),
      },
      {
        path: 'reports',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ReportsPage />
          </Suspense>
        ),
      },
      {
        path: 'system-config',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SystemConfigPage />
          </Suspense>
        ),
      },

      // =======================================================
      // SHARED ROUTES
      // =======================================================
      {
        path: 'materials',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MaterialsPage />
          </Suspense>
        ),
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },

  // =======================================================
  // 404 HANDLER
  // =======================================================
  {
    path: '*',
    element: <NotFound />,
  },
]);

// =======================================================
// ROUTE UTILITIES (UNCHANGED)
// =======================================================

export const getAccessibleRoutes = (userRole) => {
  const allRoutes = {
    [USER_ROLES.STUDENT]: [
      '/dashboard',
      '/my-class', 
      '/assignments',
      '/grades',
      '/materials',
      '/profile'
    ],
    [USER_ROLES.ASSISTANT]: [
      '/dashboard',
      '/sessions',
      '/groups', 
      '/grading',
      '/materials',
      '/profile'
    ],
    [USER_ROLES.ADMIN]: [
      '/dashboard',
      '/users',
      '/subjects',
      '/class-management', 
      '/reports',
      '/system-config',
      '/materials',
      '/profile'
    ]
  };

  return allRoutes[userRole] || allRoutes[USER_ROLES.STUDENT];
};

export const canAccessRoute = (path, userRole) => {
  const accessibleRoutes = getAccessibleRoutes(userRole);
  return accessibleRoutes.includes(path);
};

export const getDefaultRouteForRole = (userRole) => {
  return '/dashboard';
};

export default router;