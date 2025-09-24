// src/components/features/student/MyClassPage.jsx
import React, { useState } from 'react';
import { 
  GraduationCap, Users, Calendar, Clock, 
  MapPin, User, Phone, QrCode, CheckCircle,
  AlertCircle, XCircle, Eye
} from 'lucide-react';
import { STUDENT_CLASS_STRUCTURE } from '../../../config/materialsStructure';

const MyClassPage = () => {
  const [showQRScanner, setShowQRScanner] = useState(false);

  // Mock data - replace with real data from API
  const classData = {
    className: "Praktikum Algoritma - Kelas A",
    subject: "Algoritma dan Struktur Data",
    semester: "Ganjil 2024/2025",
    studentCount: 30,
    groupName: "Kelompok 1",
    groupMembers: [
      { name: "Alex Johnson", nim: "H071211001", role: "Leader" },
      { name: "Jane Doe", nim: "H071211002", role: "Member" },
      { name: "John Smith", nim: "H071211003", role: "Member" }
    ],
    assistant: "Dr. Lab Assistant",
    assistantPhone: "+62812-3456-7890",
    labTable: "Meja 5 - Lab RPL",
    schedule: {
      day: "Rabu",
      time: "08:00 - 10:00",
      room: "Lab RPL 1",
      topic: "Sorting Algorithms",
      attendanceStatus: "Present"
    },
    attendanceHistory: [
      { date: "2024-09-18", status: "Present", time: "08:05", topic: "Introduction to Algorithms" },
      { date: "2024-09-11", status: "Present", time: "08:02", topic: "Data Structures" },
      { date: "2024-09-04", status: "Late", time: "08:15", topic: "Array Operations" },
      { date: "2024-08-28", status: "Absent", time: "-", topic: "Basic Programming" }
    ]
  };

  // Icon mapping
  const iconMap = {
    GraduationCap,
    Users,
    Calendar,
    Clock
  };

  const getGradientClass = (color) => {
    const colorMap = {
      'text-blue-500': 'from-blue-500 to-blue-600',
      'text-green-500': 'from-green-500 to-green-600',
      'text-purple-500': 'from-purple-500 to-purple-600',
      'text-orange-500': 'from-orange-500 to-orange-600'
    };
    return colorMap[color] || 'from-blue-500 to-blue-600';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Present':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'Late':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'Absent':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Late':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Absent':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{STUDENT_CLASS_STRUCTURE.title}</h1>
        <p className="text-gray-300">{STUDENT_CLASS_STRUCTURE.description}</p>
      </div>

      {/* Class Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {STUDENT_CLASS_STRUCTURE.sections.map((section) => {
          const IconComponent = iconMap[section.icon];
          
          return (
            <div
              key={section.id}
              className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${getGradientClass(section.color)} shadow-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <p className="text-sm text-gray-400">{section.description}</p>
                </div>
              </div>
              
              {/* Dynamic Content */}
              <div className="space-y-4">
                {section.id === 'class-info' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Kelas:</span>
                      <span className="text-white font-medium">{classData.className}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Mata Kuliah:</span>
                      <span className="text-white font-medium">{classData.subject}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Semester:</span>
                      <span className="text-white font-medium">{classData.semester}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Total Mahasiswa:</span>
                      <span className="text-blue-400 font-bold">{classData.studentCount} orang</span>
                    </div>
                  </div>
                )}
                
                {section.id === 'group-info' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Kelompok:</span>
                      <span className="text-white font-medium">{classData.groupName}</span>
                    </div>
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm block mb-2">Anggota Kelompok:</span>
                      <div className="space-y-2">
                        {classData.groupMembers.map((member, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-white text-sm">{member.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{member.nim}</span>
                              {member.role === 'Leader' && (
                                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full">
                                  Leader
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Asisten:</span>
                      <span className="text-white font-medium">{classData.assistant}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Posisi Lab:</span>
                      <span className="text-orange-400 font-medium">{classData.labTable}</span>
                    </div>
                  </div>
                )}
                
                {section.id === 'schedule' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Hari:</span>
                      <span className="text-white font-medium">{classData.schedule.day}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Waktu:</span>
                      <span className="text-white font-medium">{classData.schedule.time}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Ruangan:</span>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-medium">{classData.schedule.room}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-400 text-sm">Materi Minggu Ini:</span>
                      <span className="text-green-400 font-medium">{classData.schedule.topic}</span>
                    </div>
                  </div>
                )}
                
                {section.id === 'attendance' && (
                  <div className="space-y-4">
                    {/* QR Check-in Button */}
                    <button
                      onClick={() => setShowQRScanner(true)}
                      className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white border border-green-500/30 rounded-xl hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300"
                    >
                      <QrCode className="w-5 h-5" />
                      <span className="font-medium">Scan QR untuk Absensi</span>
                    </button>
                    
                    {/* Attendance History */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Riwayat Kehadiran</h4>
                      {classData.attendanceHistory.slice(0, 3).map((record, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(record.status)}
                            <div>
                              <span className="text-white text-sm font-medium block">{record.date}</span>
                              <span className="text-gray-400 text-xs">{record.topic}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(record.status)}`}>
                              {record.status}
                            </span>
                            {record.time !== '-' && (
                              <div className="text-xs text-gray-500 mt-1">{record.time}</div>
                            )}
                          </div>
                        </div>
                      ))}
                      <button className="w-full mt-3 py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        Lihat Semua Riwayat
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Contact Assistant */}
      <div className="p-6 bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-4">Kontak Asisten</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium">{classData.assistant}</h4>
              <p className="text-sm text-gray-400">Asisten Praktikum</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all">
            <Phone className="w-4 h-4" />
            <span className="text-sm">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* QR Scanner Modal */}
      {showQRScanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Scan QR Code</h3>
            <div className="aspect-square bg-slate-700 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Arahkan kamera ke QR code</p>
                <p className="text-gray-500 text-xs mt-1">yang ditampilkan asisten</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowQRScanner(false)}
                className="flex-1 px-4 py-2 bg-gray-500/20 text-gray-300 border border-gray-500/30 rounded-lg hover:bg-gray-500/30 transition-all"
              >
                Batal
              </button>
              <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all">
                Mulai Scan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClassPage;