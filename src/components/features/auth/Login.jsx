// src/components/features/auth/Login.jsx - Tampilan Login yang Menarik
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, FlaskConical, Beaker, Users, Award } from "lucide-react";
import useAuthStore from "../../../stores/authStore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error, isAuthenticated, clearError } =
    useAuthStore();

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
    setShowPassword((prev) => !prev);
  };

  const isFormDisabled = isLoading || isSubmitting;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGY0ZjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJtMzYgMzQgNi0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-60"></div>

      <div className="relative min-h-screen flex">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-secondary p-12 text-primary-content">
          <div className="flex flex-col justify-center max-w-lg mx-auto">
            {/* Logo dan Title */}
            <div className="text-center mb-12">
              <div className="inline-flex p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
                <FlaskConical className="h-16 w-16" />
              </div>
              <h1 className="text-5xl font-bold mb-4">Lab Management</h1>
              <p className="text-xl opacity-90">
                Sistem Informasi Praktikum Laboratorium
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Beaker className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Kelola Sesi Praktikum
                  </h3>
                  <p className="opacity-80">
                    Jadwal, presensi, dan monitoring real-time
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Manajemen Mahasiswa</h3>
                  <p className="opacity-80">
                    Kelompok, tugas, dan penilaian terintegrasi
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Penilaian Otomatis</h3>
                  <p className="opacity-80">
                    AI-powered assessment dan grading
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">Mahasiswa</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Asisten</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-80">Lab</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="text-center mb-8 lg:hidden">
              <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                <FlaskConical className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Lab Management
              </h1>
              <p className="text-gray-600 mt-2">Sistem Informasi Lab</p>
            </div>

            {/* Login Card */}
            <div className="card bg-base-100 shadow-2xl border border-base-300">
              <div className="card-body p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    Selamat Datang Kembali
                  </h2>
                  <p className="text-base-content/60">
                    Masuk untuk mengakses dashboard laboratorium
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Error Alert */}
                  {error && (
                    <div className="alert alert-error shadow-lg">
                      <svg
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Username Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Username</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan username Anda"
                      className={`input input-bordered input-lg w-full ${
                        errors.username ? "input-error" : "focus:input-primary"
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
                    {errors.username && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.username.message}
                        </span>
                      </label>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Password</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukkan password Anda"
                        className={`input input-bordered input-lg w-full pr-12 ${
                          errors.password
                            ? "input-error"
                            : "focus:input-primary"
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
                        className="btn btn-ghost btn-sm absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                        onClick={togglePasswordVisibility}
                        disabled={isFormDisabled}
                        tabIndex="-1"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.password.message}
                        </span>
                      </label>
                    )}
                  </div>

                  {/* Remember Me */}
                  <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-3">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                      />
                      <span className="label-text">Ingat saya</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`btn btn-primary btn-lg w-full ${
                      isFormDisabled ? "loading" : ""
                    }`}
                    disabled={isFormDisabled}
                  >
                    {isFormDisabled ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      "Masuk ke Dashboard"
                    )}
                  </button>
                </form>

                {/* Demo Accounts */}
                <div className="divider mt-8">Akun Demo</div>
                <div className="space-y-3">
                  {/* Admin Demo */}
                  <div className="card bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="avatar placeholder">
                            <div className="bg-blue-500 text-white rounded-full w-10 h-10">
                              <span className="text-sm font-bold">A</span>
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-blue-800">
                              Administrator
                            </div>
                            <div className="text-sm text-blue-600">
                              Full system access
                            </div>
                          </div>
                        </div>
                        <div className="badge badge-primary">Admin</div>
                      </div>
                      <div className="mt-2 text-xs font-mono bg-white/50 p-2 rounded">
                        <strong>admin</strong> / <strong>admin123</strong>
                      </div>
                    </div>
                  </div>

                  {/* Assistant Demo */}
                  <div className="card bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="avatar placeholder">
                            <div className="bg-green-500 text-white rounded-full w-10 h-10">
                              <span className="text-sm font-bold">AS</span>
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-green-800">
                              Lab Assistant
                            </div>
                            <div className="text-sm text-green-600">
                              Manage sessions & grades
                            </div>
                          </div>
                        </div>
                        <div className="badge badge-success">Asisten</div>
                      </div>
                      <div className="mt-2 text-xs font-mono bg-white/50 p-2 rounded">
                        <strong>asisten</strong> / <strong>password123</strong>
                      </div>
                    </div>
                  </div>

                  {/* Student Demo */}
                  <div className="card bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="avatar placeholder">
                            <div className="bg-purple-500 text-white rounded-full w-10 h-10">
                              <span className="text-sm font-bold">M</span>
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-purple-800">
                              Mahasiswa
                            </div>
                            <div className="text-sm text-purple-600">
                              View assignments & grades
                            </div>
                          </div>
                        </div>
                        <div className="badge badge-secondary">Student</div>
                      </div>
                      <div className="mt-2 text-xs font-mono bg-white/50 p-2 rounded">
                        <strong>mahasiswa</strong> /{" "}
                        <strong>password123</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="text-center mt-6 pt-6 border-t border-base-300">
                  <p className="text-sm text-base-content/60">
                    Butuh bantuan?
                    <a
                      href="mailto:support@lab.ac.id"
                      className="link link-primary ml-1"
                    >
                      Hubungi Support
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-sm text-base-content/50">
              © 2025 Lab Management System - Universitas XYZ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
