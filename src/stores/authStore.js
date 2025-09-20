import { create } from "zustand";
import { persist } from "zustand/middleware";
import { USER_ROLES } from "../utils/constants";

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (username, password) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1500));

          let mockUser = null;

          if (username === "admin" && password === "admin123") {
            mockUser = {
              id: 1,
              username: "admin",
              role: USER_ROLES.ADMIN,
              name: "System Administrator",
              email: "admin@iisc.ac.in",
              avatar: null,
            };
          } else if (username === "asisten" && password === "password123") {
            mockUser = {
              id: 2,
              username: "asisten",
              role: USER_ROLES.ASSISTANT,
              name: "Dr. Lab Assistant",
              email: "assistant@iisc.ac.in",
              phone_number: "081234567890",
              avatar: null,
            };
          } else if (username === "mahasiswa" && password === "password123") {
            mockUser = {
              id: 3,
              username: "mahasiswa",
              role: USER_ROLES.STUDENT,
              name: "Alex Johnson",
              email: "alex.johnson@iisc.ac.in",
              NIM: "2024001001",
              class: "CS-A",
              avatar: null,
            };
          }

          if (!mockUser) {
            throw new Error("Invalid credentials");
          }

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: error.message || "Login failed",
            isLoading: false,
          });
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },

      clearError: () => set({ error: null }),

      updateUser: (updates) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates }
          });
        }
      },

      // Helper methods
      isAdmin: () => get().user?.role === USER_ROLES.ADMIN,
      isAssistant: () => get().user?.role === USER_ROLES.ASSISTANT,
      isStudent: () => get().user?.role === USER_ROLES.STUDENT,
    }),
    {
      name: "iisc-auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;