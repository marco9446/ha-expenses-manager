import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { currencies } from './lib/utils'

type Currency = typeof currencies
type Page = 'dashboard' | 'budget' | 'transactions' | 'calendar'

interface HaExpenseState {
  currency: Currency[number]['code']
  roundUpNumbers: boolean
  defaultPage: Page
  setCurrency: (currency: Currency[number]['code']) => void
  setDefaultPage: (page: Page) => void
  toggleRoundupNumbers: () => void
}

export const useHaExpensesStore = create<HaExpenseState>()(
  persist(
    (set, get) => ({
      roundUpNumbers: false,
      currency: 'CHF',
      defaultPage: 'dashboard',
      setCurrency: (currency: Currency[number]['code']) =>
        set(() => ({ currency })),
      setDefaultPage: (page: Page) => set(() => ({ defaultPage: page })),
      toggleRoundupNumbers: () =>
        set(() => ({ roundUpNumbers: !get().roundUpNumbers })),
    }),
    {
      name: 'ha-expense-manager-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
