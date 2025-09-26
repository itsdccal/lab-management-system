export const USER_ROLES = {
  ADMIN: 'admin',
  ASSISTANT: 'assistant', 
  STUDENT: 'student'
};

export const ROUTE_PATHS = {
  // Auth routes
  LOGIN: '/auth/login',
  
  // Dashboard
  DASHBOARD: '/dashboard',
  
  // Student routes
  MY_CLASS: '/my-class',
  ASSIGNMENTS: '/assignments',
  GRADES: '/grades',
  
  // Assistant routes  
  SESSIONS: '/sessions',
  GROUPS: '/groups',
  GRADING: '/grading',
  
  // Admin routes
  USERS: '/users',
  SUBJECTS: '/subjects', 
  CLASS_MANAGEMENT: '/class-management',
  REPORTS: '/reports',
  SYSTEM_CONFIG: '/system-config',
  
  // Shared routes
  MATERIALS: '/materials',
  PROFILE: '/profile',
  
  // Debug routes
  DEBUG_ROUTES: '/debug/routes'
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh'
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE: '/api/user/update'
  }
  // Add more endpoints as needed
};