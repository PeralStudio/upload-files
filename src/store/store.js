import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useStore = create((set, get) => ({
    loading: false,
    image: "",
    type: "",
    archiveName: "",
    setLoading: (value) =>
        set((state) => ({
            ...state,
            loading: value
        })),
    setImage: (value) =>
        set((state) => ({
            ...state,
            image: value
        })),
    setType: (value) =>
        set((state) => ({
            ...state,
            type: value
        })),
    setArchiveName: (value) =>
        set((state) => ({
            ...state,
            archiveName: value
        })),
    refreshPage: () => {
        const { setLoading, setImage } = get();
        setLoading(false);
        setImage("");
    }
}));

// Devtools
if (process.env.NODE_ENV === "development") {
    mountStoreDevtool("Store", useStore);
}
