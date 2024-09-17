import { create } from 'zustand';

interface BearState {
  showFilter: boolean;
  setShowFilter: (value: boolean) => void;
}

export const layoutStore = create<BearState>()((set) => ({
  showFilter: true,
  setShowFilter: (value) => set(() => ({ showFilter: value })),
}));
