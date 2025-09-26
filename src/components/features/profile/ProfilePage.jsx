import React from 'react';
import { User, Mail, Phone, Calendar, Shield, CheckCircle } from 'lucide-react';

const ProfilePage = () => {
  const features = [
    "Profile Information Management",
    "Password & Security Settings", 
    "Notification Preferences",
    "Activity History",
    "Account Privacy Controls"
  ];

  return (
    <div className="p-6 space-y-6 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-300">Manage your account settings</p>
      </div>

      {/* Profile Preview */}
      <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">John Doe</h2>
            <p className="text-gray-300">Student - 2021001234</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">john.doe@student.university.edu</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">+62 812-3456-7890</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">Joined: September 2021</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">Account Status: Active</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Profile Management Coming Soon</h3>
        <p className="text-gray-400">Enhanced profile features under development!</p>
        
        <div className="mt-6 text-left max-w-md mx-auto">
          <h4 className="text-white font-medium mb-3">Planned Features:</h4>
          <div className="space-y-2 text-sm text-gray-300">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;