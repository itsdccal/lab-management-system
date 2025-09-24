// src/components/layout/MainLayout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { 
  Menu, X, FlaskConical, Home, Users, BookOpen, GraduationCap, Building, 
  BarChart3, Calendar, FileText, Clock, Award, Settings, LogOut, Sun, Moon, 
  Bell, Search, ChevronDown, User, Zap, ChevronLeft
} from 'lucide-react';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);
  
  // Sample user data - would come from auth store
  const user = {
    name: 'Andi Muh haikal',
    role: 'Student',
    NIM: 'H071221089'
  };

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = () => {
    // Logout logic
    console.log('Logout');
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };

  // Icon mapping
  const iconMap = {
    Home, Users, BookOpen, GraduationCap, Building, BarChart3,
    Calendar, FileText, Clock, Award, Settings
  };

  // Navigation based on role
  const getNavigation = (role) => {
    const navMap = {
      'admin': [
        { name: 'Dashboard', href: '/dashboard', icon: 'Home', color: 'text-blue-400' },
        { name: 'Kelola Users', href: '/users', icon: 'Users', color: 'text-green-400' },
        { name: 'Mata Kuliah', href: '/subjects', icon: 'BookOpen', color: 'text-purple-400' },
        { name: 'Kelas', href: '/classes', icon: 'GraduationCap', color: 'text-orange-400' },
        { name: 'Ruangan Lab', href: '/rooms', icon: 'Building', color: 'text-pink-400' },
        { name: 'Laporan', href: '/reports', icon: 'BarChart3', color: 'text-indigo-400' },
      ],
      'assistant': [
        { name: 'Dashboard', href: '/dashboard', icon: 'Home', color: 'text-blue-400' },
        { name: 'Sesi Praktikum', href: '/sessions', icon: 'Calendar', color: 'text-green-400' },
        { name: 'Kelompok Siswa', href: '/groups', icon: 'Users', color: 'text-purple-400' },
        { name: 'Modul & Indikator', href: '/modules', icon: 'BookOpen', color: 'text-orange-400' },
        { name: 'Tugas & Assessment', href: '/assessments', icon: 'FileText', color: 'text-pink-400' },
        { name: 'Presensi', href: '/attendance', icon: 'Clock', color: 'text-indigo-400' },
        { name: 'Penilaian', href: '/grades', icon: 'Award', color: 'text-yellow-400' },
      ],
      'student': [
        { name: 'Dashboard', href: '/dashboard', icon: 'Home', color: 'text-blue-400', current: true },
        { name: 'Schedule', href: '/schedule', icon: 'Calendar', color: 'text-green-400' },
        { name: 'Assignments', href: '/assignments', icon: 'FileText', color: 'text-purple-400' },
        { name: 'Courses', href: '/courses', icon: 'BookOpen', color: 'text-orange-400' },
        { name: 'Grades', href: '/grades', icon: 'Award', color: 'text-pink-400' },
      ]
    };
    return navMap[role.toLowerCase()] || navMap['student'];
  };

  const navigationItems = getNavigation(user.role);

  const getUserInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  // Get current page name
  const getCurrentPageName = () => {
    const currentItem = navigationItems.find(item => item.current);
    return currentItem ? currentItem.name : 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-500/6 to-blue-500/6 rounded-full blur-3xl animate-bounce"></div>
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Sidebar - Fixed & Full Height */}
        {sidebarOpen && (
          <div className={`${isMobile ? 'fixed inset-y-0 left-0 z-50' : 'relative'} w-72 flex flex-col bg-black/20 backdrop-blur-xl border-r border-white/10`}>
            
            {/* Sidebar Header */}
            <div className="flex items-center gap-3 p-6 border-b border-white/10 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <img 
                      src="/lab-logo.png"
                      alt="Lab SI UNHAS Logo" 
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-bold text-white">Lab Portal</h1>
                <p className="text-xs text-gray-400">Sistem Informasi</p>
              </div>
              {isMobile && (
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 p-4 overflow-y-auto">
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                        item.current
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30 shadow-lg'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/10 border border-transparent'
                      }`}
                      onClick={() => isMobile && setSidebarOpen(false)}
                    >
                      <div className={`p-2 rounded-lg transition-all duration-200 ${
                        item.current ? 'bg-white/10' : 'bg-transparent group-hover:bg-white/5'
                      }`}>
                        <IconComponent className={`w-5 h-5 ${item.current ? 'text-white' : item.color}`} />
                      </div>
                      <span className="font-medium text-sm">{item.name}</span>
                      {item.current && (
                        <div className="ml-auto">
                          <Zap className="w-4 h-4 text-blue-300 animate-pulse" />
                        </div>
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* User Profile & Controls */}
            <div className="p-4 border-t border-white/10 flex-shrink-0 space-y-4">
              {/* User Profile */}
              <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {getUserInitials(user.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate text-sm">{user.name}</p>
                  <p className="text-xs text-gray-400 capitalize">{user.role}</p>
                </div>
              </div>
              
              {/* Simple Full Width Logout Button */}
              <div className="w-full">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 rounded-xl transition-all duration-300 text-gray-300 hover:text-red-300"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Header */}
          <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 flex-shrink-0">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Left Side - Toggle & Page Title */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                  title="Toggle Sidebar"
                >
                  {sidebarOpen && !isMobile ? (
                    <ChevronLeft className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
                
                <div>
                  <h1 className="text-xl font-bold text-white">{getCurrentPageName()}</h1>
                </div>
              </div>

              {/* Right Side - Date & Time */}
              <div className="text-right">
                <div className="text-sm text-slate-300 font-medium">
                  {formatDate(currentTime)}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {formatTime(currentTime)}
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;