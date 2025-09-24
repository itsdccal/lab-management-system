// src/config/navigation.js
import { USER_ROLES } from '../utils/constants';

// Simplified navigation configuration
export const NAVIGATION_CONFIG = {
  [USER_ROLES.ADMIN]: [
    { 
      name: 'Dashboard', 
      href: '/dashboard', 
      icon: 'Home', 
      color: 'text-blue-400'
    },
    { 
      name: 'Kelola Users', 
      href: '/users', 
      icon: 'Users', 
      color: 'text-green-400'
    },
    { 
      name: 'Mata Kuliah', 
      href: '/subjects', 
      icon: 'BookOpen', 
      color: 'text-purple-400'
    },
    { 
      name: 'Kelas & Lab', 
      href: '/class-management', 
      icon: 'Building', 
      color: 'text-orange-400'
    },
    { 
      name: 'Laporan', 
      href: '/reports', 
      icon: 'BarChart3', 
      color: 'text-indigo-400'
    }
  ],

  [USER_ROLES.ASSISTANT]: [
    { 
      name: 'Dashboard', 
      href: '/dashboard', 
      icon: 'Home', 
      color: 'text-blue-400'
    },
    { 
      name: 'Sesi Praktikum', 
      href: '/sessions', 
      icon: 'Calendar', 
      color: 'text-green-400'
    },
    { 
      name: 'Kelompok Siswa', 
      href: '/groups', 
      icon: 'Users', 
      color: 'text-purple-400'
    },
    { 
      name: 'Materi', 
      href: '/materials', 
      icon: 'BookOpen', 
      color: 'text-orange-400'
    },
    { 
      name: 'Penilaian', 
      href: '/grading', 
      icon: 'Award', 
      color: 'text-pink-400'
    }
  ],

  [USER_ROLES.STUDENT]: [
    { 
      name: 'Dashboard', 
      href: '/dashboard', 
      icon: 'Home', 
      color: 'text-blue-400'
    },
    { 
      name: 'Kelas Saya', 
      href: '/my-class', 
      icon: 'GraduationCap', 
      color: 'text-green-400'
    },
    { 
      name: 'Materi', 
      href: '/materials', 
      icon: 'BookOpen', 
      color: 'text-purple-400'
    },
    { 
      name: 'Tugas & Quiz', 
      href: '/assignments', 
      icon: 'FileText', 
      color: 'text-orange-400'
    },
    { 
      name: 'Rekap Nilai', 
      href: '/grades', 
      icon: 'Award', 
      color: 'text-pink-400'
    }
  ]
};