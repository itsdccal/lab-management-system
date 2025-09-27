// src/stores/authStore.js - FIXED untuk sesuai dengan Login component
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { USER_ROLES } from '../utils/constants';

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      setUser: (user) => {
        set({ 
          user, 
          isAuthenticated: !!user,
          error: null 
        });
      },

      // FIXED: Function signature sesuai dengan Login component
      login: async (username, password) => {
        set({ isLoading: true, error: null });
        
        try {
          console.log('🔍 Login Parameters:', { username, password });
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // DEMO ACCOUNTS MAPPING
          const demoAccounts = {
            // Mahasiswa Account
            'mahasiswa': {
              id: 3,
              name: 'Ahmad Rizki',
              email: 'mahasiswa@lab.com',
              role: USER_ROLES.STUDENT,
              nim: '2024001',
              password: 'password123'
            },
            // Asisten Account  
            'asisten': {
              id: 2,
              name: 'Dr. Budi Santoso',
              email: 'asisten@lab.com',
              role: USER_ROLES.ASSISTANT,
              password: 'password123'
            },
            // Admin Account
            'admin': {
              id: 1,
              name: 'Administrator',
              email: 'admin@lab.com',
              role: USER_ROLES.ADMIN,
              password: 'admin123'
            }
          };

          const normalizedUsername = username?.toLowerCase().trim();
          const normalizedPassword = password?.trim();
          
          console.log('🔍 Login Attempt:', {
            inputUsername: username,
            inputPassword: password,
            normalizedUsername,
            normalizedPassword,
            availableAccounts: Object.keys(demoAccounts)
          });

          // Check if account exists
          const account = demoAccounts[normalizedUsername];
          
          if (!account) {
            throw new Error(`Account "${normalizedUsername}" tidak ditemukan. Gunakan: mahasiswa, asisten, atau admin`);
          }

          // Check password
          if (account.password !== normalizedPassword) {
            throw new Error('Password salah');
          }

          // Create user object (without password)
          const { password: _, ...userWithoutPassword } = account;
          const mockUser = userWithoutPassword;

          console.log('✅ Login Success:', {
            username: normalizedUsername,
            role: mockUser.role,
            user: mockUser
          });

          set({ 
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });

          return { success: true, user: mockUser };
          
        } catch (error) {
          console.error('❌ Login Error:', error.message);
          set({ 
            isLoading: false, 
            error: error.message || 'Login failed'
          });
          return { success: false, error: error.message };
        }
      },

      logout: () => {
        console.log('🚪 Logout');
        set({ 
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null
        });
      },

      updateUser: (userData) => {
        const { user } = get();
        if (user) {
          set({ 
            user: { ...user, ...userData }
          });
        }
      },

      clearError: () => {
        set({ error: null });
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);

export default useAuthStore;