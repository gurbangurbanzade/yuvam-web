import { create } from "zustand";

// Zustand store type
export type Store = {
  statusModal: boolean;
  errorModal: boolean;
  modalMessage?: string;
  consultationSucces?:boolean;
  isBodyOverflow: boolean;
  setFields: (fields: Partial<Store>) => void;
  setClose: () => void;
};

const initialValue = {
  statusModal: false,
  errorModal: false,
  modalMessage: "",
  consultationSucces:false,
  isBodyOverflow: false,
};

// Initial state
const initialState: Store = {
  ...initialValue,
  setFields: () => {},
  setClose: () => {},
};

export const useStore = create<Store>((set) => ({
  ...initialState,
  setFields: (fields) => set((state) => ({ ...state, ...fields })),
  setClose: () => set(() => ({ ...initialValue })),
}));
