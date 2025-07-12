import { createStore } from "zustand";

interface IStore {
  purchasesCount: number;
  addPurchases: () => void;
  isBurger: boolean;
}

export const useStore = createStore<IStore>((set) => ({
  purchasesCount: 0,
  addPurchases: () => set((state) => ({ purchasesCount: state.purchasesCount + 1 })),
  isBurger: false,
}))