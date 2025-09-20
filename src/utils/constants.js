// User Roles
export const USER_ROLES = {
  ADMIN: "admin",
  ASSISTANT: "asisten",
  STUDENT: "mahasiswa",
};

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },
  USERS: "/users",
  SESSIONS: "/sessions",
  ASSESSMENTS: "/assessments",
  ATTENDANCE: "/attendance",
  GRADES: "/grades",
};

// Navigation Items
export const NAVIGATION_ITEMS = {
  [USER_ROLES.ADMIN]: [
    { name: "Dashboard", href: "/dashboard", icon: "Home" },
    { name: "Kelola Users", href: "/users", icon: "Users" },
    { name: "Mata Kuliah", href: "/subjects", icon: "BookOpen" },
    { name: "Kelas", href: "/classes", icon: "GraduationCap" },
    { name: "Ruangan Lab", href: "/rooms", icon: "Building" },
    { name: "Laporan", href: "/reports", icon: "BarChart3" },
  ],
  [USER_ROLES.ASSISTANT]: [
    { name: "Dashboard", href: "/dashboard", icon: "Home" },
    { name: "Sesi Praktikum", href: "/sessions", icon: "Calendar" },
    { name: "Kelompok Siswa", href: "/groups", icon: "Users" },
    { name: "Modul & Indikator", href: "/modules", icon: "BookOpen" },
    { name: "Tugas & Assessment", href: "/assessments", icon: "FileText" },
    { name: "Presensi", href: "/attendance", icon: "Clock" },
    { name: "Penilaian", href: "/grades", icon: "Award" },
  ],
  [USER_ROLES.STUDENT]: [
    { name: "Dashboard", href: "/dashboard", icon: "Home" },
    { name: "Jadwal Praktikum", href: "/schedule", icon: "Calendar" },
    { name: "Modul & Materi", href: "/modules", icon: "BookOpen" },
    { name: "Tugas Praktikum", href: "/assignments", icon: "FileText" },
    { name: "Presensi Saya", href: "/attendance", icon: "Clock" },
    { name: "Nilai Saya", href: "/grades", icon: "Award" },
  ],
};

// Themes
export const THEMES = ["light", "dark", "corporate", "business", "lab"];

// File Upload Limits
export const FILE_LIMITS = {
  MAX_SIZE: 50 * 1024 * 1024, // 50MB
  ALLOWED_TYPES: [".pdf", ".doc", ".docx", ".ppt", ".pptx", ".zip"],
};
