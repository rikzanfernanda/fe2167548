import create from "zustand"
import {persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

const cartQuantityMiddleware = (config) => (set, get, api) =>
  config(
    (args) => {
      // console.log('args', get());
      set(args);
      // console.log('args2', get());
      set((state) => {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.quantity < 1) {
              return {
                ...item,
                quantity: 1,
              }
            } else if (item.quantity > item.stock) {
              return {
                ...item,
                quantity: item.stock,
              }
            }
            return item;
          })
        }
      })
    },
    get,
    api,
  )

const useCartStore = create(
  persist(
    cartQuantityMiddleware(
      immer((set) => ({
        items: [],
        addItem: (item) => set(state => ({items: [...state.items, item]})),
        removeItem: (itemId) => set(state => ({items: state.items.filter(item => (item.id !== itemId))})),
        changeQuantity: (itemId, quantity) => set(state => ({items: state.items.map(item => (item.id === itemId ? {...item, quantity: quantity} : item))}))
      }))
    ), {name: 'cart'}
  )
)



export default useCartStore
