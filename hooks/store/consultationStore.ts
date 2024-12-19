import { create } from "zustand";

interface File {
  filePath: string;
}
interface consultationData {
  name: string;
  surname: string;
  phoneNumber: string;
  zipCode: string;
  email: string;
  message: string;
  consultationDate: string;
  beginTime: string;
  endTime: string;
  workStyleId: number;
  manual: boolean;
  files: File[];
}

// Zustand store type
export type Store = {
  step: number;
  consultaionData: consultationData;
  setFieldsConsultations: (fields: Partial<Store>) => void;
  setClose: () => void;
};

const initialValue = {
  step: 1,
  consultaionData: {
    name: "",
    surname: "",
    phoneNumber: "",
    zipCode: "",
    email: "",
    message: "",
    consultationDate: "",
    beginTime: "",
    endTime: "",
    workStyleId: 1,
    manual: false,
    files: [],
  },
};

// Initial state
const initialState: Store = {
  ...initialValue,
  setFieldsConsultations: () => {},
  setClose: () => {},
};

export const useConsultationStore = create<Store>((set) => ({
  ...initialState,
  setFieldsConsultations: (fields) => set((state) => ({ ...state, ...fields })),
  setClose: () => set(() => ({ ...initialValue })),
}));
