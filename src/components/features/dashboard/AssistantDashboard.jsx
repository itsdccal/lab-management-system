import React from 'react';
import { Home, Calendar, Users, Award, Brain, CheckCircle } from 'lucide-react';

const AssistantDashboard = () => {
  return (
    <div className="p-6 space-y-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Assistant Dashboard</h1>
        <p className="text-gray-300">My subjects & session overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <Home className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">3</h3>
          <p className="text-gray-300 text-sm">My Subjects</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">5</h3>
          <p className="text-gray-300 text-sm">Upcoming Sessions</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">45</h3>
          <p className="text-gray-300 text-sm">Total Students</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">12</h3>
          <p className="text-gray-300 text-sm">Pending Grades</p>
        </div>
      </div>

      {/* AI Feature Highlight */}
      <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">AI-Powered Assistant Dashboard</h3>
        <p className="text-cyan-300">Advanced features with RAG integration coming soon!</p>
      </div>
    </div>
  );
};

export default AssistantDashboard;