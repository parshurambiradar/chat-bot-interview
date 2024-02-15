import create from 'zustand';

const useAudioStore = create((set) => ({
  speaking: false,
  setSpeaking: (speaking) => set({ speaking }),

}));

export default useAudioStore;
