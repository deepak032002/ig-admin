import { create } from 'zustand'

import { createUserSlice } from '@/store/slices/user-slice'

export const useGlobalStore = create<CombineSlices>()((...a) => ({
  ...createUserSlice(...a),
}))
