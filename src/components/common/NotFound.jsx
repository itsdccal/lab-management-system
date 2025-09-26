import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import useAuthStore from '../../stores/authStore';

const NotFound = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleGoBack = () => {
    navigate(-1);
  };

  const getDashboardPath = () => {
    return '/dashboard'; // All roles use same dashboard path
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-500/20 mb-4">404</div>
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to={getDashboardPath()}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-xl hover:bg-blue-500/30 transition-all"
          >
            <Home className="w-5 h-5" />
            Go to Dashboard
          </Link>
          
          <button
            onClick={handleGoBack}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-slate-700/50 text-gray-300 border border-slate-600/50 rounded-xl hover:bg-slate-700/70 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* User Info */}
        {user && (
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-sm text-gray-400">
              Logged in as: <span className="text-white font-medium">{user.name}</span>
              <span className="text-blue-300 ml-2">({user.role})</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;