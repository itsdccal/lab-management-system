// =======================================================
// src/components/features/admin/ClassManagementPage.jsx
// =======================================================
import React, { useState } from 'react';
import { 
  Building, MapPin, Users, Calendar, Clock, Plus, Edit, Trash2,
  CheckCircle, Settings, Monitor, Wifi, User, BookOpen
} from 'lucide-react';

const ClassManagementPage = () => {
  const [activeTab, setActiveTab] = useState('classes');

  // Mock data untuk classes
  const classesData = [
    {
      id: 1,
      name: 'Kelas A - Algoritma Pemrograman',
      subject: 'Praktikum Algoritma',
      room: 'Lab Komputer 1',
      capacity: 30,
      enrolled: 28,
      schedule: 'Senin 08:00-10:30',
      assistant: 'John Doe',
      status: 'active'
    },
    {
      id: 2,
      name: 'Kelas B - Basis Data',
      subject: 'Praktikum Basis Data',
      room: 'Lab Komputer 2', 
      capacity: 25,
      enrolled: 23,
      schedule: 'Selasa 13:00-15:30',
      assistant: 'Jane Smith',
      status: 'active'
    },
    {
      id: 3,
      name: 'Kelas C - Web Programming',
      subject: 'Praktikum Web',
      room: 'Lab Komputer 3',
      capacity: 28,
      enrolled: 25,
      schedule: 'Rabu 08:00-10:30',
      assistant: 'Bob Wilson',
      status: 'pending'
    }
  ];

  // Mock data untuk rooms
  const roomsData = [
    {
      id: 1,
      name: 'Lab Komputer 1',
      building: 'Gedung Informatika',
      floor: 2,
      capacity: 30,
      equipment: ['Komputer', 'Proyektor', 'AC', 'WiFi'],
      status: 'available',
      currentClass: null
    },
    {
      id: 2,
      name: 'Lab Komputer 2', 
      building: 'Gedung Informatika',
      floor: 2,
      capacity: 25,
      equipment: ['Komputer', 'Proyektor', 'AC', 'WiFi'],
      status: 'occupied',
      currentClass: 'Praktikum Basis Data'
    },
    {
      id: 3,
      name: 'Lab Komputer 3',
      building: 'Gedung Informatika', 
      floor: 3,
      capacity: 28,
      equipment: ['Komputer', 'Proyektor', 'AC', 'WiFi', 'Smart Board'],
      status: 'maintenance',
      currentClass: null
    }
  ];

  // Mock data untuk groups
  const groupsData = [
    {
      id: 1,
      name: 'Group A1',
      class: 'Kelas A - Algoritma',
      members: ['Student 1', 'Student 2', 'Student 3', 'Student 4'],
      project: 'Sorting Algorithm Implementation',
      status: 'active'
    },
    {
      id: 2,
      name: 'Group A2', 
      class: 'Kelas A - Algoritma',
      members: ['Student 5', 'Student 6', 'Student 7', 'Student 8'],
      project: 'Graph Traversal Algorithm',
      status: 'active'
    }
  ];

  const tabs = [
    { id: 'classes', label: 'Classes', icon: Building },
    { id: 'rooms', label: 'Rooms', icon: MapPin },
    { id: 'groups', label: 'Groups', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
      case 'available':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'occupied':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'maintenance':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Kelas & Lab</h1>
        <p className="text-gray-300">Class, room & group management</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
              <Building className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{classesData.length}</h3>
          <p className="text-gray-300 text-sm">Active Classes</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{roomsData.length}</h3>
          <p className="text-gray-300 text-sm">Lab Rooms</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{groupsData.length * 4}</h3>
          <p className="text-gray-300 text-sm">Total Students</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">15</h3>
          <p className="text-gray-300 text-sm">Weekly Sessions</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl">
        <div className="flex border-b border-slate-700/30">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all ${
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
          {/* Classes Tab */}
          {activeTab === 'classes' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Classes Management</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-all">
                  <Plus className="w-4 h-4" />
                  Add New Class
                </button>
              </div>
              
              <div className="grid gap-4">
                {classesData.map((cls) => (
                  <div key={cls.id} className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">{cls.name}</h4>
                        <p className="text-gray-400">{cls.subject}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(cls.status)}`}>
                          {cls.status}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-blue-300">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{cls.room}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{cls.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{cls.assistant}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-600/50">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Enrollment</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-slate-600 rounded-full">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                              style={{ width: `${(cls.enrolled / cls.capacity) * 100}%` }}
                            />
                          </div>
                          <span className="text-white text-sm font-medium">
                            {cls.enrolled}/{cls.capacity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rooms Tab */}
          {activeTab === 'rooms' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Rooms Management</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all">
                  <Plus className="w-4 h-4" />
                  Add New Room
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roomsData.map((room) => (
                  <div key={room.id} className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">{room.name}</h4>
                        <p className="text-gray-400">{room.building} - Floor {room.floor}</p>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(room.status)}`}>
                        {room.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Capacity:</span>
                        <span className="text-white font-medium">{room.capacity} seats</span>
                      </div>
                      
                      {room.currentClass && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Current Class:</span>
                          <span className="text-blue-300 text-sm">{room.currentClass}</span>
                        </div>
                      )}
                      
                      <div className="pt-3 border-t border-slate-600/50">
                        <p className="text-gray-400 text-sm mb-2">Equipment:</p>
                        <div className="flex flex-wrap gap-2">
                          {room.equipment.map((eq, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-slate-600/50 text-gray-300 rounded"
                            >
                              {eq}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4 pt-4 border-t border-slate-600/50">
                      <button className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded text-xs hover:bg-blue-500/30">
                        <Settings className="w-3 h-3 inline mr-1" />
                        Configure
                      </button>
                      <button className="flex-1 px-3 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded text-xs hover:bg-green-500/30">
                        <Monitor className="w-3 h-3 inline mr-1" />
                        Monitor
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Groups Tab */}
          {activeTab === 'groups' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Groups Management</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg hover:bg-purple-500/30 transition-all">
                  <Plus className="w-4 h-4" />
                  Create New Group
                </button>
              </div>
              
              <div className="grid gap-4">
                {groupsData.map((group) => (
                  <div key={group.id} className="p-6 bg-slate-700/30 rounded-xl border border-slate-600/50">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">{group.name}</h4>
                        <p className="text-gray-400">{group.class}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(group.status)}`}>
                          {group.status}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-blue-300">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Members ({group.members.length}):</p>
                        <div className="flex flex-wrap gap-2">
                          {group.members.map((member, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-slate-600/50 text-gray-300 rounded"
                            >
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{group.project}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Schedule Overview</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-lg hover:bg-orange-500/30 transition-all">
                  <Calendar className="w-4 h-4" />
                  Manage Schedule
                </button>
              </div>
              
              <div className="bg-slate-700/20 rounded-xl p-8 text-center">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h4 className="text-xl font-bold text-white mb-2">Schedule Management</h4>
                <p className="text-gray-400 mb-6">Advanced scheduling features coming soon!</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-300">15</div>
                    <div className="text-sm text-gray-400">Weekly Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-300">5</div>
                    <div className="text-sm text-gray-400">Active Rooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-300">3</div>
                    <div className="text-sm text-gray-400">Time Slots</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Advanced Class Management Coming Soon</h3>
        <p className="text-gray-400 mb-6">Comprehensive class, room & group management features under development!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto text-left">
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Automated Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Room Booking System</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Capacity Management</span>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Resource Allocation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Conflict Detection</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Usage Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassManagementPage;