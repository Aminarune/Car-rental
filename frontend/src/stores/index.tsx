import create from 'zustand';

interface State {
  deviceType: 'desktop' | 'tablet' | 'mobile';
}
interface Action {
  setDeviceType: (type: State['deviceType']) => void;
}

export const useDeviceStore = create<State & Action>((set) => ({
  deviceType: 'desktop',
  setDeviceType: (type) => set({ deviceType: type }),
}));
