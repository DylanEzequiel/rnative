import { create } from 'zustand'

const useStore = create((set) => ({
  detailAlbum:{},
  setDetail: (data) => set({ detailAlbum: data }),
}))

export default useStore