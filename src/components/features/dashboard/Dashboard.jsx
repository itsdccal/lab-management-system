import React from 'react';
import { 
  BookOpen, Brain, Award, FileText, TrendingUp, CheckCircle, 
  AlertCircle, Clock, Calendar, Database, Code, BarChart3
} from 'lucide-react';

const Dashboard = () => {
  // Dashboard data sesuai dengan ERD dan referensi - sekarang dalam MainLayout wrapper
  const dashboardData = {
    stats: {
      enrolledCourses: 4,
      researchProjects: 2,
      cgpa: 8.75,
      publications: 3
    },
    courses: [
      {
        id: 'CS108',
        name: 'Deep Learning',
        instructor: 'Dr. Machine Bharadwaj',
        progress: 75,
        code: 'CS108',
        color: 'purple'
      },
      {
        id: 'CS416',
        name: 'Information Retrieval',
        instructor: 'Prof. Utility Dweller',
        progress: 60,
        code: 'CS416',
        color: 'blue'
      },
      {
        id: 'CS363',
        name: 'Advanced Algorithms',
        instructor: 'Dr. Anand Seetharam',
        progress: 85,
        code: 'CS363',
        color: 'green'
      }
    ],
    assignments: [
      {
        title: 'Deep Learning Project - CNN Implementation',
        course: 'CS108',
        dueDate: '30/9/2024',
        status: 'overdue',
        priority: 'high'
      },
      {
        title: 'Research Paper Review - Information Retrieval',
        course: 'CS416',  
        dueDate: '28/9/2024',
        status: 'due-soon',
        priority: 'medium'
      },
      {
        title: 'Quantum Algorithm Analysis',
        course: 'CS623',
        dueDate: '5/10/2024',
        status: 'upcoming',
        priority: 'low'
      }
    ]
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, gradient }) => (
    <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <Icon className="w-full h-full text-white" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${gradient} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-400 font-medium">+12%</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
          <p className="text-sm font-medium text-slate-300">{title}</p>
          <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );

  const CourseCard = ({ course }) => {
    const colorClasses = {
      purple: {
        dot: 'bg-purple-500',
        badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        progress: 'from-purple-500 to-purple-600'
      },
      blue: {
        dot: 'bg-blue-500',
        badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        progress: 'from-blue-500 to-blue-600'
      },
      green: {
        dot: 'bg-green-500',
        badge: 'bg-green-500/20 text-green-300 border-green-500/30',
        progress: 'from-green-500 to-green-600'
      }
    };

    const colors = colorClasses[course.color];

    return (
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 hover:shadow-lg hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className={`w-3 h-3 rounded-full ${colors.dot}`}></div>
          <span className={`text-xs px-2 py-1 rounded-full border ${colors.badge}`}>
            {course.code}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2">{course.name}</h3>
        <p className="text-sm text-slate-300 mb-4">{course.instructor}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">Progress</span>
            <span className="text-xs font-medium text-slate-300">{course.progress}%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${colors.progress} transition-all duration-500`}
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  const AssignmentItem = ({ assignment }) => {
    const statusConfig = {
      overdue: {
        color: 'text-red-400',
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        icon: AlertCircle,
        dot: 'bg-red-500',
        badgeBg: 'bg-red-500/20',
        text: 'Overdue'
      },
      'due-soon': {
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        icon: Clock,
        dot: 'bg-yellow-500',
        badgeBg: 'bg-yellow-500/20',
        text: 'Due Soon'
      },
      upcoming: {
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        icon: CheckCircle,
        dot: 'bg-green-500',
        badgeBg: 'bg-green-500/20',
        text: 'Upcoming'
      }
    };

    const config = statusConfig[assignment.status];
    const StatusIcon = config.icon;

    return (
      <div className={`flex items-center gap-4 p-4 ${config.bg} border ${config.border} rounded-xl hover:bg-opacity-20 transition-all duration-300`}>
        <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-white truncate mb-1">{assignment.title}</h4>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">{assignment.course}</span>
            <span className="text-xs text-slate-500">•</span>
            <span className={`text-xs font-medium ${config.color}`}>
              {assignment.dueDate}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full ${config.badgeBg} ${config.color} border ${config.border}`}>
            {config.text}
          </span>
          <StatusIcon className={`w-4 h-4 ${config.color}`} />
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-8 min-h-screen">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={BookOpen}
          title="Enrolled Courses"
          value={dashboardData.stats.enrolledCourses}
          subtitle="This semester"
          gradient="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <StatCard 
          icon={Brain}
          title="Research Projects"
          value={dashboardData.stats.researchProjects}
          subtitle="In progress"
          gradient="bg-gradient-to-br from-green-500 to-green-600"
        />
        <StatCard 
          icon={Award}
          title="CGPA"
          value={dashboardData.stats.cgpa}
          subtitle="Out of 10"
          gradient="bg-gradient-to-br from-purple-500 to-purple-600"
        />
        <StatCard 
          icon={FileText}
          title="Publications"
          value={dashboardData.stats.publications}
          subtitle="Under review"
          gradient="bg-gradient-to-br from-orange-500 to-orange-600"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Your Courses */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Your Courses</h2>
                <p className="text-sm text-slate-400">Continue learning with your enrolled courses</p>
              </div>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300 text-sm font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {dashboardData.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div>
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-white mb-1">Upcoming Assignments</h2>
              <p className="text-sm text-slate-400">Don't forget these deadlines</p>
            </div>
            
            <div className="space-y-4">
              {dashboardData.assignments.map((assignment, index) => (
                <AssignmentItem key={index} assignment={assignment} />
              ))}
            </div>

            <div className="mt-6">
              <button className="w-full py-3 text-center text-blue-300 hover:text-blue-200 text-sm font-medium bg-blue-500/10 border border-blue-500/20 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                View All Assignments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;