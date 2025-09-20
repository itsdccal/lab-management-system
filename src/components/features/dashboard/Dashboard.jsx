// FIXED DASHBOARD COMPONENT - src/components/features/dashboard/Dashboard.jsx
import { 
  Users, 
  FlaskConical, 
  Calendar, 
  Clock,
  TrendingUp,
  BookOpen,
  Award,
  ArrowRight,
  FileText,
  CheckCircle,
  Bell,
  Star,
  Activity,
  Zap,
  Brain,
  Lightbulb
} from 'lucide-react';
import { useState, useEffect } from 'react';
import useAuthStore from '../../../stores/authStore';

const Dashboard = () => {
  const { user, isAdmin, isAssistant, isStudent } = useAuthStore();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  const getWelcomeMessage = () => {
    if (isAdmin()) return "Welcome back, Administrator!";
    if (isAssistant()) return `Hello, ${user?.name || 'Assistant'}!`;
    if (isStudent()) return `Hello, ${user?.name || 'Student'}!`;
    return "Welcome back!";
  };

  const getSubtitle = () => {
    if (isAdmin()) return "Monitor and manage the entire laboratory system";
    if (isAssistant()) return "Manage lab sessions and evaluate students";
    if (isStudent()) return "Here's what's happening with your courses today.";
    return "";
  };

  // Stats berdasarkan role
  const getStats = () => {
    if (isAdmin()) {
      return [
        { title: 'Total Users', value: '245', desc: '+12 this month', icon: Users, color: 'text-blue-500' },
        { title: 'Lab Sessions', value: '48', desc: '+3 this week', icon: FlaskConical, color: 'text-green-500' },
        { title: 'Lab Rooms', value: '8', desc: 'All active', icon: Calendar, color: 'text-purple-500' },
        { title: 'Subjects', value: '12', desc: '+2 new courses', icon: BookOpen, color: 'text-orange-500' }
      ];
    }
    
    if (isAssistant()) {
      return [
        { title: 'My Sessions', value: '6', desc: 'This week', icon: Calendar, color: 'text-blue-500' },
        { title: 'Students', value: '89', desc: 'In my groups', icon: Users, color: 'text-green-500' },
        { title: 'Pending Grades', value: '15', desc: 'To be graded', icon: FileText, color: 'text-orange-500' },
        { title: 'Avg Rating', value: '4.8', desc: 'Student feedback', icon: Star, color: 'text-yellow-500' }
      ];
    }
    
    // Student stats
    return [
      { title: 'Enrolled Courses', value: '4', desc: 'This semester', icon: BookOpen, color: 'text-blue-500' },
      { title: 'Attendance', value: '92%', desc: 'Overall rate', icon: CheckCircle, color: 'text-green-500' },
      { title: 'Pending Tasks', value: '3', desc: 'Due soon', icon: FileText, color: 'text-orange-500' },
      { title: 'Current CGPA', value: '8.75', desc: 'Out of 10', icon: Award, color: 'text-purple-500' }
    ];
  };

  // Recent activities berdasarkan role
  const getRecentActivities = () => {
    if (isAdmin()) {
      return [
        { id: 1, title: 'New assistant registered', desc: 'Dr. Ahmad joined as Database Lab assistant', time: '2 hours ago' },
        { id: 2, title: 'Lab equipment updated', desc: 'Lab RPL-01 received new computers', time: '5 hours ago' },
        { id: 3, title: 'System backup completed', desc: 'Daily backup successful - 2.3GB', time: '1 day ago' }
      ];
    }
    
    if (isAssistant()) {
      return [
        { id: 1, title: 'Session completed', desc: 'Algorithm & Programming - 28/30 students attended', time: '1 hour ago' },
        { id: 2, title: 'Assignment created', desc: 'Binary Search Implementation - Due in 3 days', time: '3 hours ago' },
        { id: 3, title: 'Student submitted late', desc: 'Database Project - 2 days late submission', time: '5 hours ago' }
      ];
    }
    
    // Student activities
    return [
      { id: 1, title: 'Assignment submitted', desc: 'Deep Learning Project - CNN Implementation submitted successfully', time: '30 minutes ago' },
      { id: 2, title: 'Grade received', desc: 'Information Retrieval Quiz - Score: 88/100', time: '2 hours ago' },
      { id: 3, title: 'New assignment', desc: 'Quantum Algorithm Analysis - Due in 5 days', time: '4 hours ago' }
    ];
  };

  const stats = getStats();
  const recentActivities = getRecentActivities();

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
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Header */}
        <div className="card-gradient p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/10 translate-y-36 -translate-x-36"></div>
          </div>
          
          <div className="relative">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-white rounded-full"></div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white">
                    {getWelcomeMessage()} 👋
                  </h1>
                </div>
                <p className="text-white/90 text-lg">
                  {getSubtitle()}
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="badge badge-lg bg-white/20 text-white border-white/30 capitalize font-semibold">
                    {user.role}
                  </div>
                  {user.NIM && (
                    <div className="badge badge-lg bg-white/20 text-white border-white/30">
                      NIM: {user.NIM}
                    </div>
                  )}
                  {user.class && (
                    <div className="badge badge-lg bg-white/20 text-white border-white/30">
                      Class: {user.class}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Real-time Clock */}
              <div className="text-right space-y-2">
                <div className="text-white/80 text-sm font-medium">
                  {formatDate(currentTime)}
                </div>
                <div className="text-3xl font-bold text-white font-mono">
                  {formatTime(currentTime)}
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="card-modern p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in bg-gradient-to-br from-white to-gray-50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+5%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {stat.title}
                  </h3>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-500">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Progress */}
          <div className="lg:col-span-2">
            <div className="card-modern p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-base-content">
                      {isStudent() ? 'Your Courses' : isAssistant() ? 'Teaching Schedule' : 'System Overview'}
                    </h2>
                    <p className="text-sm text-base-content/60">
                      {isStudent() ? 'Continue learning with your enrolled courses' : 
                       isAssistant() ? 'Manage your lab sessions' : 'Monitor system performance'}
                    </p>
                  </div>
                </div>
                <div className="badge badge-primary badge-lg">
                  {isStudent() ? '4 Active' : isAssistant() ? '6 Sessions' : '12 Total'}
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Deep Learning', instructor: 'Dr. Chiranjib Bhattacharyya', progress: 75, code: 'CS7015' },
                  { name: 'Information Retrieval', instructor: 'Prof. Uday Khedker', progress: 60, code: 'CS6370' },
                  { name: 'Advanced Algorithms', instructor: 'Dr. Anand Raghunathan', progress: 85, code: 'CS6363' }
                ].map((course, index) => (
                  <div key={index} className="group p-5 rounded-2xl bg-gradient-to-r from-base-100 to-base-200 hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 border border-base-300 hover:border-primary/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {course.code.slice(-2)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-base-content group-hover:text-primary transition-colors">
                            {course.name}
                          </h3>
                          <p className="text-sm text-base-content/60">{course.instructor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-base-content/60">{course.code}</div>
                        <div className="text-lg font-bold text-base-content">{course.progress}%</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="w-full bg-base-300 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <button className="btn btn-sm btn-circle btn-ghost group-hover:btn-primary transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card-modern p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-success to-success/80 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold">Quick Actions</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Calendar, label: isStudent() ? 'Schedule' : 'Sessions' },
                  { icon: BookOpen, label: isStudent() ? 'Materials' : 'Modules' },
                  { icon: FileText, label: isStudent() ? 'Submit Task' : 'Assignments' },
                  { icon: Award, label: 'Grades' }
                ].map((action, index) => (
                  <button 
                    key={index}
                    className="btn btn-outline btn-sm flex-col h-auto py-4 hover:scale-105 transition-transform group"
                  >
                    <action.icon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="card-modern p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-warning to-warning/80 rounded-lg">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold">Recent Activities</h2>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-base-200 rounded-xl transition-colors">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                        <span className="text-xs font-bold">{activity.id}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-base-content truncate">
                        {activity.title}
                      </h3>
                      <p className="text-xs text-base-content/70 mb-2">
                        {activity.desc}
                      </p>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-base-content/50" />
                        <span className="text-xs text-base-content/50">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="btn btn-outline btn-sm w-full mt-4">
                View All Activities
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* AI Assistant Card */}
            <div className="card-gradient p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">AI Assistant</h2>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Get personalized help with your coursework and assignments.
                </p>
                <button className="btn btn-outline btn-sm text-white border-white/30 hover:bg-white hover:text-primary">
                  <Lightbulb className="w-4 h-4" />
                  Ask AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;