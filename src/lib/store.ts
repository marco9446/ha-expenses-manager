import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Currency, Page } from './types'

type HaExpenseState = {
  currency: Currency['code']
  roundUpNumbers: boolean
  defaultPage: Page
  setCurrency: (currency: Currency['code']) => void
  setDefaultPage: (page: Page) => void
  toggleRoundupNumbers: () => void
}

export const useHaExpensesStore = create<HaExpenseState>()(
  persist(
    (set, get) => ({
      currency: 'CHF',
      defaultPage: 'dashboard',
      roundUpNumbers: false,
      setCurrency: (currency: Currency['code']) => set(() => ({ currency })),
      setDefaultPage: (page: Page) => set(() => ({ defaultPage: page })),
      toggleRoundupNumbers: () =>
        set(() => ({ roundUpNumbers: !get().roundUpNumbers })),
    }),
    {
      name: 'ha-expense-manager-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
