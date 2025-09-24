import React from 'react';
import { Shield, Users, BookOpen, Building, BarChart3, Settings, CheckCircle } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-300">System overview & health monitoring</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">156</h3>
          <p className="text-gray-300 text-sm">Total Users</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">8</h3>
          <p className="text-gray-300 text-sm">Active Subjects</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
              <Building className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">12</h3>
          <p className="text-gray-300 text-sm">Active Classes</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">98%</h3>
          <p className="text-gray-300 text-sm">System Health</p>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Admin Dashboard Under Development</h3>
        <p className="text-gray-400">Comprehensive system management features coming soon!</p>
      </div>
    </div>
  );
};

export default AdminDashboard;