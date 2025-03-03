import { create } from "zustand";
import Project from "~/types/project.type";

interface Category {
    tagName: string;
}

interface WorkState {
    projects: Project[];
    categories: Category[];
    setWorkStore: <T extends keyof WorkState>(key: T, value: WorkState[T]) => void;
    getProjectById: (id: string) => Project | undefined;
};

export const useWorkStore = create<WorkState>((set, get) => ({
    projects: [],
    categories: [],
    setWorkStore: (key, value) => set({ [key]: value }),
    getProjectById: (id) => {
        const { projects } = get();
        return projects.find(project => project.id === id);
    },
}));