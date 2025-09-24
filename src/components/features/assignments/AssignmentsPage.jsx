import React, { useState } from 'react';
import { 
  PlayCircle, Upload, Award, Clock, CheckCircle, AlertCircle,
  FileText, Link, Calendar, Eye, Download
} from 'lucide-react';
import { STUDENT_ASSIGNMENTS_STRUCTURE } from '../../../config/materialsStructure';

const AssignmentsPage = () => {
  const [activeTab, setActiveTab] = useState('active-tasks');
  const [selectedTask, setSelectedTask] = useState(null);

  // Mock data
  const assignmentData = {
    activeTasks: [
      {
        id: 1,
        title: "Pre-test: Data Structures Basics",
        type: "pre-test",
        dueDate: "2024-09-25",
        timeLimit: "30 minutes",
        questions: 15,
        status: "available"
      },
      {
        id: 2,
        title: "Post-test: Sorting Algorithms",
        type: "post-test", 
        dueDate: "2024-09-27",
        timeLimit: "45 minutes",
        questions: 20,
        status: "in-progress"
      }
    ],
    assessmentSubmissions: [
      {
        id: 3,
        title: "Practical Assignment: Binary Tree Implementation",
        type: "assessment",
        dueDate: "2024-10-01",
        submissionType: "link",
        status: "pending"
      }
    ],
    finalProjects: [
      {
        id: 4,
        title: "Final Project: Database Management System",
        type: "final-project",
        dueDate: "2024-11-15",
        milestones: ["Proposal", "Design", "Implementation", "Testing"],
        currentMilestone: "Design",
        status: "in-progress"
      }
    ]
  };

  // Icon mapping
  const iconMap = {
    PlayCircle,
    Upload,
    Award
  };

  const getGradientClass = (color) => {
    const colorMap = {
      'text-blue-500': 'from-blue-500 to-blue-600',
      'text-green-500': 'from-green-500 to-green-600',
      'text-purple-500': 'from-purple-500 to-purple-600'
    };
    return colorMap[color] || 'from-blue-500 to-blue-600';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'in-progress':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'pending':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'completed':
        return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available':
        return <PlayCircle className="w-4 h-4 text-green-400" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-400" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-purple-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{STUDENT_ASSIGNMENTS_STRUCTURE.title}</h1>
        <p className="text-gray-300">{STUDENT_ASSIGNMENTS_STRUCTURE.description}</p>
      </div>

      {/* Assignment Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {STUDENT_ASSIGNMENTS_STRUCTURE.sections.map((section) => {
          const IconComponent = iconMap[section.icon];
          const isActive = activeTab === section.id;
          
          return (
            <div
              key={section.id}
              className={`group cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 shadow-lg' 
                  : 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50'
              } backdrop-blur-xl border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1`}
              onClick={() => setActiveTab(section.id)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getGradientClass(section.color)} shadow-lg group-hover:scale-105 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{section.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{section.description}</p>
              
              <div className="space-y-1">
                {section.features.slice(0, 2).map((item, index) => (
                  <div key={index} className="text-xs text-gray-400 flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Content Based on Tab */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
        {activeTab === 'active-tasks' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Active Pre-tests & Post-tests</h3>
            <div className="space-y-4">
              {assignmentData.activeTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(task.status)}
                    <div>
                      <h4 className="text-white font-medium">{task.title}</h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-400">Due: {task.dueDate}</span>
                        <span className="text-xs text-gray-400">Time: {task.timeLimit}</span>
                        <span className="text-xs text-gray-400">Questions: {task.questions}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                    <button className="px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all text-sm">
                      {task.status === 'available' ? 'Start Test' : 'Continue'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'assessment-submissions' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Assessment Submissions</h3>
            <div className="space-y-4">
              {assignmentData.assessmentSubmissions.map((assignment) => (
                <div key={assignment.id} className="p-4 bg-slate-700/30 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-medium">{assignment.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">Due: {assignment.dueDate}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(assignment.status)}`}>
                      {assignment.status}
                    </span>
                  </div>
                  
                  <div className="border-t border-slate-600 pt-4">
                    <label className="block text-sm text-gray-300 mb-2">Submission Link</label>
                    <div className="flex gap-3">
                      <input 
                        type="url" 
                        placeholder="https://github.com/username/repository"
                        className="flex-1 p-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400"
                      />
                      <button className="px-6 py-3 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'final-projects' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Final Projects</h3>
            <div className="space-y-4">
              {assignmentData.finalProjects.map((project) => (
                <div key={project.id} className="p-4 bg-slate-700/30 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-medium">{project.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">Due: {project.dueDate}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Milestone Progress */}
                  <div className="border-t border-slate-600 pt-4">
                    <h5 className="text-sm font-medium text-gray-300 mb-3">Project Milestones</h5>
                    <div className="grid grid-cols-4 gap-2">
                      {project.milestones.map((milestone, index) => {
                        const isCurrent = milestone === project.currentMilestone;
                        const isCompleted = project.milestones.indexOf(project.currentMilestone) > index;
                        
                        return (
                          <div key={index} className={`p-2 rounded-lg text-center text-xs font-medium ${
                            isCurrent 
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                              : isCompleted
                              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                              : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                          }`}>
                            {milestone}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentsPage;