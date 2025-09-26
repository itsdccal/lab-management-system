import React from 'react';
import { Award, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';

const StudentGradesPage = () => {
  const features = [
    "Grade Overview",
    "Performance Analytics", 
    "Progress Tracking",
    "Grade History",
    "Performance Insights"
  ];

  return (
    <div className="p-6 space-y-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Nilai & Penilaian</h1>
        <p className="text-gray-300">View grades & performance analytics</p>
      </div>

      {/* Grade Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">85.2</h3>
          <p className="text-gray-300 text-sm">Average Score</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">A-</h3>
          <p className="text-gray-300 text-sm">Current Grade</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white">↑ 7.3%</h3>
          <p className="text-gray-300 text-sm">Improvement</p>
        </div>
      </div>

      <div className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Grades System Coming Soon</h3>
        <p className="text-gray-400">Comprehensive grade tracking under development!</p>
        
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

export default StudentGradesPage;