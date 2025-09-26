// =======================================================
// SIMPLE MATERIALS PAGE - NO EXTERNAL DEPENDENCIES
// =======================================================

// src/components/features/materials/MaterialsPage.jsx
import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Download, Upload, FileText, Video, Folder,
  Plus, Edit, Trash2, Eye, Users, CheckCircle, Clock,
  Play, File, Image, Archive, Search, Filter
} from 'lucide-react';
import useAuthStore from '../../../stores/authStore';
import { USER_ROLES } from '../../../utils/constants';

const MaterialsPage = () => {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Role-based capabilities
  const capabilities = useMemo(() => ({
    canDownload: true,
    canView: true,
    canUpload: [USER_ROLES.ADMIN, USER_ROLES.ASSISTANT].includes(user?.role),
    canEdit: [USER_ROLES.ADMIN, USER_ROLES.ASSISTANT].includes(user?.role),
    canDelete: user?.role === USER_ROLES.ADMIN,
    canManageAccess: [USER_ROLES.ADMIN, USER_ROLES.ASSISTANT].includes(user?.role),
    canViewAnalytics: [USER_ROLES.ADMIN, USER_ROLES.ASSISTANT].includes(user?.role),
    canApprove: user?.role === USER_ROLES.ADMIN,
  }), [user?.role]);

  // Role-based page configuration
  const pageConfig = useMemo(() => {
    switch (user?.role) {
      case USER_ROLES.ADMIN:
        return {
          title: 'Materials Management',
          description: 'Manage all learning materials & content across system'
        };
      case USER_ROLES.ASSISTANT:
        return {
          title: 'Teaching Materials',
          description: 'Upload & organize materials for your students'
        };
      case USER_ROLES.STUDENT:
      default:
        return {
          title: 'Learning Materials',
          description: 'Access course materials & resources for your classes'
        };
    }
  }, [user?.role]);

  // Role-based tabs
  const tabs = useMemo(() => {
    const baseTabs = [
      { id: 'browse', label: 'Browse Materials', icon: BookOpen }
    ];

    if (capabilities.canUpload) {
      baseTabs.push(
        { id: 'upload', label: 'Upload', icon: Upload },
        { id: 'manage', label: 'My Materials', icon: Edit }
      );
    }

    if (capabilities.canViewAnalytics) {
      baseTabs.push(
        { id: 'analytics', label: 'Analytics', icon: Eye }
      );
    }

    if (capabilities.canApprove) {
      baseTabs.push(
        { id: 'approval', label: 'Approval Queue', icon: CheckCircle }
      );
    }

    return baseTabs;
  }, [capabilities]);

  // Mock materials data
  const mockMaterials = [
    {
      id: 1,
      title: 'Introduction to React Hooks',
      type: 'pdf',
      size: '2.4 MB',
      downloads: 125,
      uploadedBy: 'John Doe',
      uploadDate: '2024-01-15',
      subject: 'Web Programming',
      category: 'tutorial',
      status: 'approved',
      isPublic: true
    },
    {
      id: 2,
      title: 'JavaScript ES6+ Features',
      type: 'video',
      size: '156 MB', 
      downloads: 89,
      uploadedBy: 'Jane Smith',
      uploadDate: '2024-01-20',
      subject: 'Web Programming',
      category: 'lecture',
      status: 'approved',
      isPublic: true
    },
    {
      id: 3,
      title: 'Database Design Principles',
      type: 'pdf',
      size: '3.2 MB',
      downloads: 67,
      uploadedBy: 'Bob Wilson',
      uploadDate: '2024-01-25',
      subject: 'Database Systems',
      category: 'reference',
      status: capabilities.canApprove ? 'pending' : 'approved',
      isPublic: false
    },
    {
      id: 4,
      title: 'CSS Grid Layout Tutorial',
      type: 'video',
      size: '89 MB',
      downloads: 45,
      uploadedBy: 'Alice Johnson',
      uploadDate: '2024-01-30',
      subject: 'Web Programming',
      category: 'tutorial',
      status: 'approved',
      isPublic: true
    }
  ];

  // Filter materials based on role and search
  const filteredMaterials = useMemo(() => {
    let materials = mockMaterials;

    // Role-based filtering
    if (user?.role === USER_ROLES.STUDENT) {
      materials = materials.filter(m => m.status === 'approved' && m.isPublic);
    } else if (user?.role === USER_ROLES.ASSISTANT) {
      materials = materials.filter(m => 
        m.status === 'approved' || m.uploadedBy === user.name
      );
    }

    // Category filtering
    if (selectedCategory !== 'all') {
      materials = materials.filter(m => m.category === selectedCategory);
    }

    // Search filtering
    if (searchQuery) {
      materials = materials.filter(m => 
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return materials;
  }, [mockMaterials, user?.role, user?.name, selectedCategory, searchQuery]);

  // Role-based stats
  const stats = useMemo(() => {
    const totalMaterials = filteredMaterials.length;
    const totalDownloads = filteredMaterials.reduce((sum, m) => sum + m.downloads, 0);
    const pendingApproval = mockMaterials.filter(m => m.status === 'pending').length;

    switch (user?.role) {
      case USER_ROLES.ADMIN:
        return [
          { label: 'Total Materials', value: totalMaterials, icon: FileText, color: 'blue' },
          { label: 'Pending Approval', value: pendingApproval, icon: Clock, color: 'orange' },
          { label: 'Total Downloads', value: totalDownloads, icon: Download, color: 'green' },
          { label: 'Storage Used', value: '2.4GB', icon: Folder, color: 'purple' }
        ];
        
      case USER_ROLES.ASSISTANT:
        const myMaterials = filteredMaterials.filter(m => m.uploadedBy === user.name);
        const myDownloads = myMaterials.reduce((sum, m) => sum + m.downloads, 0);
        
        return [
          { label: 'My Materials', value: myMaterials.length, icon: FileText, color: 'blue' },
          { label: 'Total Downloads', value: myDownloads, icon: Download, color: 'green' },
          { label: 'Students Reached', value: '45', icon: Users, color: 'purple' },
          { label: 'This Week', value: '8', icon: Upload, color: 'orange' }
        ];
        
      case USER_ROLES.STUDENT:
      default:
        return [
          { label: 'Available Materials', value: totalMaterials, icon: FileText, color: 'blue' },
          { label: 'Downloaded', value: '32', icon: Download, color: 'green' },
          { label: 'Video Tutorials', value: filteredMaterials.filter(m => m.type === 'video').length, icon: Video, color: 'purple' },
          { label: 'New This Week', value: '3', icon: Plus, color: 'orange' }
        ];
    }
  }, [user?.role, user?.name, filteredMaterials, mockMaterials]);

  // Helper functions
  const getTypeIcon = (type) => {
    switch (type) {
      case 'pdf': return <File className="w-5 h-5 text-red-400" />;
      case 'video': return <Play className="w-5 h-5 text-blue-400" />;
      case 'image': return <Image className="w-5 h-5 text-green-400" />;
      case 'archive': return <Archive className="w-5 h-5 text-purple-400" />;
      default: return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'rejected': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600', 
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{pageConfig.title}</h1>
        <p className="text-gray-300">{pageConfig.description}</p>
        {user?.role !== USER_ROLES.STUDENT && (
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
            <Users className="w-4 h-4" />
            <span>Managing materials for {user?.role === USER_ROLES.ADMIN ? 'all courses' : 'your courses'}</span>
          </div>
        )}
      </div>

      {/* Role-based Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(stat.color)}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Dynamic Tabs */}
      <div className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl">
        <div className="flex border-b border-slate-700/30 overflow-x-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-300 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {/* Browse Materials Tab */}
          {activeTab === 'browse' && (
            <div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search materials..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm"
                    >
                      <option value="all">All Categories</option>
                      <option value="tutorial">Tutorial</option>
                      <option value="lecture">Lecture</option>
                      <option value="reference">Reference</option>
                      <option value="assignment">Assignment</option>
                    </select>
                  </div>
                  
                  {capabilities.canUpload && (
                    <button 
                      onClick={() => setActiveTab('upload')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      Upload New
                    </button>
                  )}
                </div>
              </div>

              <div className="grid gap-4">
                {filteredMaterials.map((material) => (
                  <div key={material.id} className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getTypeIcon(material.type)}
                        <div>
                          <h4 className="text-lg font-bold text-white">{material.title}</h4>
                          <p className="text-gray-400 text-sm">
                            {material.subject} • Uploaded by {material.uploadedBy}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(material.status)}`}>
                          {material.status}
                        </span>
                        
                        {capabilities.canEdit && (
                          <button className="p-2 text-gray-400 hover:text-blue-300">
                            <Edit className="w-4 h-4" />
                          </button>
                        )}
                        
                        {capabilities.canDelete && (
                          <button className="p-2 text-gray-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <span>{material.size}</span>
                        <span>{material.downloads} downloads</span>
                        <span>Updated {material.uploadDate}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded hover:bg-blue-500/30">
                          <Eye className="w-3 h-3 inline mr-1" />
                          View
                        </button>
                        
                        <button className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded hover:bg-green-500/30">
                          <Download className="w-3 h-3 inline mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredMaterials.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-300 mb-2">No materials found</h4>
                  <p className="text-gray-400">
                    {searchQuery || selectedCategory !== 'all' 
                      ? 'Try adjusting your search or filter criteria.'
                      : 'No materials have been uploaded yet.'
                    }
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Upload Tab (Assistant & Admin only) */}
          {activeTab === 'upload' && capabilities.canUpload && (
            <div className="text-center py-12">
              <Upload className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Upload Materials</h3>
              <p className="text-gray-400 mb-6">Upload new learning materials for students</p>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-8">
                  <input type="file" className="hidden" id="file-upload" multiple />
                  <label 
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="w-8 h-8 text-gray-400" />
                    <span className="text-gray-300">Click to select files</span>
                    <span className="text-sm text-gray-500">PDF, DOC, PPT, Video files</span>
                  </label>
                </div>
                <button className="w-full px-6 py-3 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all">
                  Upload Selected Files
                </button>
              </div>
            </div>
          )}

          {/* Other tabs - simple placeholders */}
          {activeTab === 'manage' && capabilities.canEdit && (
            <div className="text-center py-12">
              <Edit className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">My Materials</h3>
              <p className="text-gray-400">Manage your uploaded materials</p>
            </div>
          )}

          {activeTab === 'analytics' && capabilities.canViewAnalytics && (
            <div className="text-center py-12">
              <Eye className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
              <p className="text-gray-400">View material usage and engagement metrics</p>
            </div>
          )}

          {activeTab === 'approval' && capabilities.canApprove && (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Approval Queue</h3>
              <p className="text-gray-400">Review and approve pending materials</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialsPage;