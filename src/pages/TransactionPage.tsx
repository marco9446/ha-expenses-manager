import DashboardTable from '@/components/Tables/DashboardTable'

const TransactionPage = () => {
  return (
    <div>
      <h1 className="mb-6 scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
        Reoccurring Transactions
      </h1>
      <DashboardTable
        data={[
          {
            category: 'something',
            budgetValue: 30,
            deltaValue: 20,
            trackedValue: 33,
          },
        ]}
      />
      <h1 className="mb-6 scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
        Transactions
      </h1>
    </div>
  )
}

export default TransactionPage
