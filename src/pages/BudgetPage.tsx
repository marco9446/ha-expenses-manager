import BudgetTable from '@/components/Tables/BudgetTable'
import { Button } from '@/components/ui/button'

const BudgetPage = () => {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="flex items-center gap-3 pb-2 text-2xl">
          Incomes budget
          <Button size="sm" variant="outline">
            Add income category
          </Button>
        </h2>
        <BudgetTable
          data={[
            {
              id: 'sdfsd',
              category: 'something',
              budgetValue: 30,
            },
          ]}
        />
      </div>
      <div>
        <h2 className="flex items-center gap-3 pb-2 text-2xl">
          Expenses budget
          <Button size="sm" variant="outline">
            Add expense category
          </Button>
        </h2>
        <BudgetTable
          data={[
            {
              id: 'sdfsd',
              category: 'something',
              budgetValue: 30,
            },
          ]}
        />
      </div>

      <div>
        <h2 className="flex items-center gap-3 pb-2 text-2xl">
          Savings budget
          <Button size="sm" variant="outline">
            Add savings category
          </Button>
        </h2>
        <BudgetTable
          data={[
            {
              id: 'sdfsd',
              category: 'something',
              budgetValue: 30,
            },
          ]}
        />
      </div>
    </section>
  )
}

export default BudgetPage
