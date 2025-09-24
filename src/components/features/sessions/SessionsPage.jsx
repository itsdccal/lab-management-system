import React from 'react';
import { FileText, Upload, Award, CheckCircle } from 'lucide-react';

const StudentAssignmentsPage = () => {
  return (
    <div className="p-6 space-y-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Tugas & Quiz</h1>
        <p className="text-gray-300"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4"></div>
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                        <FileText className="w-6 h-6 text-white" />
                    </div>
                <h3 className="text-2xl font-bold text-white">Quiz 1</h3>
                <p className="text-gray-300 text-sm mb-4">Deadline: 2024-07-10</p>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300"></button>
                    <Upload className="w-5 h-5" />
                    Upload Submission
                </button>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"></div>
                <div className="flex items-center gap-3 mb-4"></div>
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
                        <Award className="w-6 h-6 text-white" />
                    </div>
                <h3 className="text-2xl font-bold text-white">Tugas 1</h3>
                <p className="text-gray-300 text-sm mb-4">Deadline: 2024-07-15</p>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300">
                    <Upload className="w-5 h-5" />
                    Upload Submission
                </button>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"></div>
                <div className="flex items-center gap-3 mb-4"></div>
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600"> 
                    