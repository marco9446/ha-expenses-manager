import type { currencies } from './utils'

export type Currency = (typeof currencies)[number]

export type Page = 'dashboard' | 'budget' | 'transactions' | 'calendar'

export type DashboardTableData = {
  categoryIcon?: string
  category: string
  trackedValue: number
  budgetValue: number
  deltaValue: number
}
