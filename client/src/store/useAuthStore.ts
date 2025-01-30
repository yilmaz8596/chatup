import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types/types";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: true,
      setUser: (user) => set({ user }),
      setLoading: (isLoading) => set({ isLoading }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
