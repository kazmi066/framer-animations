import { create } from "zustand";

type FeatureStoreProps = {
  featureInView: string | null;
  setFeatureInView: (feature: string | null) => void;
}

export const useFeatureStore = create<FeatureStoreProps>((set) => ({
  featureInView: null,
  setFeatureInView: (feature: string | null) => set({
    featureInView: feature
  })
}));