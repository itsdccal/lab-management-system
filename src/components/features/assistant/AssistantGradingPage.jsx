import React from 'react';
import { CheckSquare, Users, BarChart3, Clock, CheckCircle } from 'lucide-react';

const AssistantGradingPage = () => {
  const features = [
    "Assignment Grading",
    "Rubric-based Assessment", 
    "Bulk Grade Entry",
    "Performance Analytics",
    "Feedback Management"
  ];

  return (
    <div className="p-6 space-y-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Penilaian</h1>
        <p className="text-gray-300">Grade assignments & provide feedback</p>
      </div>

      {/* Grading Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">12</h3>
          <p className="text-gray-300 text-sm">Pending Grades</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">38</h3>
          <p className="text-gray-300 text-sm">Graded This Week</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">45</h3>
          <p className="text-gray-300 text-sm">Total Students</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">82.4</h3>
          <p className="text-gray-300 text-sm">Class Average</p>
        </div>
      </div>

      <div className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckSquare className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Grading System Coming Soon</h3>
        <p className="text-gray-400">Comprehensive grading features under development!</p>
        
        <div className="mt-6 text-left max-w-md mx-auto">
          <h4 className="text-white font-medium mb-3">Planned Features:</h4>
          <div className="space-y-2 text-sm text-gray-300">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantGradingPage;