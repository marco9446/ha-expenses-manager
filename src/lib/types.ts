import type { currencies } from './utils'

export type Currency = (typeof currencies)[number]

export type Page = 'dashboard' | 'budget' | 'transactions' | 'calendar'
