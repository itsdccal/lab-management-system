// src/components/features/admin/UsersPage.jsx - FULL VERSION
import React, { useState, useMemo } from 'react';
import { 
  Users, UserPlus, Shield, Search, Filter, Edit, 
  Trash2, Eye, EyeOff, MoreVertical, Settings, X, Plus
} from 'lucide-react';
import PropTypes from 'prop-types';

// Mock data berdasarkan ERD terbaru
const mockRoles = [
  { id: 1, role: 'admin', desc: 'Administrator with full system access' },
  { id: 2, role: 'assistant', desc: 'Lab assistant with teaching permissions' },
  { id: 3, role: 'student', desc: 'Student with learning access' }
];

const mockUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    id_role: 1,
    role: 'admin',
    role_desc: 'Administrator with full system access'
  },
  {
    id: 2,
    username: 'asisten1',
    password: 'password123',
    id_role: 2,
    role: 'assistant',
    role_desc: 'Lab assistant with teaching permissions'
  },
  {
    id: 3,
    username: 'asisten2',
    password: 'password123',
    id_role: 2,
    role: 'assistant',
    role_desc: 'Lab assistant with teaching permissions'
  },
  {
    id: 4,
    username: 'mahasiswa1',
    password: 'password123',
    id_role: 3,
    role: 'student',
    role_desc: 'Student with learning access'
  },
  {
    id: 5,
    username: 'mahasiswa2',
    password: 'password123',
    id_role: 3,
    role: 'student',
    role_desc: 'Student with learning access'
  },
  {
    id: 6,
    username: 'mahasiswa3',
    password: 'password123',
    id_role: 3,
    role: 'student',
    role_desc: 'Student with learning access'
  }
];

const mockAssistants = [
  {
    id: 1,
    id_user: 2,
    name: 'Dr. Budi Santoso',
    phone_number: '081234567890'
  },
  {
    id: 2,
    id_user: 3,
    name: 'Dr. Sari Dewi',
    phone_number: '081234567891'
  }
];

const mockStudents = [
  {
    id: 1,
    id_user: 4,
    nim: 'H071211001',
    name: 'Ahmad Rizki'
  },
  {
    id: 2,
    id_user: 5,
    nim: 'H071211002',
    name: 'Siti Aminah'
  },
  {
    id: 3,
    id_user: 6,
    nim: 'H071211003',
    name: 'Budi Pratama'
  }
];

// Combined user data dengan relasi
const mockUsersWithDetails = mockUsers.map(user => {
  const assistant = mockAssistants.find(a => a.id_user === user.id);
  const student = mockStudents.find(s => s.id_user === user.id);
  
  return {
    ...user,
    name: assistant?.name || student?.name || 'Administrator',
    phone_number: assistant?.phone_number,
    nim: student?.nim,
    status: ['inactive', 'active'][Math.floor(Math.random() * 2)],
    created_at: '2024-09-01',
    last_login: '2024-09-27'
  };
});

// User Form Modal Component
const UserFormModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    username: user?.username || '',
    password: '',
    confirmPassword: '',
    id_role: user?.id_role || 3,
    name: user?.name || '',
    phone_number: user?.phone_number || '',
    nim: user?.nim || '',
    status: user?.status || 'active'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation berdasarkan ERD structure
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username wajib diisi';
    if (!formData.name) newErrors.name = 'Nama wajib diisi';
    if (!user && !formData.password) newErrors.password = 'Password wajib diisi';
    if (formData.password && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok';
    }
    
    // Role-specific validation based on ERD
    const selectedRole = mockRoles.find(r => r.id === parseInt(formData.id_role));
    if (selectedRole?.role === 'student' && !formData.nim) {
      newErrors.nim = 'NIM wajib diisi untuk mahasiswa';
    }
    if (selectedRole?.role === 'assistant' && !formData.phone_number) {
      newErrors.phone_number = 'Nomor telepon wajib diisi untuk asisten';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save user
    onSave(formData);
    onClose();
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      id_role: 3,
      name: '',
      phone_number: '',
      nim: '',
      status: 'active'
    });
    setErrors({});
  };

  const handleClose = () => {
    onClose();
    setFormData({
      username: user?.username || '',
      password: '',
      confirmPassword: '',
      id_role: user?.id_role || 3,
      name: user?.name || '',
      phone_number: user?.phone_number || '',
      nim: user?.nim || '',
      status: user?.status || 'active'
    });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {user ? 'Edit User' : 'Tambah User Baru'}
          </h2>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                placeholder="Masukkan username"
              />
              {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
              <select
                value={formData.id_role}
                onChange={(e) => setFormData(prev => ({ ...prev, id_role: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              >
                {mockRoles.map(role => (
                  <option key={role.id} value={role.id}>
                    {role.role.toUpperCase()} - {role.desc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              placeholder="Masukkan nama lengkap"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Role-specific fields berdasarkan ERD */}
          {mockRoles.find(r => r.id === parseInt(formData.id_role))?.role === 'student' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">NIM</label>
              <input
                type="text"
                value={formData.nim}
                onChange={(e) => setFormData(prev => ({ ...prev, nim: e.target.value }))}
                className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                placeholder="Masukkan NIM"
              />
              {errors.nim && <p className="text-red-400 text-xs mt-1">{errors.nim}</p>}
            </div>
          )}

          {mockRoles.find(r => r.id === parseInt(formData.id_role))?.role === 'assistant' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nomor Telepon</label>
              <input
                type="text"
                value={formData.phone_number}
                onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))}
                className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                placeholder="Masukkan nomor telepon"
              />
              {errors.phone_number && <p className="text-red-400 text-xs mt-1">{errors.phone_number}</p>}
            </div>
          )}

          {/* Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password {user ? '(kosongkan jika tidak diubah)' : ''}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 pr-10"
                  placeholder="Masukkan password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Konfirmasi Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                placeholder="Konfirmasi password"
              />
              {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
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
              {user ? 'Update User' : 'Tambah User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

UserFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object,
  onSave: PropTypes.func.isRequired
};

// User Row Component
const UserRow = ({ user, onEdit, onDelete, onToggleStatus }) => {
  const [showMenu, setShowMenu] = useState(false);

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'admin': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'assistant': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'student': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getStatusBadgeColor = (status) => {
    return status === 'active' 
      ? 'bg-green-500/20 text-green-300 border-green-500/30'
      : 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <tr className="hover:bg-slate-700/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-white">{user.name}</div>
            <div className="text-sm text-gray-400">@{user.username}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-white">Username: {user.username}</div>
        {user.nim && <div className="text-xs text-gray-400">NIM: {user.nim}</div>}
        {user.phone_number && <div className="text-xs text-gray-400">Tel: {user.phone_number}</div>}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getRoleBadgeColor(user.role)}`}>
          {user.role.toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusBadgeColor(user.status)}`}>
          {user.status.toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
        {user.last_login}
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
                  onEdit(user);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-slate-700 flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit User
              </button>
              <button
                onClick={() => {
                  onToggleStatus(user);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-slate-700 flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                {user.status === 'active' ? 'Nonaktifkan' : 'Aktifkan'}
              </button>
              <button
                onClick={() => {
                  onDelete(user);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-slate-700 flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Hapus User
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired
};

// Main UsersPage Component
const UsersPage = () => {
  const [users, setUsers] = useState(mockUsersWithDetails);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Filtered users
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           user.nim?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRole = roleFilter === 'all' || user.role === roleFilter;
      const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
      
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchQuery, roleFilter, statusFilter]);

  // Stats
  const stats = useMemo(() => {
    const total = users.length;
    const active = users.filter(u => u.status === 'active').length;
    const byRole = users.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});

    return {
      total,
      active,
      admins: byRole.admin || 0,
      assistants: byRole.assistant || 0,
      students: byRole.student || 0
    };
  }, [users]);

  const handleAddUser = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = (userData) => {
    if (editingUser) {
      // Update existing user
      setUsers(prev => prev.map(user => 
        user.id === editingUser.id 
          ? { 
              ...user, 
              ...userData, 
              id: editingUser.id,
              role: mockRoles.find(r => r.id === userData.id_role)?.role
            }
          : user
      ));
    } else {
      // Add new user
      const newUser = {
        ...userData,
        id: Math.max(...users.map(u => u.id)) + 1,
        role: mockRoles.find(r => r.id === userData.id_role)?.role,
        created_at: new Date().toISOString().split('T')[0],
        last_login: 'Never'
      };
      setUsers(prev => [...prev, newUser]);
    }
  };

  const handleDeleteUser = (user) => {
    if (confirm(`Apakah Anda yakin ingin menghapus user ${user.name}?`)) {
      setUsers(prev => prev.filter(u => u.id !== user.id));
    }
  };

  const handleToggleStatus = (user) => {
    setUsers(prev => prev.map(u => 
      u.id === user.id 
        ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
        : u
    ));
  };

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Kelola Users</h1>
          <p className="text-gray-300">Manajemen pengguna dan assignment role</p>
        </div>
        <button
          onClick={handleAddUser}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <UserPlus className="w-4 h-4" />
          Tambah User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.total}</h3>
              <p className="text-xs text-gray-300">Total Users</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-600">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.active}</h3>
              <p className="text-xs text-gray-300">Active</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-600">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.admins}</h3>
              <p className="text-xs text-gray-300">Admins</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-600">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.assistants}</h3>
              <p className="text-xs text-gray-300">Assistants</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stats.students}</h3>
              <p className="text-xs text-gray-300">Students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari user..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            />
          </div>

          <div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            >
              <option value="all">Semua Role</option>
              <option value="admin">Admin</option>
              <option value="assistant">Assistant</option>
              <option value="student">Student</option>
            </select>
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

      {/* Users Table */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-700/50">
            <thead className="bg-slate-700/30">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  User Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <UserRow
                    key={user.id}
                    user={user}
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                    onToggleStatus={handleToggleStatus}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="text-gray-400">
                      <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">Tidak ada user ditemukan</p>
                      <p className="text-sm">Coba ubah filter pencarian atau tambah user baru</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Form Modal */}
      <UserFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={editingUser}
        onSave={handleSaveUser}
      />
    </div>
  );
};

export default UsersPage;