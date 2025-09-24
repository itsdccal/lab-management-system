// src/router.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Layout imports
import MainLayout from './components/layout/MainLayout.jsx';
import AuthLayout from './components/layout/AuthLayout.jsx';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';
import LoadingSpinner from './components/layout/LoadingSpinner.jsx';
import NotFound from './components/common/NotFound.jsx';

// Auth page
const Login = lazy(() => import('./components/features/auth/Login.jsx'));

// Dashboard pages - role-based
const StudentDashboard = lazy(() => import('./components/features/dashboard/StudentDashboard.jsx'));
const AssistantDashboard = lazy(() => import('./components/features/dashboard/AssistantDashboard.jsx'));
const AdminDashboard = lazy(() => import('./components/features/dashboard/AdminDashboard.jsx'));

// Student pages
const MyClassPage = lazy(() => import('./components/features/student/MyClassPage.jsx'));
const StudentMaterialsPage = lazy(() => import('./components/features/student/StudentMaterialsPage.jsx'));
const StudentAssignmentsPage = lazy(() => import('./components/features/student/StudentAssignmentsPage.jsx'));
const StudentGradesPage = lazy(() => import('./components/features/student/StudentGradesPage.jsx'));

// Assistant pages
const SessionsPage = lazy(() => import('./components/features/assistant/SessionsPage.jsx'));
const GroupsPage = lazy(() => import('./components/features/assistant/GroupsPage.jsx'));
const AssistantMaterialsPage = lazy(() => import('./components/features/assistant/AssistantMaterialsPage.jsx'));
const AssistantGradingPage = lazy(() => import('./components/features/assistant/AssistantGradingPage.jsx'));

// Admin pages
const UsersPage = lazy(() => import('./components/features/admin/UsersPage.jsx'));
const SubjectsPage = lazy(() => import('./components/features/admin/SubjectsPage.jsx'));
const ClassManagementPage = lazy(() => import('./components/features/admin/ClassManagementPage.jsx'));
const ReportsPage = lazy(() => import('./components/features/admin/ReportsPage.jsx'));
const SystemConfigPage = lazy(() => import('./components/features/admin/SystemConfigPage.jsx'));

// Shared components
const ProfilePage = lazy(() => import('./components/features/shared/ProfilePage.jsx'));

// Dashboard Route Component with Role Detection
const DashboardRoute = lazy(() => import('./components/features/dashboard/DashboardRoute.jsx'));

export const router = createBrowserRouter([
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
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Navigate to="/dashboard" replace />,
      },
      
      // Dashboard - Role-based routing
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardRoute />
          </Suspense>
        ),
      },

      // ==========================================
      // STUDENT ROUTES
      // ==========================================
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

      // ==========================================
      // ASSISTANT ROUTES
      // ==========================================
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

      // ==========================================
      // ADMIN ROUTES
      // ==========================================
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

      // ==========================================
      // SHARED ROUTES (Student & Assistant)
      // ==========================================
      {
        path: 'materials',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MaterialsRoute />
          </Suspense>
        ),
      },

      // ==========================================
      // PROFILE & SETTINGS
      // ==========================================
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
  {
    path: '*',
    element: <NotFound />,
  },
]);

// Materials Route Component - Role-based materials page
const MaterialsRoute = () => {
  const { user } = useAuthStore();
  const { USER_ROLES } = require('./utils/constants');
  
  if (user.role === USER_ROLES.ASSISTANT) {
    return <AssistantMaterialsPage />;
  } else {
    return <StudentMaterialsPage />;
  }
};