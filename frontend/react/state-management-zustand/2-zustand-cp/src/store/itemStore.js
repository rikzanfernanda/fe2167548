import create from "zustand"
import { persist, devtools } from "zustand/middleware";
import { produce } from "immer";

const useItemStore = create(persist(devtools(set => ({
    items: [],
    // addItem: (item) => set(state => ({ items: [...state.items, item] })),
    // removeItem: (itemId) => set(state => ({ items: state.items.filter(item => (item.id !== itemId)) })),
    addItem: (item) => set(produce((state) => {
        state.items.push(item)
    })),
    removeItem: (itemId) => set(produce((state) => {
        state.items = state.items.filter(item => (item.id !== itemId))
    })),
})), { name: "items" }));

export default useItemStore
