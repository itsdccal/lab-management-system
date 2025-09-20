// UNHAS LAB SI LOGIN DESIGN - src/components/features/auth/Login.jsx
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, Shield, Zap, Users, Award, BookOpen } from "lucide-react";
import useAuthStore from "../../../stores/authStore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error, isAuthenticated, clearError } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit = async (data) => {
    try {
      clearError();
      await login(data.username, data.password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const isFormDisabled = isLoading || isSubmitting;

  // SVG Logo Component berdasarkan gambar yang diberikan
  const UnhasLabLogo = () => (
    <div className="relative">
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Background Circle */}
        <circle cx="60" cy="60" r="58" fill="url(#gradient1)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
        
        {/* Main Logo Shape */}
        <path 
          d="M25 30 Q25 25 30 25 L50 25 Q55 25 55 30 L55 50 Q55 55 50 55 L30 55 Q25 55 25 50 Z" 
          fill="url(#gradient2)"
        />
        <path 
          d="M65 30 Q65 25 70 25 L90 25 Q95 25 95 30 L95 50 Q95 55 90 55 L70 55 Q65 55 65 50 Z" 
          fill="url(#gradient3)"
        />
        <path 
          d="M25 65 Q25 60 30 60 L50 60 Q55 60 55 65 L55 85 Q55 90 50 90 L30 90 Q25 90 25 85 Z" 
          fill="url(#gradient4)"
        />
        <path 
          d="M65 65 Q65 60 70 60 L90 60 Q95 60 95 65 L95 85 Q95 90 90 90 L70 90 Q65 90 65 85 Z" 
          fill="url(#gradient5)"
        />
        
        {/* Central Elements */}
        <circle cx="45" cy="45" r="8" fill="url(#gradient6)"/>
        <circle cx="75" cy="45" r="6" fill="url(#gradient7)"/>
        <circle cx="45" cy="75" r="6" fill="url(#gradient8)"/>
        <circle cx="75" cy="75" r="8" fill="url(#gradient9)"/>
        
        {/* Connecting Lines */}
        <path d="M53 45 L67 45" stroke="url(#gradient10)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M45 53 L45 67" stroke="url(#gradient11)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M75 53 L75 67" stroke="url(#gradient12)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M53 75 L67 75" stroke="url(#gradient13)" strokeWidth="3" strokeLinecap="round"/>
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a"/>
            <stop offset="100%" stopColor="#3730a3"/>
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#1d4ed8"/>
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444"/>
            <stop offset="100%" stopColor="#dc2626"/>
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6"/>
            <stop offset="100%" stopColor="#7c3aed"/>
          </linearGradient>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b"/>
            <stop offset="100%" stopColor="#d97706"/>
          </linearGradient>
          <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4"/>
            <stop offset="100%" stopColor="#0891b2"/>
          </linearGradient>
          <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316"/>
            <stop offset="100%" stopColor="#ea580c"/>
          </linearGradient>
          <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981"/>
            <stop offset="100%" stopColor="#059669"/>
          </linearGradient>
          <linearGradient id="gradient9" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899"/>
            <stop offset="100%" stopColor="#db2777"/>
          </linearGradient>
          <linearGradient id="gradient10" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#ef4444"/>
          </linearGradient>
          <linearGradient id="gradient11" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#8b5cf6"/>
          </linearGradient>
          <linearGradient id="gradient12" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444"/>
            <stop offset="100%" stopColor="#f59e0b"/>
          </linearGradient>
          <linearGradient id="gradient13" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6"/>
            <stop offset="100%" stopColor="#f59e0b"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      <div className="relative min-h-screen flex">
        {/* Left Side - Enhanced Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          {/* Glass Effect Background */}
          <div className="absolute inset-0 glass-effect bg-white/5"></div>
          
          <div className="relative flex flex-col justify-center max-w-lg mx-auto p-12 text-white z-10">
            {/* Logo and Title */}
            <div className="text-center mb-12 fade-in">
              <div className="inline-flex p-6 bg-white/10 rounded-3xl shadow-2xl mb-8 relative backdrop-blur-sm border border-white/20">
                <UnhasLabLogo />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Lab Management System
              </h1>
              <p className="text-xl text-gray-300 font-medium mb-2">
                Laboratorium Sistem Informasi
              </p>
              <p className="text-lg text-gray-400">
                Universitas Hasanuddin
              </p>
            </div>

            {/* Enhanced Features */}
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Manajemen Praktikum Terintegrasi
                  </h3>
                  <p className="text-gray-300">
                    Sistem monitoring real-time dan penilaian berbasis AI
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Kolaborasi Pembelajaran
                  </h3>
                  <p className="text-gray-300">
                    Manajemen kelompok dan tools penilaian peer-to-peer
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Evaluasi Cerdas
                  </h3>
                  <p className="text-gray-300">
                    Penilaian otomatis dengan feedback detail dan analytics
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center p-6 glass-effect rounded-2xl border border-white/20 hover:scale-105 transition-transform bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-300 font-medium">Mahasiswa</div>
              </div>
              <div className="text-center p-6 glass-effect rounded-2xl border border-white/20 hover:scale-105 transition-transform bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">25+</div>
                <div className="text-sm text-gray-300 font-medium">Dosen</div>
              </div>
              <div className="text-center p-6 glass-effect rounded-2xl border border-white/20 hover:scale-105 transition-transform bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-300 font-medium">Lab</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Enhanced Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="text-center mb-8 lg:hidden fade-in">
              <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-6 shadow-xl backdrop-blur-sm border border-white/20">
                <UnhasLabLogo />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Lab SI UNHAS
              </h1>
              <p className="text-gray-300 mt-2">Universitas Hasanuddin</p>
            </div>

            {/* Enhanced Login Card */}
            <div className="card-modern p-8 glass-effect border border-white/20 shadow-2xl slide-up bg-white/95 backdrop-blur-md">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-800">Selamat Datang!</h2>
                </div>
                <p className="text-gray-600">
                  Masuk untuk mengakses sistem manajemen laboratorium
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Error Alert */}
                {error && (
                  <div className="alert alert-error shadow-lg rounded-xl fade-in bg-red-50 border border-red-200">
                    <div className="flex">
                      <svg className="stroke-current flex-shrink-0 h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-red-800">{error}</span>
                    </div>
                  </div>
                )}

                {/* Username Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Username</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Masukkan username Anda"
                      className={`input input-bordered input-lg w-full pl-12 ${
                        errors.username ? "input-error border-red-300" : "border-gray-300 focus:border-blue-500"
                      } bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-200 focus:ring-4 focus:ring-blue-100`}
                      disabled={isFormDisabled}
                      {...register("username", {
                        required: "Username wajib diisi",
                        minLength: {
                          value: 3,
                          message: "Username minimal 3 karakter",
                        },
                      })}
                    />
                  </div>
                  {errors.username && (
                    <label className="label">
                      <span className="label-text-alt text-red-600 fade-in">
                        {errors.username.message}
                      </span>
                    </label>
                  )}
                </div>

                {/* Password Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Password</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan password Anda"
                      className={`input input-bordered input-lg w-full pl-12 pr-12 ${
                        errors.password ? "input-error border-red-300" : "border-gray-300 focus:border-blue-500"
                      } bg-white/80 backdrop-blur-sm rounded-xl transition-all duration-200 focus:ring-4 focus:ring-blue-100`}
                      disabled={isFormDisabled}
                      {...register("password", {
                        required: "Password wajib diisi",
                        minLength: {
                          value: 6,
                          message: "Password minimal 6 karakter",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100 rounded-r-xl transition-colors"
                      onClick={togglePasswordVisibility}
                      disabled={isFormDisabled}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <label className="label">
                      <span className="label-text-alt text-red-600 fade-in">
                        {errors.password.message}
                      </span>
                    </label>
                  )}
                </div>

                {/* Remember Me */}
                <div className="form-control">
                  <label className="cursor-pointer label justify-start gap-3">
                    <input type="checkbox" className="checkbox checkbox-primary" />
                    <span className="label-text text-gray-700">Ingat saya selama 30 hari</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`btn w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform ${
                    isFormDisabled 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
                  } relative overflow-hidden group`}
                  disabled={isFormDisabled}
                >
                  {isFormDisabled ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      <span className="ml-2">Sedang masuk...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Masuk ke Dashboard</span>
                      <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:animate-pulse"></div>
                    </>
                  )}
                </button>
              </form>

              {/* Demo Accounts */}
              <div className="divider mt-8 mb-6">
                <span className="text-sm text-gray-500 bg-white px-4 rounded-full">Akun Demo</span>
              </div>
              
              <div className="space-y-4">
                {/* Student Demo */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg flex items-center justify-center font-bold">
                        M
                      </div>
                      <div>
                        <div className="font-bold text-blue-800 text-lg">Mahasiswa</div>
                        <div className="text-sm text-blue-600">Akses tugas dan nilai</div>
                      </div>
                    </div>
                    <div className="badge bg-blue-600 text-white border-none shadow-md">Student</div>
                  </div>
                  <div className="mt-3 p-3 bg-white/70 rounded-lg border border-blue-200">
                    <div className="text-xs font-mono text-blue-800">
                      <strong>mahasiswa</strong> / <strong>password123</strong>
                    </div>
                  </div>
                </div>

                {/* Assistant Demo */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg flex items-center justify-center font-bold">
                        A
                      </div>
                      <div>
                        <div className="font-bold text-purple-800 text-lg">Asisten Lab</div>
                        <div className="text-sm text-purple-600">Kelola sesi dan penilaian</div>
                      </div>
                    </div>
                    <div className="badge bg-purple-600 text-white border-none shadow-md">Assistant</div>
                  </div>
                  <div className="mt-3 p-3 bg-white/70 rounded-lg border border-purple-200">
                    <div className="text-xs font-mono text-purple-800">
                      <strong>asisten</strong> / <strong>password123</strong>
                    </div>
                  </div>
                </div>

                {/* Admin Demo */}
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-lg flex items-center justify-center font-bold">
                        S
                      </div>
                      <div>
                        <div className="font-bold text-orange-800 text-lg">Administrator</div>
                        <div className="text-sm text-orange-600">Akses penuh sistem</div>
                      </div>
                    </div>
                    <div className="badge bg-orange-600 text-white border-none shadow-md">Admin</div>
                  </div>
                  <div className="mt-3 p-3 bg-white/70 rounded-lg border border-orange-200">
                    <div className="text-xs font-mono text-orange-800">
                      <strong>admin</strong> / <strong>admin123</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Butuh bantuan? 
                  <a href="mailto:labsi@unhas.ac.id" className="text-blue-600 hover:text-blue-800 ml-1 font-medium transition-colors">
                    Hubungi Tim Lab SI
                  </a>
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-sm text-gray-400">
              © 2025 Laboratorium Sistem Informasi - Universitas Hasanuddin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;