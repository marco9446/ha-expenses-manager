import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { mdiCog } from '@mdi/js'
import Icon from '@mdi/react'
import { CalendarDateRangePicker } from './components/ui/calendarDateRange'
import BudgetPage from './pages/BudgetPage'
import DashboardPage from './pages/DashboardPage'
import TransactionPage from './pages/Transactionpage'

function App() {
  return (
    <main className="mx-auto max-w-7xl flex-1 space-y-4 p-8 pt-6">
      {/* Title section */}
      <section className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          HA Expense Manager
        </h2>
        <div className="flex items-center gap-2">
          <CalendarDateRangePicker />
          <Icon path={mdiCog} title="Settings" size={1} />
        </div>
      </section>

      {/* Nav section */}
      <section>
        <Tabs defaultValue="dashboard">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <DashboardPage />
          </TabsContent>
          <TabsContent value="budget">
            <BudgetPage />
          </TabsContent>
          <TabsContent value="transactions">
            <TransactionPage />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}

export default App
