import { create } from "zustand";
import { BeerType } from "../interfaces/BeerType";
import { getBeers } from "../service/api";

type BeerStore = {
  beers: BeerType[];
  loading: boolean;
  error: string | null;
  loadBeers: () => Promise<void>;
};

export const useBeerStore = create<BeerStore>((set) => ({
  beers: [],
  loading: true,
  error: null,

  loadBeers: async () => {
    set({ loading: true, error: null });
    try {
      const beers = await getBeers();
      set({ beers });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load beers";
      set({ error: message });
    } finally {
      set({ loading: false });
    }
  },
}));
