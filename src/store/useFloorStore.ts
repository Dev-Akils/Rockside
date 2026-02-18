import { create } from 'zustand';
import { floorData } from '../data/FloorData';

interface Unit {
  id: number | string;
  name: string;
  type: string;
  polygonPoints: string;
  hoverColor: string;
}

interface Floor {
  id: number;
  image3D: string;
  features: string[];
  units: Unit[];
  imageSettings: {
    svgSize: string;
    imageWidth: number;
    imageHeight: number;
  };
  buttonSettings: Record<string, { text: string; bgColor: string }>;
}

interface FloorStore {
  floors: Floor[];
  selectedUnitId: string | null;
  hoveredUnitId: string | null;
  setSelectedUnit: (id: string | null) => void;
  setHoveredUnit: (id: string | null) => void;
  getFloorById: (id: string | number) => Floor | undefined;
}

export const useFloorStore = create<FloorStore>((set, get) => ({
  floors: floorData as Floor[],
  selectedUnitId: null,
  hoveredUnitId: null,

  setSelectedUnit: (id) => set({ selectedUnitId: id }),
  setHoveredUnit: (id) => set({ hoveredUnitId: id }),
  getFloorById: (id) => get().floors.find((f) => f.id === Number(id)),
}));