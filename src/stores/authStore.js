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
          await new Promise((resolve) => setTimeout(resolve, 1000));

          let mockUser = null;

          if (username === "admin" && password === "admin123") {
            mockUser = {
              id: 1,
              username: "admin",
              role: USER_ROLES.ADMIN,
              name: "Administrator",
              email: "admin@lab.ac.id",
            };
          } else if (username === "asisten" && password === "password123") {
            mockUser = {
              id: 2,
              username: "asisten",
              role: USER_ROLES.ASSISTANT,
              name: "Asisten Lab",
              email: "asisten@lab.ac.id",
              phone_number: "081234567890",
            };
          } else if (username === "mahasiswa" && password === "password123") {
            mockUser = {
              id: 3,
              username: "mahasiswa",
              role: USER_ROLES.STUDENT,
              name: "Mahasiswa",
              email: "mahasiswa@lab.ac.id",
              NIM: "2024001001",
              class: "SI-A",
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
            error: "Username atau password salah.",
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

      // Helper methods
      isAdmin: () => get().user?.role === USER_ROLES.ADMIN,
      isAssistant: () => get().user?.role === USER_ROLES.ASSISTANT,
      isStudent: () => get().user?.role === USER_ROLES.STUDENT,
    }),
    {
      name: "lab-auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;
