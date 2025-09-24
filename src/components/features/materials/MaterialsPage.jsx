// src/components/features/materials/MaterialsPage.jsx
import React, { useState } from 'react';
import { 
  BookOpen, Target, FileText, CheckSquare, Brain, 
  ArrowRight, Upload, Eye, Download 
} from 'lucide-react';
import useAuthStore from '../../../stores/authStore';
import { USER_ROLES } from '../../../utils/constants';
import { 
  ASSISTANT_MATERIALS_STRUCTURE, 
  STUDENT_MATERIALS_STRUCTURE 
} from '../../../config/materialsStructure';

const MaterialsPage = () => {
  const { user } = useAuthStore();
  const [activeSection, setActiveSection] = useState(null);

  const isAssistant = user.role === USER_ROLES.ASSISTANT;
  const structure = isAssistant 
    ? ASSISTANT_MATERIALS_STRUCTURE 
    : STUDENT_MATERIALS_STRUCTURE;

  // Icon mapping
  const iconMap = {
    BookOpen,
    Target,
    FileText,
    CheckSquare,
    Brain
  };

  const getGradientClass = (color) => {
    const colorMap = {
      'text-blue-500': 'from-blue-500 to-blue-600',
      'text-green-500': 'from-green-500 to-green-600',
      'text-purple-500': 'from-purple-500 to-purple-600',
      'text-orange-500': 'from-orange-500 to-orange-600',
      'text-cyan-500': 'from-cyan-500 to-cyan-600'
    };
    return colorMap[color] || 'from-blue-500 to-blue-600';
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{structure.title}</h1>
        <p className="text-gray-300">{structure.description}</p>
      </div>

      {/* Sections Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {structure.sections.map((section) => {
          const IconComponent = iconMap[section.icon];
          
          return (
            <div
              key={section.id}
              className="group bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => setActiveSection(section.id)}
            >
              {/* Icon and Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getGradientClass(section.color)} shadow-lg group-hover:scale-105 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                {section.badge && (
                  <span className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-full font-medium animate-pulse">
                    {section.badge}
                  </span>
                )}
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2">{section.description}</p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {(section.features || section.data || []).slice(0, 3).map((item, index) => (
                    <div key={index} className="text-xs text-gray-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                  {(section.features || section.data || []).length > 3 && (
                    <div className="text-xs text-blue-400 flex items-center gap-1 mt-2">
                      <span>+{(section.features || section.data || []).length - 3} more</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Effect Arrow */}
              <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-gray-500">Click to open</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions for Assistant */}
      {isAssistant && (
        <div className="mt-8 p-6 bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all text-sm">
              <Upload className="w-4 h-4" />
              Upload New Module
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all text-sm">
              <FileText className="w-4 h-4" />
              Create Assignment
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-all text-sm">
              <CheckSquare className="w-4 h-4" />
              New Quiz
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all text-sm">
              <Brain className="w-4 h-4" />
              AI Generate
            </button>
          </div>
        </div>
      )}

      {/* Recent Activity for Students */}
      {!isAssistant && (
        <div className="mt-8 p-6 bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Viewed: Algoritma Sorting - Module 3</span>
              <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
              <Download className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">Downloaded: Assignment Template</span>
              <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
              <CheckSquare className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-gray-300">Completed: Quiz - Data Structures</span>
              <span className="text-xs text-gray-500 ml-auto">2 days ago</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaterialsPage;