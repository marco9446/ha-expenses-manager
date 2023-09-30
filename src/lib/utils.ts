import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const currencies = [
  {
    name: 'United States Dollar',
    code: 'USD',
    symbol: '$',
  },
  {
    name: 'Euro',
    code: 'EUR',
    symbol: '€',
  },
  {
    name: 'Japanese Yen',
    code: 'JPY',
    symbol: '¥',
  },
  {
    name: 'British Pound Sterling',
    code: 'GBP',
    symbol: '£',
  },
  {
    name: 'Australian Dollar',
    code: 'AUD',
    symbol: 'A$',
  },
  {
    name: 'Canadian Dollar',
    code: 'CAD',
    symbol: 'C$',
  },
  {
    name: 'Swiss Franc',
    code: 'CHF',
    symbol: 'Fr',
  },
  {
    name: 'Chinese Yuan',
    code: 'CNY',
    symbol: '¥',
  },
  {
    name: 'Indian Rupee',
    code: 'INR',
    symbol: '₹',
  },
  {
    name: 'Brazilian Real',
    code: 'BRL',
    symbol: 'R$',
  },
] as const
