import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number
  title: string
  image: string
  price: string
}

type CartState = {
  items: Product[]
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
    add: (state, action: PayloadAction<Product>) => {
      // Verifica se o item já está no carrinho para não repetir (opcional)
      const item = state.items.find((i) => i.id === action.payload.id)
      if (!item) {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer