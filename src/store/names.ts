import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Item = {
  apelido: string;
  explicação: string;
};

type Store = {
  items: Item[];
  addItem: (item: Item | Item[]) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
};

export const useNamesStore = create<Store>()(
  persist(
    (set) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          if (Array.isArray(item)) {
            return { items: [...state.items, ...item] };
          }
          return { items: [...state.items, item] };
        }),

      removeItem: (apelido) =>
        set((state) => ({
          items: state.items.filter((item) => item.apelido !== apelido),
        })),

      clearItems: () => set({ items: [] }),
    }),
    {
      name: "item-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
