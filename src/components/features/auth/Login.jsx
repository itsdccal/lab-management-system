// FIXED LEFT & RESPONSIVE RIGHT LOGIN
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, Shield, Users, Award, BookOpen } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-bounce opacity-40"></div>
        
        {/* Secondary smaller orbs */}
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-2xl animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-green-500/15 to-teal-500/15 rounded-full blur-2xl animate-pulse opacity-25" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-40"></div>
          </div>
        ))}
      </div>

      <div className="min-h-screen flex">
        {/* Left Side - FIXED POSITION */}
        <div className="hidden lg:block lg:w-1/2 relative">
          {/* Fixed container */}
          <div className="fixed top-0 left-0 w-1/2 h-screen">
            {/* Subtle glass background */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/5 border-r border-white/10"></div>
            
            {/* Content container - always centered */}
            <div className="relative h-full flex flex-col justify-center items-center px-8 text-white z-10">
              <div className="w-full max-w-md">
                {/* Logo section */}
                <div className="text-center mb-8 animate-fade-in">
                  <div className="inline-flex p-4 backdrop-blur-md bg-white/15 rounded-2xl shadow-xl mb-6 relative border border-white/20">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img 
                        src="/lab-logo.png"
                        alt="Lab SI UNHAS Logo" 
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Lab Management System
                  </h1>
                  <p className="text-lg text-gray-300 font-medium mb-1">
                    Laboratorium Sistem Informasi
                  </p>
                  <p className="text-base text-gray-400">
                    Universitas Hasanuddin
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Manajemen Praktikum
                      </h3>
                      <p className="text-sm text-gray-300">
                        Monitoring real-time dan AI assessment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-to-r from-purple-500/80 to-pink-500/80 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Kolaborasi Tim
                      </h3>
                      <p className="text-sm text-gray-300">
                        Group management & peer assessment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-to-r from-orange-500/80 to-red-500/80 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Smart Evaluation
                      </h3>
                      <p className="text-sm text-gray-300">
                        Auto grading dengan analytics
                      </p>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">300+</div>
                    <div className="text-xs text-gray-300 font-medium">Mahasiswa</div>
                  </div>
                  <div className="text-center p-4 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">10</div>
                    <div className="text-xs text-gray-300 font-medium">Asisten</div>
                  </div>
                  <div className="text-center p-4 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">4</div>
                    <div className="text-xs text-gray-300 font-medium">Lab</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - FULLY RESPONSIVE */}
        <div className="w-full lg:w-1/2 lg:ml-auto min-h-screen flex flex-col relative">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          
          {/* Main content - flexible */}
          <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10">
            <div className="w-full max-w-md">
              {/* Mobile Header */}
              <div className="text-center mb-6 lg:hidden animate-fade-in">
                <div className="inline-flex p-3 backdrop-blur-lg bg-white/20 rounded-xl mb-4 shadow-xl border border-white/30">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img 
                      src="/lab-logo.png"
                      alt="Lab SI UNHAS Logo" 
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                    <div className="hidden w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SI</span>
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Lab SI UNHAS
                </h1>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">Universitas Hasanuddin</p>
              </div>

              {/* Enhanced Glass Login Card */}
              <div className="backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20 rounded-2xl sm:rounded-3xl animate-slide-up overflow-hidden">
                {/* Card header */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 p-4 sm:p-6 lg:p-8 border-b border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Selamat Datang</h2>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Masuk untuk mengakses sistem manajemen laboratorium
                    </p>
                  </div>
                </div>

                {/* Form container */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    {/* Error Alert */}
                    {error && (
                      <div className="backdrop-blur-md bg-red-500/20 border border-red-400/30 text-red-100 p-3 sm:p-4 rounded-xl animate-fade-in">
                        <div className="flex">
                          <svg className="stroke-current shrink-0 w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="ml-2 text-xs sm:text-sm">{error}</span>
                        </div>
                      </div>
                    )}

                    {/* Username Field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-gray-200 text-sm sm:text-base">Username</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="Masukkan username Anda"
                          className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg sm:rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200 text-sm sm:text-base ${
                            errors.username ? "border-red-400/50 focus:ring-red-400/50" : ""
                          }`}
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
                          <span className="label-text-alt text-red-300 text-xs sm:text-sm animate-fade-in">
                            {errors.username.message}
                          </span>
                        </label>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-gray-200 text-sm sm:text-base">Password</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                          <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Masukkan password Anda"
                          className={`w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg sm:rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200 text-sm sm:text-base ${
                            errors.password ? "border-red-400/50 focus:ring-red-400/50" : ""
                          }`}
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
                          className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-200 transition-colors"
                          onClick={togglePasswordVisibility}
                          disabled={isFormDisabled}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
                        </button>
                      </div>
                      {errors.password && (
                        <label className="label">
                          <span className="label-text-alt text-red-300 text-xs sm:text-sm animate-fade-in">
                            {errors.password.message}
                          </span>
                        </label>
                      )}
                    </div>

                    {/* Remember Me */}
                    <div className="form-control">
                      <label className="cursor-pointer label justify-start gap-2 sm:gap-3">
                        <input type="checkbox" className="checkbox border-white checkbox-sm checked:checkbox-primary" />
                        <span className="label-text text-gray-300 text-xs sm:text-sm">Ingat saya selama 30 hari</span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-300 text-sm sm:text-base ${
                        isFormDisabled 
                          ? "bg-gray-500/50 cursor-not-allowed" 
                          : "bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-blue-600/80 hover:from-blue-600/90 hover:via-purple-600/90 hover:to-blue-700/90 hover:scale-105 shadow-lg backdrop-blur-md border border-white/20"
                      }`}
                      disabled={isFormDisabled}
                    >
                      {isFormDisabled ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sedang masuk...
                        </span>
                      ) : (
                        "Masuk ke Dashboard"
                      )}
                    </button>
                  </form>

                  {/* Demo Accounts */}
                  <div className="mt-6 sm:mt-8">
                    <div className="text-center mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm text-gray-300 bg-white/10 px-3 sm:px-4 py-1 rounded-full backdrop-blur-sm">Akun Demo</span>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      {/* Student Demo */}
                      <div className="backdrop-blur-md bg-blue-500/20 border border-blue-400/30 rounded-lg sm:rounded-xl p-2.5 sm:p-3 hover:bg-blue-500/30 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/80 text-white rounded-lg flex items-center justify-center font-bold backdrop-blur-sm text-sm sm:text-base">
                              M
                            </div>
                            <div>
                              <div className="font-semibold text-blue-100 text-xs sm:text-sm">Mahasiswa</div>
                              <div className="text-xs text-blue-200">Akses tugas dan nilai</div>
                            </div>
                          </div>
                          <div className="text-xs bg-blue-500/30 text-blue-100 px-2 py-1 rounded-full backdrop-blur-sm">Student</div>
                        </div>
                        <div className="mt-2 p-2 bg-white/10 rounded-lg border border-white/20">
                          <div className="text-xs font-mono text-blue-100">
                            <strong>mahasiswa</strong> / <strong>password123</strong>
                          </div>
                        </div>
                      </div>

                      {/* Assistant Demo */}
                      <div className="backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-lg sm:rounded-xl p-2.5 sm:p-3 hover:bg-purple-500/30 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/80 text-white rounded-lg flex items-center justify-center font-bold backdrop-blur-sm text-sm sm:text-base">
                              A
                            </div>
                            <div>
                              <div className="font-semibold text-purple-100 text-xs sm:text-sm">Asisten Lab</div>
                              <div className="text-xs text-purple-200">Kelola sesi dan penilaian</div>
                            </div>
                          </div>
                          <div className="text-xs bg-purple-500/30 text-purple-100 px-2 py-1 rounded-full backdrop-blur-sm">Assistant</div>
                        </div>
                        <div className="mt-2 p-2 bg-white/10 rounded-lg border border-white/20">
                          <div className="text-xs font-mono text-purple-100">
                            <strong>asisten</strong> / <strong>password123</strong>
                          </div>
                        </div>
                      </div>

                      {/* Admin Demo */}
                      <div className="backdrop-blur-md bg-orange-500/20 border border-orange-400/30 rounded-lg sm:rounded-xl p-2.5 sm:p-3 hover:bg-orange-500/30 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/80 text-white rounded-lg flex items-center justify-center font-bold backdrop-blur-sm text-sm sm:text-base">
                              S
                            </div>
                            <div>
                              <div className="font-semibold text-orange-100 text-xs sm:text-sm">Administrator</div>
                              <div className="text-xs text-orange-200">Akses penuh sistem</div>
                            </div>
                          </div>
                          <div className="text-xs bg-orange-500/30 text-orange-100 px-2 py-1 rounded-full backdrop-blur-sm">Admin</div>
                        </div>
                        <div className="mt-2 p-2 bg-white/10 rounded-lg border border-white/20">
                          <div className="text-xs font-mono text-orange-100">
                            <strong>admin</strong> / <strong>admin123</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Help */}
                  <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                    <p className="text-xs sm:text-sm text-gray-300">
                      Butuh bantuan? 
                      <a href="#" className="text-blue-300 hover:text-blue-200 ml-1 font-medium transition-colors">
                        Hubungi Tim Lab SI
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - ALWAYS AT BOTTOM */}
          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            <div className="text-center text-xs sm:text-sm text-gray-400">
              © 2025 Laboratorium Sistem Informasi - Universitas Hasanuddin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;