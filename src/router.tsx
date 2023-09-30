import { RootRoute, Route, Router } from '@tanstack/react-router'
import App from './App'
import BudgetPage from './pages/BudgetPage'
import CalendarPage from './pages/CalendarPage'
import DashboardPage from './pages/DashboardPage'
import SettingsPage from './pages/SettingsPage'
import TransactionPage from './pages/TransactionPage'

const rootRoute = new RootRoute({
  component: App,
})
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: DashboardPage,
})
const dashboard = new Route({
  getParentRoute: () => rootRoute,
  path: 'dashboard',
  component: DashboardPage,
})
const budget = new Route({
  getParentRoute: () => rootRoute,
  path: 'budget',
  component: BudgetPage,
})

const transactions = new Route({
  getParentRoute: () => rootRoute,
  path: 'transactions',
  component: TransactionPage,
})

const calendar = new Route({
  getParentRoute: () => rootRoute,
  path: 'calendar',
  component: CalendarPage,
})

const settings = new Route({
  getParentRoute: () => rootRoute,
  path: 'settings',
  component: SettingsPage,
})

const routeTree = rootRoute.addChildren([
  budget,
  calendar,
  dashboard,
  indexRoute,
  settings,
  transactions,
])

export const router = new Router({ routeTree })
declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}
