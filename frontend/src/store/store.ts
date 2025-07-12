import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  purchasesCount: number;
  addPurchases: () => void;
  isBurger: boolean;
  handleBurger: () => void;
  type: "franch" | "germany" | "england";
  handleType: (type: "franch" | "germany" | "england") => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    purchasesCount: 0,
    addPurchases: () =>
      set((state) => ({ purchasesCount: state.purchasesCount + 1 })),
    isBurger: false,
    handleBurger: () => set((state) => ({ isBurger: !state.isBurger })),
    type: "franch",
    handleType: (type) => set(() => ({ type: type })),
  }))
);
