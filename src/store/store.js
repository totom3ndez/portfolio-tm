import { create } from "zustand";

export const useStore = create((set) => ({
  dark: true,
  setTheme: () => set((state) => ({ dark: !state.dark })),
}));
