import React from 'react';
import { BookOpen, Calendar, Award, TrendingUp, Clock, FileText, CheckCircle } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Student Dashboard</h1>
        <p className="text-gray-300">My progress & upcoming activities</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">4</h3>
          <p className="text-gray-300 text-sm">Enrolled Classes</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">3</h3>
          <p className="text-gray-300 text-sm">Upcoming Sessions</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">2</h3>
          <p className="text-gray-300 text-sm">Pending Tasks</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">85%</h3>
          <p className="text-gray-300 text-sm">Average Score</p>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Dashboard Under Development</h3>
        <p className="text-gray-400">Full student dashboard features coming soon!</p>
        
        <div className="mt-6 text-left max-w-md mx-auto">
          <h4 className="text-white font-medium mb-3">Planned Features:</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>My Classes Overview</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Upcoming Activities</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Recent Grades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Announcements</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentDashboard;