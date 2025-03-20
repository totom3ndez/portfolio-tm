import { create } from "zustand";

export const useStore = create((set) => ({
  dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  setTheme: () => set((state) => {
    const newDark = !state.dark;
    document.documentElement.classList.toggle('dark', newDark);
    return { dark: newDark };
  }),
}));
