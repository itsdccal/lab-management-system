// src/config/navigation.js
import { USER_ROLES } from '../utils/constants';

// Comprehensive navigation configuration based on detailed system requirements
export const NAVIGATION_CONFIG = {
  [USER_ROLES.ADMIN]: [
    { 
      name: 'Dashboard', 
      href: '/dashboard', 
      icon: 'Home', 
      color: 'text-blue-400',
      description: 'System overview & health monitoring'
    },
    { 
      name: 'Kelola Users', 
      href: '/users', 
      icon: 'Users', 
      color: 'text-green-400',
      description: 'User management & role assignment'
    },
    { 
      name: 'Mata Kuliah', 
      href: '/subjects', 
      icon: 'BookOpen', 
      color: 'text-purple-400',
      description: 'Subject & assessment configuration'
    },
    { 
      name: 'Kelas & Lab', 
      href: '/class-management', 
      icon: 'Building', 
      color: 'text-orange-400',
      description: 'Class, room & group management'
    },
    { 
      name: 'Laporan', 
      href: '/reports', 
      icon: 'BarChart3', 
      color: 'text-indigo-400',
      description: 'Analytics & performance reports'
    },
    { 
      name: 'Sistem & Konfigurasi', 
      href: '/system-config', 
      icon: 'Settings', 
      color: 'text-pink-400',
      description: 'System settings & configuration'
    }
  ],

  [USER_ROLES.ASSISTANT]: [
    { 
      name: 'Dashboard', 
      href: '/dashboard', 
      icon: 'Home', 
      color: 'text-blue-400',
      description: 'My subjects & session overview'
    },
    { 
      name: 'Sesi Praktikum', 
      href: '/sessions', 
      icon: 'Calendar', 
      color: 'text-green-400',
      description: 'Lab session & attendance management'
    },
    { 
      name: 'Kelompok Siswa', 
      href: '/groups', 
      icon: 'Users', 
      color: 'text-purple-400',
      description: 'Student group management'
    },
    { 
      name: 'Materi', 
      href: '/materials', 
      icon: 'BookOpen', 
      color: 'text-orange-400',
      description: 'Module upload & content organization'
    },
    { 
      name: 'Penilaian', 
      href: '/grading', 
      icon: 'Award', 
      color: 'text-pink-400',
      description: 'Assessment & AI question generator',
      badge: 'AI'
    }
  ],

  [USER_ROLES.STUDENT]: [
    { 
      name: 'Dashboard', 
      href: '/dashboard', 
      icon: 'Home', 
      color: 'text-blue-400',
      description: 'My progress & upcoming activities'
    },
    { 
      name: 'Kelas Saya', 
      href: '/my-class', 
      icon: 'GraduationCap', 
      color: 'text-green-400',
      description: 'Class info, groups & attendance'
    },
    { 
      name: 'Materi', 
      href: '/materials', 
      icon: 'BookOpen', 
      color: 'text-purple-400',
      description: 'Session materials & resources'
    },
    { 
      name: 'Tugas & Quiz', 
      href: '/assignments', 
      icon: 'FileText', 
      color: 'text-orange-400',
      description: 'Pre-test, post-test & assessments'
    },
    { 
      name: 'Rekap Nilai', 
      href: '/grades', 
      icon: 'Award', 
      color: 'text-pink-400',
      description: 'Score breakdown & grade progress'
    }
  ]
};