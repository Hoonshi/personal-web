import { create } from 'zustand'

interface InfoState {
  info: { title: string; content: string }[]
  addInfo: (title: string, content: string) => void
}

export const useInfoStore = create<InfoState>(set => ({
  info: [],
  addInfo: (title, content) =>
    set(state => ({ info: [...state.info, { title, content }] }))
}))
