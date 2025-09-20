// src/components/layout/MainLayout.jsx - Beautiful Modern Layout
import { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  Menu, 
  X,
  FlaskConical, 
  Home,
  Users,
  BookOpen,
  GraduationCap,
  Building,
  BarChart3,
  Calendar,
  FileText,
  Clock,
  Award,
  Settings,
  LogOut,
  Sun,
  Moon,
  Bell,
  Search,
  ChevronDown,
  User,
  Zap
} from 'lucide-react';
import useAuthStore from '../../stores/authStore';
import useThemeStore from '../../stores/themeStore';
import { USER_ROLES } from '../../utils/constants';

const MainLayout = () => {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  // Icon mapping
  const iconMap = {
    Home, Users, BookOpen, GraduationCap, Building, BarChart3,
    Calendar, FileText, Clock, Award, Settings
  };

  // Enhanced Navigation dengan icons dan colors
  const getNavigation = (role) => {
    const navMap = {
      [USER_ROLES.ADMIN]: [
        { name: 'Dashboard', href: '/dashboard', icon: 'Home', color: 'text-blue-500', bgColor: 'bg-blue-50' },
        { name: 'Kelola Users', href: '/users', icon: 'Users', color: 'text-green-500', bgColor: 'bg-green-50' },
        { name: 'Mata Kuliah', href: '/subjects', icon: 'BookOpen', color: 'text-purple-500', bgColor: 'bg-purple-50' },
        { name: 'Kelas', href: '/classes', icon: 'GraduationCap', color: 'text-orange-500', bgColor: 'bg-orange-50' },
        { name: 'Ruangan Lab', href: '/rooms', icon: 'Building', color: 'text-pink-500', bgColor: 'bg-pink-50' },
        { name: 'Laporan', href: '/reports', icon: 'BarChart3', color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
      ],
      [USER_ROLES.ASSISTANT]: [
        { name: 'Dashboard', href: '/dashboard', icon: 'Home', color: 'text-blue-500', bgColor: 'bg-blue-50' },
        { name: 'Sesi Praktikum', href: '/sessions', icon: 'Calendar', color: 'text-green-500', bgColor: 'bg-green-50' },
        { name: 'Kelompok Siswa', href: '/groups', icon: 'Users', color: 'text-purple-500', bgColor: 'bg-purple-50' },
        { name: 'Modul & Indikator', href: '/modules', icon: 'BookOpen', color: 'text-orange-500', bgColor: 'bg-orange-50' },
        { name: 'Tugas & Assessment', href: '/assessments', icon: 'FileText', color: 'text-pink-500', bgColor: 'bg-pink-50' },
        { name: 'Presensi', href: '/attendance', icon: 'Clock', color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
        { name: 'Penilaian', href: '/grades', icon: 'Award', color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
      ],
      [USER_ROLES.STUDENT]: [
        { name: 'Dashboard', href: '/dashboard', icon: 'Home', color: 'text-blue-500', bgColor: 'bg-blue-50' },
        { name: 'Jadwal Praktikum', href: '/schedule', icon: 'Calendar', color: 'text-green-500', bgColor: 'bg-green-50' },
        { name: 'Modul & Materi', href: '/modules', icon: 'BookOpen', color: 'text-purple-500', bgColor: 'bg-purple-50' },
        { name: 'Tugas Praktikum', href: '/assignments', icon: 'FileText', color: 'text-orange-500', bgColor: 'bg-orange-50' },
        { name: 'Presensi Saya', href: '/attendance', icon: 'Clock', color: 'text-pink-500', bgColor: 'bg-pink-50' },
        { name: 'Nilai Saya', href: '/grades', icon: 'Award', color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
      ],
    };
    return navMap[role] || [];
  };

  const navigationItems = getNavigation(user?.role);

  const getUserInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center text-primary-content">
          <div className="loading loading-spinner loading-lg mb-4"></div>
          <p className="text-lg">Loading your workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Modern Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-72 bg-base-100 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 border-r border-base-300`}>
        
        {/* Sidebar Header */}
        <div className="p-6 border-b border-base-300 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg">
              <FlaskConical className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-base-content">Lab Management</h1>
              <p className="text-xs text-base-content/60">Sistem Informasi Lab</p>
            </div>
          </div>
        </div>

        {/* User Profile Card */}
        <div className="p-6 border-b border-base-300">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                {getUserInitials(user.name)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base-content truncate">{user.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="badge badge-primary badge-sm capitalize">{user.role}</div>
                {user.NIM && (
                  <div className="badge badge-ghost badge-sm">{user.NIM}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="p-4 flex-1 overflow-y-auto">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg transform scale-105' 
                        : 'text-base-content hover:bg-base-200 hover:scale-105'
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <div className={`p-2 rounded-lg transition-all duration-200 ${
                        isActive ? 'bg-white/20' : item.bgColor
                      }`}>
                        <IconComponent className={`w-5 h-5 ${
                          isActive ? 'text-white' : item.color
                        }`} />
                      </div>
                      <span className="font-medium text-sm">{item.name}</span>
                      {isActive && (
                        <div className="ml-auto">
                          <Zap className="w-4 h-4 text-white animate-pulse" />
                        </div>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-base-300 space-y-2">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-base-content hover:bg-base-200 transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="p-2 bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <span className="font-medium text-sm">Pengaturan</span>
          </NavLink>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-error hover:bg-error/10 transition-all duration-200 w-full"
          >
            <div className="p-2 bg-error/10 rounded-lg">
              <LogOut className="w-5 h-5 text-error" />
            </div>
            <span className="font-medium text-sm">Keluar</span>
          </button>
        </div>
      </div>

      {/* Overlay untuk mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen">
        {/* Modern Header */}
        <header className="bg-base-100 shadow-sm border-b border-base-300 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="btn btn-ghost btn-sm lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Search Bar */}
              <div className="hidden md:flex items-center gap-2 bg-base-200 rounded-xl px-4 py-2 min-w-96">
                <Search className="w-4 h-4 text-base-content/50" />
                <input 
                  type="text" 
                  placeholder="Search anything..." 
                  className="bg-transparent flex-1 outline-none text-sm"
                />
                <kbd className="kbd kbd-xs">⌘K</kbd>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="btn btn-ghost btn-sm btn-circle"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>

              {/* Notifications */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle">
                  <div className="indicator">
                    <Bell className="w-4 h-4" />
                    <span className="badge badge-xs badge-primary indicator-item">3</span>
                  </div>
                </div>
                <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-80 p-4 shadow-xl bg-base-100 border border-base-300 mt-3">
                  <div className="card-body">
                    <h3 className="font-bold mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                        <div className="avatar placeholder">
                          <div className="bg-primary text-primary-content rounded-full w-8 h-8">
                            <span className="text-xs">N</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">New assignment posted</p>
                          <p className="text-xs text-base-content/60">Database Design - Due in 3 days</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg">
                        <div className="avatar placeholder">
                          <div className="bg-success text-success-content rounded-full w-8 h-8">
                            <span className="text-xs">G</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">Grade updated</p>
                          <p className="text-xs text-base-content/60">Web Programming Quiz - 88/100</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <button className="btn btn-primary btn-sm">View All</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Menu */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-2">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                      {getUserInitials(user.name)}
                    </div>
                  </div>
                  <ChevronDown className="w-3 h-3" />
                </div>
                <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-4 shadow-xl bg-base-100 border border-base-300 mt-3">
                  <div className="card-body">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                          {getUserInitials(user.name)}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-base-content/60 capitalize">{user.role}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button className="btn btn-ghost btn-sm justify-start w-full">
                        <User className="w-4 h-4" />
                        Profile
                      </button>
                      <button className="btn btn-ghost btn-sm justify-start w-full">
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                    </div>
                    <div className="divider my-2"></div>
                    <button 
                      onClick={handleLogout}
                      className="btn btn-error btn-sm justify-start w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;