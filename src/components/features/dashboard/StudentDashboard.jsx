import React from 'react';
import { 
  BookOpen, Brain, Award, FileText, TrendingUp, CheckCircle,
  AlertCircle, Clock, Calendar
} from 'lucide-react';
import StatCard from '../../common/StatCard';
import CourseCard from '../../common/CourseCard';
import AssignmentItem from '../../common/AssignmentItem';

const StudentDashboard = () => {
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
        dueDate: '2024-09-30',
        status: 'urgent'
      },
      {
        title: 'Research Paper Review - Information Retrieval',
        course: 'CS416',
        dueDate: '2024-09-28',
        status: 'normal'
      },
      {
        title: 'Quantum Algorithm Analysis',
        course: 'CS623',
        dueDate: '2024-09-30',
        status: 'urgent'
      }
    ]
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
          subtitle="out of 10"
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

export default StudentDashboard;