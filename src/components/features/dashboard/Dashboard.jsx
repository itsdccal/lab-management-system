// src/components/features/dashboard/Dashboard.jsx - Beautiful Dashboard
import { 
  Users, 
  FlaskConical, 
  Calendar, 
  Clock,
  TrendingUp,
  BookOpen,
  Award,
  ArrowRight,
  Home,
  FileText,
  CheckCircle,
  AlertCircle,
  Bell,
  Star,
  Target,
  Activity
} from 'lucide-react';
import useAuthStore from '../../../stores/authStore';
import { USER_ROLES } from '../../../utils/constants';
import { formatDate } from '../../../utils/helpers';

const Dashboard = () => {
  const { user, isAdmin, isAssistant, isStudent } = useAuthStore();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="mt-4 text-base-content/60">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Stats berdasarkan role dengan visual yang menarik
  const getStatsForRole = (role) => {
    const statsMap = {
      [USER_ROLES.ADMIN]: [
        {
          title: 'Total Users',
          value: '245',
          desc: '+12 this month',
          icon: Users,
          gradient: 'from-blue-500 to-blue-600',
          bgGradient: 'from-blue-50 to-blue-100',
          trend: '+12%'
        },
        {
          title: 'Lab Sessions',
          value: '48',
          desc: '+3 this week',
          icon: FlaskConical,
          gradient: 'from-green-500 to-green-600',
          bgGradient: 'from-green-50 to-green-100',
          trend: '+8%'
        },
        {
          title: 'Lab Rooms',
          value: '8',
          desc: 'All active',
          icon: Home,
          gradient: 'from-purple-500 to-purple-600',
          bgGradient: 'from-purple-50 to-purple-100',
          trend: '100%'
        },
        {
          title: 'Subjects',
          value: '12',
          desc: '+2 new courses',
          icon: BookOpen,
          gradient: 'from-orange-500 to-orange-600',
          bgGradient: 'from-orange-50 to-orange-100',
          trend: '+20%'
        }
      ],
      [USER_ROLES.ASSISTANT]: [
        {
          title: 'My Sessions',
          value: '6',
          desc: 'This week',
          icon: Calendar,
          gradient: 'from-blue-500 to-blue-600',
          bgGradient: 'from-blue-50 to-blue-100',
          trend: '+2'
        },
        {
          title: 'Students',
          value: '89',
          desc: 'In my groups',
          icon: Users,
          gradient: 'from-green-500 to-green-600',
          bgGradient: 'from-green-50 to-green-100',
          trend: '+5'
        },
        {
          title: 'Pending Grades',
          value: '15',
          desc: 'To be graded',
          icon: FileText,
          gradient: 'from-orange-500 to-orange-600',
          bgGradient: 'from-orange-50 to-orange-100',
          trend: '-3'
        },
        {
          title: 'Avg Rating',
          value: '4.8',
          desc: 'Student feedback',
          icon: Star,
          gradient: 'from-yellow-500 to-yellow-600',
          bgGradient: 'from-yellow-50 to-yellow-100',
          trend: '+0.2'
        }
      ],
      [USER_ROLES.STUDENT]: [
        {
          title: 'My Subjects',
          value: '4',
          desc: 'This semester',
          icon: BookOpen,
          gradient: 'from-blue-500 to-blue-600',
          bgGradient: 'from-blue-50 to-blue-100',
          trend: '100%'
        },
        {
          title: 'Attendance',
          value: '92%',
          desc: 'Overall rate',
          icon: CheckCircle,
          gradient: 'from-green-500 to-green-600',
          bgGradient: 'from-green-50 to-green-100',
          trend: '+2%'
        },
        {
          title: 'Pending Tasks',
          value: '3',
          desc: 'Due soon',
          icon: FileText,
          gradient: 'from-orange-500 to-orange-600',
          bgGradient: 'from-orange-50 to-orange-100',
          trend: '-1'
        },
        {
          title: 'Avg Score',
          value: '85',
          desc: 'Out of 100',
          icon: Award,
          gradient: 'from-purple-500 to-purple-600',
          bgGradient: 'from-purple-50 to-purple-100',
          trend: '+5'
        }
      ]
    };

    return statsMap[role] || [];
  };

  // Recent activities dengan visual yang menarik
  const getRecentActivities = (role) => {
    const activitiesMap = {
      [USER_ROLES.ADMIN]: [
        {
          id: '1',
          title: 'New assistant registered',
          description: 'Dr. Ahmad joined as Database Lab assistant',
          time: '2 hours ago',
          type: 'user',
          avatar: 'https://ui-avatars.com/api/?name=Dr+Ahmad&background=3b82f6&color=fff',
          badge: 'success'
        },
        {
          id: '2',
          title: 'Lab equipment updated',
          description: 'Lab RPL-01 received new computers',
          time: '5 hours ago',
          type: 'update',
          avatar: 'https://ui-avatars.com/api/?name=Lab+RPL&background=10b981&color=fff',
          badge: 'info'
        },
        {
          id: '3',
          title: 'System backup completed',
          description: 'Daily backup successful - 2.3GB',
          time: '1 day ago',
          type: 'system',
          avatar: 'https://ui-avatars.com/api/?name=System&background=8b5cf6&color=fff',
          badge: 'success'
        }
      ],
      [USER_ROLES.ASSISTANT]: [
        {
          id: '1',
          title: 'Session completed',
          description: 'Algorithm & Programming - 28/30 students attended',
          time: '1 hour ago',
          type: 'session',
          avatar: 'https://ui-avatars.com/api/?name=Algo&background=3b82f6&color=fff',
          badge: 'success'
        },
        {
          id: '2',
          title: 'Assignment created',
          description: 'Binary Search Implementation - Due in 3 days',
          time: '3 hours ago',
          type: 'assignment',
          avatar: 'https://ui-avatars.com/api/?name=Assignment&background=f59e0b&color=fff',
          badge: 'warning'
        },
        {
          id: '3',
          title: 'Student submitted late',
          description: 'Database Project - 2 days late submission',
          time: '5 hours ago',
          type: 'submission',
          avatar: 'https://ui-avatars.com/api/?name=Late&background=ef4444&color=fff',
          badge: 'error'
        }
      ],
      [USER_ROLES.STUDENT]: [
        {
          id: '1',
          title: 'Assignment submitted',
          description: 'Database Design Project submitted successfully',
          time: '30 minutes ago',
          type: 'assignment',
          avatar: 'https://ui-avatars.com/api/?name=DB&background=10b981&color=fff',
          badge: 'success'
        },
        {
          id: '2',
          title: 'Grade received',
          description: 'Web Programming Quiz - Score: 88/100',
          time: '2 hours ago',
          type: 'grade',
          avatar: 'https://ui-avatars.com/api/?name=Grade&background=3b82f6&color=fff',
          badge: 'info'
        },
        {
          id: '3',
          title: 'New assignment',
          description: 'Mobile App Development - Due in 5 days',
          time: '4 hours ago',
          type: 'new',
          avatar: 'https://ui-avatars.com/api/?name=Mobile&background=f59e0b&color=fff',
          badge: 'warning'
        }
      ]
    };

    return activitiesMap[role] || [];
  };

  const stats = getStatsForRole(user.role);
  const recentActivities = getRecentActivities(user.role);

  const getWelcomeMessage = (role) => {
    const messages = {
      [USER_ROLES.ADMIN]: "Selamat datang, Administrator!",
      [USER_ROLES.ASSISTANT]: "Halo, Asisten Lab!",
      [USER_ROLES.STUDENT]: "Halo, " + user.name + "!"
    };
    return messages[role] || "Selamat datang!";
  };

  const getSubtitle = (role) => {
    const subtitles = {
      [USER_ROLES.ADMIN]: "Monitor dan kelola seluruh sistem laboratorium",
      [USER_ROLES.ASSISTANT]: "Kelola sesi praktikum dan nilai mahasiswa",
      [USER_ROLES.STUDENT]: "Lihat progress belajar dan jadwal praktikum"
    };
    return subtitles[role] || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Welcome Header dengan Gradient */}
        <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
          <div className="card-body">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold">
                  {getWelcomeMessage(user.role)}
                </h1>
                <p className="text-primary-content/80 text-lg">
                  {getSubtitle(user.role)}
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-accent badge-lg capitalize font-semibold">
                    {user.role}
                  </div>
                  {user.NIM && (
                    <div className="badge badge-ghost badge-lg">
                      NIM: {user.NIM}
                    </div>
                  )}
                  {user.class && (
                    <div className="badge badge-ghost badge-lg">
                      Kelas: {user.class}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-right mt-4 lg:mt-0">
                <div className="text-primary-content/80 text-sm">
                  {formatDate(new Date())}
                </div>
                <div className="text-2xl font-bold mt-1">
                  {new Date().toLocaleTimeString('id-ID', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid dengan Gradient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className={`card bg-gradient-to-br ${stat.bgGradient} border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="card-body p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className={`p-3 bg-gradient-to-r ${stat.gradient} rounded-xl shadow-lg mb-4 w-fit`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-600 mb-1">
                        {stat.title}
                      </h3>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="badge badge-success badge-sm">
                          {stat.trend}
                        </div>
                        <span className="text-xs text-gray-500">{stat.desc}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities dengan Enhanced Design */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">Recent Activities</h2>
                  </div>
                  <div className="badge badge-primary badge-sm">
                    {recentActivities.length} new
                  </div>
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 p-4 hover:bg-base-200 rounded-xl transition-all duration-200 border border-transparent hover:border-base-300">
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                          <img src={activity.avatar} alt={activity.title} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-base-content truncate">
                            {activity.title}
                          </h3>
                          <div className={`badge badge-sm ${
                            activity.badge === 'success' ? 'badge-success' :
                            activity.badge === 'warning' ? 'badge-warning' :
                            activity.badge === 'error' ? 'badge-error' : 'badge-info'
                          }`}>
                            {activity.badge}
                          </div>
                        </div>
                        <p className="text-sm text-base-content/70 mb-2">
                          {activity.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-base-content/50" />
                          <span className="text-xs text-base-content/50">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-6">
                  <button className="btn btn-outline btn-sm">
                    View All Activities
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Target className="w-5 h-5 text-success" />
                  </div>
                  <h2 className="text-xl font-bold">Quick Actions</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {isAdmin() && (
                    <>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-primary group">
                        <Users className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Manage Users</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-secondary group">
                        <BookOpen className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Subjects</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-accent group">
                        <Home className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Lab Rooms</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-info group">
                        <FileText className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Reports</span>
                      </button>
                    </>
                  )}
                  {isAssistant() && (
                    <>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-primary group">
                        <Calendar className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">New Session</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-secondary group">
                        <BookOpen className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Upload Module</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-accent group">
                        <FileText className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Create Task</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-warning group">
                        <Award className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Grade Students</span>
                      </button>
                    </>
                  )}
                  {isStudent() && (
                    <>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-primary group">
                        <Calendar className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">View Schedule</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-secondary group">
                        <BookOpen className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Study Materials</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-accent group">
                        <FileText className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Submit Task</span>
                      </button>
                      <button className="btn btn-outline btn-sm flex-col h-auto py-4 hover:btn-info group">
                        <Award className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs">View Grades</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Bell className="w-5 h-5 text-warning" />
                  </div>
                  <h2 className="text-xl font-bold">Upcoming</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="alert alert-info shadow-sm">
                    <Calendar className="w-4 h-4" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">Web Programming Lab</div>
                      <div className="text-xs opacity-70">Tomorrow, 10:00 AM - Room RPL-01</div>
                    </div>
                  </div>
                  
                  <div className="alert alert-warning shadow-sm">
                    <Clock className="w-4 h-4" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">Assignment Deadline</div>
                      <div className="text-xs opacity-70">Database Project - 2 days left</div>
                    </div>
                  </div>
                  
                  <div className="alert alert-success shadow-sm">
                    <CheckCircle className="w-4 h-4" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">Grade Release</div>
                      <div className="text-xs opacity-70">Mobile App Quiz - Available now</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-4">
                  <button className="btn btn-outline btn-sm">
                    View Full Calendar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-info/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-info" />
                  </div>
                  <h2 className="text-xl font-bold">
                    {isStudent() ? 'Your Progress' : isAssistant() ? 'Teaching Stats' : 'System Overview'}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Completion Rate</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value="92" max="100"></progress>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Engagement</span>
                    <span className="font-bold">87%</span>
                  </div>
                  <progress className="progress progress-secondary w-full" value="87" max="100"></progress>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Quality Score</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <progress className="progress progress-accent w-full" value="95" max="100"></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;