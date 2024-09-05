import { StateCreator } from 'zustand'

export const createUserSlice: StateCreator<CombineSlices, [], [], UserSlice> = set => ({
  user: {} as UserResponse,
  setUser: user => set({ user }),
})
