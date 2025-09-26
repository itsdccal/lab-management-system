import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call - replace with actual API
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user data based on credentials
          const mockUser = {
            id: 1,
            name: credentials.username || 'Test User',
            email: credentials.email || 'test@example.com',
            role: credentials.role || 'student',
            nim: credentials.username === 'student' ? '2021001234' : undefined
          };

          set({ 
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });

          return { success: true, user: mockUser };
        } catch (error) {
          set({ 
            isLoading: false, 
            error: error.message || 'Login failed'
          });
          return { success: false, error: error.message };
        }
      },

      logout: () => {
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