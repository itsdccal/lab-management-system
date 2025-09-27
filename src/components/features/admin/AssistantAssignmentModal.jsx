// src/components/features/admin/AssistantAssignmentModal.jsx
import React, { useState, useMemo } from 'react';
import { X, Users, BookOpen, Plus, Trash2, Check } from 'lucide-react';
import PropTypes from 'prop-types';

// Mock data sesuai ERD
const mockSubjects = [
  { id: 1, subject: 'Algoritma dan Pemrograman' },
  { id: 2, subject: 'Pemrograman Web' },
  { id: 3, subject: 'Basis Data' },
  { id: 4, subject: 'Struktur Data' },
  { id: 5, subject: 'Jaringan Komputer' }
];

const mockAssistants = [
  { id: 1, name: 'Dr. Budi Santoso', phone_number: '081234567890' },
  { id: 2, name: 'Dr. Sari Dewi', phone_number: '081234567891' }
];

const mockAssistantSubjects = [
  { id: 1, id_assistant: 1, id_subject: 1 },
  { id: 2, id_assistant: 1, id_subject: 2 },
  { id: 3, id_assistant: 2, id_subject: 3 },
  { id: 4, id_assistant: 2, id_subject: 4 }
];

const AssistantAssignmentModal = ({ isOpen, onClose, onSave }) => {
  const [assignments, setAssignments] = useState(mockAssistantSubjects);
  const [newAssignment, setNewAssignment] = useState({
    id_assistant: '',
    id_subject: ''
  });

  // Get assigned subjects for each assistant
  const assignmentsByAssistant = useMemo(() => {
    return mockAssistants.map(assistant => ({
      ...assistant,
      subjects: assignments
        .filter(a => a.id_assistant === assistant.id)
        .map(a => mockSubjects.find(s => s.id === a.id_subject))
        .filter(Boolean)
    }));
  }, [assignments]);

  // Get available subjects for assignment
  const availableSubjects = useMemo(() => {
    const assignedSubjectIds = assignments.map(a => a.id_subject);
    return mockSubjects.filter(subject => !assignedSubjectIds.includes(subject.id));
  }, [assignments]);

  const handleAddAssignment = () => {
    if (newAssignment.id_assistant && newAssignment.id_subject) {
      const newId = Math.max(...assignments.map(a => a.id), 0) + 1;
      setAssignments(prev => [...prev, {
        id: newId,
        id_assistant: parseInt(newAssignment.id_assistant),
        id_subject: parseInt(newAssignment.id_subject)
      }]);
      setNewAssignment({ id_assistant: '', id_subject: '' });
    }
  };

  const handleRemoveAssignment = (assignmentId) => {
    setAssignments(prev => prev.filter(a => a.id !== assignmentId));
  };

  const handleSave = () => {
    onSave(assignments);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Kelola Assignment Asisten ke Mata Kuliah</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Assignments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Current Assignments</h3>
            
            {assignmentsByAssistant.map(assistant => (
              <div key={assistant.id} className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {assistant.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{assistant.name}</h4>
                    <p className="text-xs text-gray-400">{assistant.phone_number}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {assistant.subjects.length > 0 ? (
                    assistant.subjects.map(subject => {
                      const assignment = assignments.find(a => 
                        a.id_assistant === assistant.id && a.id_subject === subject.id
                      );
                      return (
                        <div key={subject.id} className="flex items-center justify-between p-2 bg-slate-600/30 rounded">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-white">{subject.subject}</span>
                          </div>
                          <button
                            onClick={() => handleRemoveAssignment(assignment.id)}
                            className="p-1 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-xs text-gray-400 italic">Belum ada mata kuliah yang di-assign</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Add New Assignment */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Add New Assignment</h3>
            
            <div className="bg-slate-700/30 rounded-lg p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Pilih Asisten</label>
                <select
                  value={newAssignment.id_assistant}
                  onChange={(e) => setNewAssignment(prev => ({ ...prev, id_assistant: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                >
                  <option value="">Pilih Asisten...</option>
                  {mockAssistants.map(assistant => (
                    <option key={assistant.id} value={assistant.id}>
                      {assistant.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Pilih Mata Kuliah</label>
                <select
                  value={newAssignment.id_subject}
                  onChange={(e) => setNewAssignment(prev => ({ ...prev, id_subject: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                >
                  <option value="">Pilih Mata Kuliah...</option>
                  {availableSubjects.map(subject => (
                    <option key={subject.id} value={subject.id}>
                      {subject.subject}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleAddAssignment}
                disabled={!newAssignment.id_assistant || !newAssignment.id_subject}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Assignment
              </button>
            </div>

            {/* Available Subjects Info */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Available Subjects</h4>
              <div className="space-y-1">
                {availableSubjects.length > 0 ? (
                  availableSubjects.map(subject => (
                    <div key={subject.id} className="text-xs text-gray-400 flex items-center gap-2">
                      <BookOpen className="w-3 h-3" />
                      {subject.subject}
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-400 italic">Semua mata kuliah sudah di-assign</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 mt-6 border-t border-slate-700/50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-slate-600/50 text-gray-300 rounded-lg hover:bg-slate-600/70 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Simpan Assignments
          </button>
        </div>
      </div>
    </div>
  );
};

AssistantAssignmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default AssistantAssignmentModal;