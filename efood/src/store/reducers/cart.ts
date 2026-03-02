import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  description: string
  image: string
  price: number
  porcao: string
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { open, close, add, remove, clear } = cartSlice.actions
export default cartSlice.reducer