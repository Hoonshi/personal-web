import { create } from 'zustand'

interface Store {
  info: { id: number; title: string; content: string }[]
  selectedInfo: { id: number; title: string; content: string } | null
  addInfo: (title: string, content: string) => void
  updateInfo: (id: number, title: string, content: string) => void
  selectInfo: (id: number) => void
}

export const useStore = create<Store>(set => ({
  info: [],
  selectedInfo: null,
  addInfo: (title, content) => {
    const newInfo = { id: Date.now(), title, content }
    set(state => ({ info: [...state.info, newInfo] }))
  },
  updateInfo: (id, title, content) => {
    set(state => ({
      info: state.info.map(info =>
        info.id === id ? { id, title, content } : info
      )
    }))
  },
  selectInfo: id => {
    set(state => ({
      selectedInfo: state.info.find(cur => cur.id === id || null)
    }))
  }
}))
