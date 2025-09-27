// src/components/features/admin/SubjectsPage.jsx - FULL VERSION
import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Plus, Search, Edit, Trash2, Users, MoreVertical, 
  X, Settings, Award, CheckCircle, UserCheck, Calendar
} from 'lucide-react';
import PropTypes from 'prop-types';

// Mock data berdasarkan ERD
const mockSubjects = [
  {
    id: 1,
    subject: 'Algoritma dan Pemrograman',
    created_at: '2024-01-15',
    status: 'active'
  },
  {
    id: 2,
    subject: 'Pemrograman Web',
    created_at: '2024-01-20',
    status: 'active'
  },
  {
    id: 3,
    subject: 'Basis Data',
    created_at: '2024-02-01',
    status: 'active'
  },
  {
    id: 4,
    subject: 'Struktur Data',
    created_at: '2024-02-10',
    status: 'active'
  },
  {
    id: 5,
    subject: 'Jaringan Komputer',
    created_at: '2024-03-01',
    status: 'inactive'
  },
  {
    id: 6,
    subject: 'Sistem Operasi',
    created_at: '2024-03-15',
    status: 'active'
  }
];

// Mock data untuk assistant assignments (dari ERD assistant_subject)
const mockAssistantSubjects = [
  { id: 1, id_assistant: 1, id_subject: 1 },
  { id: 2, id_assistant: 1, id_subject: 2 },
  { id: 3, id_assistant: 2, id_subject: 3 },
  { id: 4, id_assistant: 2, id_subject: 4 },
  { id: 5, id_assistant: 1, id_subject: 6 }
];

// Mock assistants data (simplified untuk dropdown)
const mockAssistants = [
  { id: 1, name: 'Dr. Budi Santoso', phone_number: '081234567890' },
  { id: 2, name: 'Dr. Sari Dewi', phone_number: '081234567891' }
];

// Subject Form Modal Component
const SubjectFormModal = ({ isOpen, onClose, subject, onSave }) => {
  const [formData, setFormData] = useState({
    subject: subject?.subject || '',
    status: subject?.status || 'active',
    assigned_assistants: subject?.assigned_assistants || []
  });

  const [errors, setErrors] = useState({});

  // Reset form when subject changes
  React.useEffect(() => {
    if (subject) {
      setFormData({
        subject: subject.subject || '',
        status: subject.status || 'active',
        assigned_assistants: subject.assigned_assistants || []
      });
    } else {
      setFormData({
        subject: '',
        status: 'active',
        assigned_assistants: []
      });
    }
    setErrors({});
  }, [subject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.subject) newErrors.subject = 'Nama mata kuliah wajib diisi';
    if (formData.subject.length < 3) newErrors.subject = 'Nama mata kuliah minimal 3 karakter';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save subject
    onSave(formData);
    onClose();
  };

  const handleClose = () => {
    onClose();
    setFormData({
      subject: '',
      status: 'active',
      assigned_assistants: []
    });
    setErrors({});
  };

  const handleAssistantToggle = (assistantId) => {
    setFormData(prev => ({
      ...prev,
      assigned_assistants: prev.assigned_assistants.includes(assistantId)
        ? prev.assigned_assistants.filter(id => id !== assistantId)
        : [...prev.assigned_assistants, assistantId]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {subject ? 'Edit Mata Kuliah' : 'Tambah Mata Kuliah Baru'}
          </h2>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nama Mata Kuliah</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              placeholder="Masukkan nama mata kuliah"
            />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Assign Assistants</label>
            <div className="space-y-2">
              {mockAssistants.map(assistant => (
                <label key={assistant.id} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.assigned_assistants.includes(assistant.id)}
                    onChange={() => handleAssistantToggle(assistant.id)}
                    className="rounded border-slate-600 text-blue-600 focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{assistant.name}</div>
                    <div className="text-xs text-gray-400">Assistant • {assistant.phone_number}</div>
                  </div>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Pilih asisten yang akan mengajar mata kuliah ini
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-slate-600/50 text-gray-300 rounded-lg hover:bg-slate-600/70 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {subject ? 'Update' : 'Tambah'} Mata Kuliah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

SubjectFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  subject: PropTypes.object,
  onSave: PropTypes.func.isRequired
};

// Assignment Modal Component
const AssignmentModal = ({ isOpen, onClose, assignments, onSave }) => {
  const [localAssignments, setLocalAssignments] = useState(assignments);

  React.useEffect(() => {
    setLocalAssignments(assignments);
  }, [assignments]);

  const handleToggleAssignment = (assistantId, subjectId) => {
    setLocalAssignments(prev => {
      const existing = prev.find(a => a.id_assistant === assistantId && a.id_subject === subjectId);
      
      if (existing) {
        // Remove assignment
        return prev.filter(a => a.id !== existing.id);
      } else {
        // Add assignment
        const newId = Math.max(...prev.map(a => a.id), 0) + 1;
        return [...prev, { id: newId, id_assistant: assistantId, id_subject: subjectId }];
      }
    });
  };

  const handleSave = () => {
    onSave(localAssignments);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Kelola Assignment Asisten</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left p-3 text-gray-300">Mata Kuliah</th>
                {mockAssistants.map(assistant => (
                  <th key={assistant.id} className="text-center p-3 text-gray-300 min-w-[150px]">
                    <div className="text-sm font-medium">{assistant.name}</div>
                    <div className="text-xs text-gray-400">{assistant.phone_number}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockSubjects.map(subject => (
                <tr key={subject.id} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                        {subject.subject.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{subject.subject}</div>
                        <div className="text-xs text-gray-400">ID: {subject.id}</div>
                      </div>
                    </div>
                  </td>
                  {mockAssistants.map(assistant => {
                    const isAssigned = localAssignments.some(a => 
                      a.id_assistant === assistant.id && a.id_subject === subject.id
                    );
                    return (
                      <td key={assistant.id} className="p-3 text-center">
                        <button
                          onClick={() => handleToggleAssignment(assistant.id, subject.id)}
                          className={`w-8 h-8 rounded-lg transition-all duration-200 ${
                            isAssigned 
                              ? 'bg-green-600 text-white hover:bg-green-700' 
                              : 'bg-slate-600/50 text-gray-400 hover:bg-slate-600'
                          }`}
                        >
                          {isAssigned ? <CheckCircle className="w-4 h-4 mx-auto" /> : <Plus className="w-4 h-4 mx-auto" />}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex gap-3 pt-6 mt-6 border-t border-slate-700/50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-slate-600/50 text-gray-300 rounded-lg hover:bg-slate-600/70 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Simpan Assignments
          </button>
        </div>
      </div>
    </div>
  );
};

AssignmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  assignments: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
};

// Subject Row Component
const SubjectRow = ({ subject, onEdit, onDelete, onToggleStatus }) => {
  const [showMenu, setShowMenu] = useState(false);

  const getStatusBadgeColor = (status) => {
    return status === 'active' 
      ? 'bg-green-500/20 text-green-300 border-green-500/30'
      : 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  // Get assigned assistants for this subject
  const assignedAssistants = mockAssistantSubjects
    .filter(as => as.id_subject === subject.id)
    .map(as => mockAssistants.find(assistant => assistant.id === as.id_assistant))
    .filter(Boolean);

  return (
    <tr className="hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {subject.subject.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-white">{subject.subject}</div>
            <div className="text-sm text-gray-400">ID: {subject.id}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-white">
          {assignedAssistants.length > 0 ? (
            <div className="space-y-1">
              {assignedAssistants.map(assistant => (
                <div key={assistant.id} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <UserCheck className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-xs">{assistant.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <span className="text-gray-400 text-xs italic">Belum ada asisten</span>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusBadgeColor(subject.status)}`}>
          {subject.status.toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
        {subject.created_at}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-10 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  onEdit(subject);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-slate-700 flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit Mata Kuliah
              </button>
              <button
                onClick={() => {
                  onToggleStatus(subject);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-slate-700 flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                {subject.status === 'active' ? 'Nonaktifkan' : 'Aktifkan'}
              </button>
              <button
                onClick={() => {
                  onDelete(subject);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-slate-700 flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Hapus Mata Kuliah
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

SubjectRow.propTypes = {
  subject: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired
};

// Main SubjectsPage Component
const SubjectsPage = () => {
  const [subjects, setSubjects] = useState(mockSubjects);
  const [assignments, setAssignments] = useState(mockAssistantSubjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState(null);

  // Enhanced subjects with assignment data
  const enhancedSubjects = useMemo(() => {
    return subjects.map(subject => ({
      ...subject,
      assigned_assistants: assignments
        .filter(as => as.id_subject === subject.id)
        .map(as => as.id_assistant)
    }));
  }, [subjects, assignments]);

  // Filtered subjects
  const filteredSubjects = useMemo(() => {
    return enhancedSubjects.filter(subject => {
      const matchesSearch = subject.subject.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || subject.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [enhancedSubjects, searchQuery, statusFilter]);

  // Stats
  const stats = useMemo(() => {
    const total = subjects.length;
    const active = subjects.filter(s => s.status === 'active').length;
    const totalAssignments = assignments.length;
    const averageAssignments = total > 0 ? (totalAssignments / total).toFixed(1) : 0;

    return {
      total,
      active,
      totalAssignments,
      averageAssignments
    };
  }, [subjects, assignments]);

  const handleAddSubject = () => {
    setEditingSubject(null);
    setIsModalOpen(true);
  };

  const handleEditSubject = (subject) => {
    setEditingSubject(subject);
    setIsModalOpen(true);
  };

  const handleSaveSubject = (subjectData) => {
    if (editingSubject) {
      // Update existing subject
      setSubjects(prev => prev.map(subject => 
        subject.id === editingSubject.id 
          ? { ...subject, ...subjectData, id: editingSubject.id }
          : subject
      ));

      // Update assignments
      const newAssignments = assignments.filter(a => a.id_subject !== editingSubject.id);
      const updatedAssignments = subjectData.assigned_assistants.map(assistantId => ({
        id: Math.max(...assignments.map(a => a.id), 0) + Math.random(),
        id_assistant: assistantId,
        id_subject: editingSubject.id
      }));
      setAssignments([...newAssignments, ...updatedAssignments]);
    } else {
      // Add new subject
      const newSubject = {
        ...subjectData,
        id: Math.max(...subjects.map(s => s.id)) + 1,
        created_at: new Date().toISOString().split('T')[0]
      };
      setSubjects(prev => [...prev, newSubject]);

      // Add assignments for new subject
      const newAssignments = subjectData.assigned_assistants.map(assistantId => ({
        id: Math.max(...assignments.map(a => a.id), 0) + Math.random(),
        id_assistant: assistantId,
        id_subject: newSubject.id
      }));
      setAssignments(prev => [...prev, ...newAssignments]);
    }
  };

  const handleDeleteSubject = (subject) => {
    if (confirm(`Apakah Anda yakin ingin menghapus mata kuliah "${subject.subject}"?`)) {
      setSubjects(prev => prev.filter(s => s.id !== subject.id));
      // Remove related assignments
      setAssignments(prev => prev.filter(a => a.id_subject !== subject.id));
    }
  };

  const handleToggleStatus = (subject) => {
    setSubjects(prev => prev.map(s => 
      s.id === subject.id 
        ? { ...s, status: s.status === 'active' ? 'inactive' : 'active' }
        : s
    ));
  };

  const handleOpenAssignmentModal = () => {
    setIsAssignmentModalOpen(true);
  };

  const handleSaveAssignments = (newAssignments) => {
    setAssignments(newAssignments);
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Mata Kuliah</h1>
          <p className="text-gray-300">Manajemen mata kuliah dan assignment asisten</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleOpenAssignmentModal}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Users className="w-4 h-4" />
            Kelola Assignment
          </button>
          <button
            onClick={handleAddSubject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Tambah Mata Kuliah
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.total}</h3>
              <p className="text-xs text-gray-300">Total Mata Kuliah</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-600">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.active}</h3>
              <p className="text-xs text-gray-300">Aktif</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-600">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.totalAssignments}</h3>
              <p className="text-xs text-gray-300">Total Assignments</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-600">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.averageAssignments}</h3>
              <p className="text-xs text-gray-300">Avg per Subject</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari mata kuliah..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            />
          </div>

          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            >
              <option value="all">Semua Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Subjects Table */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-700/50">
            <thead className="bg-slate-700/30">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map((subject) => (
                  <SubjectRow
                    key={subject.id}
                    subject={subject}
                    onEdit={handleEditSubject}
                    onDelete={handleDeleteSubject}
                    onToggleStatus={handleToggleStatus}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center">
                    <div className="text-gray-400">
                      <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">Tidak ada mata kuliah ditemukan</p>
                      <p className="text-sm">Coba ubah filter pencarian atau tambah mata kuliah baru</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assignment Summary */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Assignment Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subjects per Assistant */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">Subjects per Assistant</h4>
            <div className="space-y-2">
              {mockAssistants.map(assistant => {
                const assignedSubjects = assignments
                  .filter(a => a.id_assistant === assistant.id)
                  .map(a => subjects.find(s => s.id === a.id_subject))
                  .filter(Boolean);
                
                return (
                  <div key={assistant.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <UserCheck className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{assistant.name}</div>
                        <div className="text-xs text-gray-400">{assistant.phone_number}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">{assignedSubjects.length} subjects</div>
                      <div className="text-xs text-gray-400">
                        {assignedSubjects.length > 0 
                          ? assignedSubjects.map(s => s.subject).join(', ')
                          : 'No assignments'
                        }
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Unassigned Subjects */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">Unassigned Subjects</h4>
            <div className="space-y-2">
              {subjects
                .filter(subject => !assignments.some(a => a.id_subject === subject.id))
                .map(subject => (
                  <div key={subject.id} className="flex items-center justify-between p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{subject.subject}</div>
                        <div className="text-xs text-orange-400">Needs assignment</div>
                      </div>
                    </div>
                    <button
                      onClick={handleOpenAssignmentModal}
                      className="px-3 py-1 bg-orange-600 text-white text-xs rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Assign
                    </button>
                  </div>
                ))}
              {subjects.filter(subject => !assignments.some(a => a.id_subject === subject.id)).length === 0 && (
                <div className="text-center py-6">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <p className="text-sm text-gray-400">Semua mata kuliah sudah di-assign</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subject Form Modal */}
      <SubjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        subject={editingSubject}
        onSave={handleSaveSubject}
      />

      {/* Assignment Modal */}
      <AssignmentModal
        isOpen={isAssignmentModalOpen}
        onClose={() => setIsAssignmentModalOpen(false)}
        assignments={assignments}
        onSave={handleSaveAssignments}
      />
    </div>
  );
};

export default SubjectsPage;