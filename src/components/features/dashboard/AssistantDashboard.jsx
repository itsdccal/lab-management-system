import React from 'react';
import { 
  Calendar, Users, FileText, BarChart3, Clock, Activity,
  CheckCircle, AlertCircle
} from 'lucide-react';
import StatCard from '../../common/StatCard';
import SessionCard from '../../common/SessionCard';
import ActivityItem from '../../common/ActivityItem';

const AssistantDashboard = () => {
  const assistantData = {
    stats: {
      todaySessions: 3,
      activeStudents: 85,
      pendingTasks: 12,
      avgScore: 78.5
    },
    sessions: [
      {
        subject: 'Algoritma dan Pemrograman',
        class: 'Class A1 • 08:00 - 10:00',
        time: '08:00',
        topic: 'Lab Pemrograman 1 • Struktur Kontrol Python',
        studentsCount: 28
      },
      {
        subject: 'Algoritma dan Pemrograman',
        class: 'Class A2 • 10:00 - 12:00',
        time: '10:00',
        topic: 'Lab Pemrograman 1 • Fungsi dan Prosedur',
        studentsCount: 25
      },
      {
        subject: 'Pemrograman Web',
        class: 'Class B1 • 13:00 - 15:00',
        time: '13:00',
        topic: 'Lab Pemrograman 2 • JavaScript DOM Manipulation',
        studentsCount: 22
      }
    ],
    activities: [
      {
        text: 'Assignment "Array dan List" - 15 new submissions',
        time: '30 minutes ago',
        type: 'assignment'
      },
      {
        text: 'Class A1 attendance - 28/30 students present',
        time: '2 hours ago',
        type: 'attendance'
      },
      {
        text: 'Module "Data Structures" successfully uploaded',
        time: '1 day ago',
        type: 'upload'
      }
    ]
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{assistantData.stats.todaySessions}</h3>
          <p className="text-gray-300 text-sm">Today's Sessions</p>
          <p className="text-gray-400 text-xs">Lab Programming 1,2</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{assistantData.stats.activeStudents}</h3>
          <p className="text-gray-300 text-sm">Active Students</p>
          <p className="text-gray-400 text-xs">From 4 classes</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
              <FileText className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{assistantData.stats.pendingTasks}</h3>
          <p className="text-gray-300 text-sm">Pending Tasks</p>
          <p className="text-gray-400 text-xs">Need grading</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{assistantData.stats.avgScore}</h3>
          <p className="text-gray-300 text-sm">Avg Score</p>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-green-400">+2.3 from last week</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-blue-400" />
              <div>
                <h2 className="text-xl font-bold text-white">Today's Schedule</h2>
                <p className="text-sm text-slate-400">Upcoming practical sessions</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {assistantData.sessions.map((session, index) => (
                <SessionCard key={index} session={session} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-green-400" />
              <div>
                <h2 className="text-lg font-bold text-white">Recent Activities</h2>
                <p className="text-sm text-slate-400">Latest updates from your classes</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {assistantData.activities.map((activity, index) => (
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

export default AssistantDashboard;