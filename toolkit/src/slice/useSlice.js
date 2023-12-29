import { createSlice } from '@reduxjs/toolkit'

const useSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
    },
  },
})

export default useSlice.reducer
export const { addUser } = useSlice.actions
