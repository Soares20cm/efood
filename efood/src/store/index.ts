import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Para compatibilidade com código existente
export type RootReducer = RootState