import useSlice from './useSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    getUser: useSlice,
  },
})
export default store
