// src/components/features/dashboard/AdminDashboard.jsx
import React from 'react';
import { 
  Users, BookOpen, Activity, Building, Settings, UserPlus,
  GraduationCap, TrendingUp, AlertCircle
} from 'lucide-react';
import QuickActionCard from '../../common/QuickActionCard';
import ActivityItem from '../../common/ActivityItem';

const AdminDashboard = () => {
  const adminData = {
    stats: {
      totalUsers: 1247,
      activeCourses: 24,
      labSessions: 156,
      activeRooms: 12
    },
    activities: [
      {
        text: 'New student registered - Ahmad Rizki (2024001)',
        time: '5 minutes ago',
        type: 'user'
      },
      {
        text: 'Lab session created for Algorithm & Programming',
        time: '15 minutes ago',
        type: 'session'
      },
      {
        text: 'Lab Programming 3 maintenance scheduled',
        time: '1 hour ago',
        type: 'maintenance'
      },
      {
        text: 'New course "Data Structures" added to curriculum',
        time: '2 hours ago',
        type: 'course'
      }
    ]
  };

  const handleQuickAction = (actionType) => {
    console.log(`Quick action: ${actionType}`);
    // TODO: Implement navigation or modal opening here
    // Example: navigate('/admin/users/create');
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">1,247</h3>
          <p className="text-gray-300 text-sm">Total Users</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-xs text-green-400">+12% from last month</span>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{adminData.stats.activeCourses}</h3>
          <p className="text-gray-300 text-sm">Active Courses</p>
          <p className="text-gray-400 text-xs">8 new this semester</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{adminData.stats.labSessions}</h3>
          <p className="text-gray-300 text-sm">Lab Sessions</p>
          <p className="text-gray-400 text-xs">This week</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
              <Building className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{adminData.stats.activeRooms}</h3>
          <p className="text-gray-300 text-sm">Active Rooms</p>
          <p className="text-gray-400 text-xs">98% utilization</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Quick Actions</h2>
              <p className="text-sm text-slate-400">Frequently used administrative tasks</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <QuickActionCard
                icon={<UserPlus className="w-5 h-5" />}
                title="Add New User"
                description="Create student or assistant account"
                onClick={() => handleQuickAction('add-user')}
              />
              <QuickActionCard
                icon={<BookOpen className="w-5 h-5" />}
                title="Create Subject"
                description="Add new course to curriculum"
                onClick={() => handleQuickAction('create-subject')}
              />
              <QuickActionCard
                icon={<GraduationCap className="w-5 h-5" />}
                title="Setup Class"
                description="Configure practical class"
                onClick={() => handleQuickAction('setup-class')}
              />
              <QuickActionCard
                icon={<Settings className="w-5 h-5" />}
                title="Manage Rooms"
                description="Lab room configuration"
                onClick={() => handleQuickAction('manage-rooms')}
              />
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-white mb-1">Recent Activities</h2>
              <p className="text-sm text-slate-400">Latest system activities</p>
            </div>
            
            <div className="space-y-4">
              {adminData.activities.map((activity, index) => (
                <ActivityItem key={index} activity={activity} />
              ))}
            </div>

            <div className="mt-6">
              <button className="w-full py-3 text-center text-blue-300 hover:text-blue-200 text-sm font-medium bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                View All Activities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;