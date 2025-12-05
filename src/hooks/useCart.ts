import { useState, useCallback, useEffect } from 'react';
import type { CartState, CartItem, MenuItem } from '../types';

const CART_STORAGE_KEY = 'efood-cart';

const loadCartFromStorage = (): CartState => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        isOpen: false, // Always start with cart closed
      };
    }
  } catch (error) {
    console.error('Error loading cart from storage:', error);
  }
  return {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    isOpen: false,
  };
};

export const useCart = () => {
  const [cart, setCart] = useState<CartState>(loadCartFromStorage);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      const cartToSave = {
        items: cart.items,
        totalItems: cart.totalItems,
        totalPrice: cart.totalPrice,
      };
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartToSave));
    } catch (error) {
      console.error('Error saving cart to storage:', error);
    }
  }, [cart.items, cart.totalItems, cart.totalPrice]);

  const calculateTotals = useCallback((items: CartItem[]) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { totalItems, totalPrice };
  }, []);

  const addItem = useCallback((menuItem: MenuItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex(
        (item) => item.menuItemId === menuItem.id
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Item already exists, increase quantity
        newItems = [...prevCart.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1,
        };
      } else {
        // New item, add to cart
        const newCartItem: CartItem = {
          id: `cart-${Date.now()}-${menuItem.id}`,
          menuItemId: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          quantity: 1,
          restaurantId: menuItem.restaurantId,
        };
        newItems = [...prevCart.items, newCartItem];
      }

      const { totalItems, totalPrice } = calculateTotals(newItems);

      return {
        ...prevCart,
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  }, [calculateTotals]);

  const removeItem = useCallback((itemId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.id !== itemId);
      const { totalItems, totalPrice } = calculateTotals(newItems);

      return {
        ...prevCart,
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  }, [calculateTotals]);

  const toggleCart = useCallback(() => {
    setCart((prevCart) => ({
      ...prevCart,
      isOpen: !prevCart.isOpen,
    }));
  }, []);

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      isOpen: false,
    });
    localStorage.removeItem(CART_STORAGE_KEY);
  }, []);

  return {
    cart,
    addItem,
    removeItem,
    toggleCart,
    clearCart,
  };
};
