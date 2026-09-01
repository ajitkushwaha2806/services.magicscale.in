import { create } from "zustand";

import { PLANS } from "@/constants/plans";

const initialState = {
  planId: "growth-consultation",
  plan: PLANS["growth-consultation"],
};

export const useAppConfigStore = create((set) => ({
  ...initialState,

  setPlanId: (planId) =>
    set({
      planId,
    }),

  setPlan: (plan) =>
    set({
      plan,
    }),
  reset: () => set(initialState),
}));
