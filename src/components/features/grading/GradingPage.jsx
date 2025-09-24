// src/components/features/grading/GradingPage.jsx - Assistant Grading Page
import React, { useState } from 'react';
import { 
  ClipboardList, FileText, Award, Edit, Calculator, Brain,
  Plus, Upload, Eye, Download, Zap, Target
} from 'lucide-react';
import useAuthStore from '../../../stores/authStore';
import { ASSISTANT_GRADING_STRUCTURE } from '../../../config/materialsStructure';

const GradingPage = () => {
  const { user } = useAuthStore();
  const [activeSection, setActiveSection] = useState(null);
  const [showAIGenerator, setShowAIGenerator] = useState(false);

  // Icon mapping
  const iconMap = {
    ClipboardList,
    FileText,
    Award,
    Edit,
    Calculator,
    Brain
  };

  const getGradientClass = (color) => {
    const colorMap = {
      'text-blue-500': 'from-blue-500 to-blue-600',
      'text-green-500': 'from-green-500 to-green-600',
      'text-purple-500': 'from-purple-500 to-purple-600',
      'text-orange-500': 'from-orange-500 to-orange-600',
      'text-pink-500': 'from-pink-500 to-pink-600',
      'text-cyan-500': 'from-cyan-500 to-cyan-600'
    };
    return colorMap[color] || 'from-blue-500 to-blue-600';
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{ASSISTANT_GRADING_STRUCTURE.title}</h1>
        <p className="text-gray-300">{ASSISTANT_GRADING_STRUCTURE.description}</p>
      </div>

      {/* AI Generator Quick Access */}
      <div className="p-6 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-2xl mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">AI Question Generator</h3>
              <p className="text-cyan-300 text-sm">Generate questions from uploaded modules with RAG technology</p>
            </div>
          </div>
          <button 
            onClick={() => setShowAIGenerator(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-xl hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            Launch AI Generator
          </button>
        </div>
      </div>

      {/* Grading Sections Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ASSISTANT_GRADING_STRUCTURE.sections.map((section) => {
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
                  {section.features.slice(0, 3).map((item, index) => (
                    <div key={index} className="text-xs text-gray-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Grading Activity */}
      <div className="mt-8 p-6 bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-4">Recent Grading Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
            <Award className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Graded: Final Project - Algorithm Implementation</span>
            <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Generated: 15 questions from Data Structures module</span>
            <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Created: Pre-test for Sorting Algorithms</span>
            <span className="text-xs text-gray-500 ml-auto">2 days ago</span>
          </div>
        </div>
      </div>

      {/* AI Generator Modal */}
      {showAIGenerator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-2xl w-full mx-4">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Brain className="w-8 h-8 text-cyan-400" />
              AI Question Generator
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Module</label>
                <select className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white">
                  <option>Data Structures - Module 1</option>
                  <option>Algorithms - Sorting Module</option>
                  <option>Database Design - Normalization</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Question Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg cursor-pointer">
                    <input type="checkbox" className="text-blue-500" defaultChecked />
                    <span className="text-white text-sm">Multiple Choice</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg cursor-pointer">
                    <input type="checkbox" className="text-blue-500" />
                    <span className="text-white text-sm">Essay</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Number of Questions</label>
                <input 
                  type="range" 
                  min="5" 
                  max="20" 
                  defaultValue="10"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>5</span>
                  <span>20</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowAIGenerator(false)}
                className="flex-1 px-4 py-3 bg-gray-500/20 text-gray-300 border border-gray-500/30 rounded-lg hover:bg-gray-500/30 transition-all"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Generate Questions
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradingPage;