import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../RootReducer/RootReducer'

export const store = configureStore({
  reducer: rootReducer,
})