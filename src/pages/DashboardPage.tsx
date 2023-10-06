import DashboardTable from '@/components/DashboardTable/DashboardTable'
import TimeRangeSelector from '@/components/TimeRangeSelector/TimeRangeSelector'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn, formatMoney } from '@/lib/utils'
import { ReactNode } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
const data = [
  {
    name: 'Sept 30',
    Incomes: 2390,
    Expenses: 3800,
    Savings: 2500,
  },
  {
    name: 'oct 01',
    Incomes: 3490,
    Expenses: 4300,
    Savings: 2100,
  },
  {
    name: 'Sept 30',
    Incomes: 2390,
    Expenses: 3800,
    Savings: 2500,
  },
  {
    name: 'oct 01',
    Incomes: 3490,
    Expenses: 4300,
    Savings: 2100,
  },
  {
    name: 'Sept 30',
    Incomes: 2390,
    Expenses: 3800,
    Savings: 2500,
  },
]

const DashboardPage = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between md:flex-row md:items-center">
        <div className="mt-5 flex flex-wrap justify-between gap-1 md:justify-start">
          <ValueCard doFormatMoney title="Income" value={830.34} footer="" />
          <ValueCard doFormatMoney title="Expenses" value={-458.34} footer="" />
          <ValueCard doFormatMoney title="Delta" value={372.34} footer="" />
          <ValueCard
            title="Period compl."
            value={'35%'}
            footer={<Progress value={35} />}
          />
        </div>

        <TimeRangeSelector />
      </div>
      <section className="mb-8 mt-4 flex flex-col-reverse gap-4 lg:flex-row">
        <div className=" min-w-[50%] grow space-y-4">
          <div>
            <h2 className="pb-2 text-2xl ">Incomes</h2>
            <DashboardTable
              data={[
                {
                  category: 'something',
                  trackedValue: 33,
                  budgetValue: 30,
                  deltaValue: 3,
                },
                {
                  category: 'other',
                  trackedValue: 339,
                  budgetValue: 100,
                  deltaValue: 239,
                },
              ]}
            />
          </div>
          <div>
            <h2 className="pb-2 text-2xl ">Expenses</h2>
            <DashboardTable
              inverted
              data={[
                {
                  category: 'something',
                  trackedValue: 33,
                  budgetValue: 30,
                  deltaValue: +3,
                },
              ]}
            />
          </div>
          <div>
            <h2 className="pb-2 text-2xl">Savings</h2>
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
          </div>
        </div>

        <div className="grow">
          <h2 className="pb-2 text-2xl">Graph</h2>

          <Card className="h-52 w-full lg:h-80 lg:w-[99%]">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 5,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(a) => formatMoney(a.toString())} />
                <Legend />
                <Bar dataKey="Incomes" fill="rgb(74 222 128)" />
                <Bar dataKey="Expenses" fill="rgb(248 113 113)" />
                <Bar dataKey="Savings" fill="rgb(96 165 250)" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </section>
    </>
  )
}

export default DashboardPage

const ValueCard = ({
  title,
  value,
  footer,
  doFormatMoney = false,
}: {
  title: string
  value: string | number
  doFormatMoney?: boolean
  footer?: ReactNode
}) => {
  let formattedValue: ReactNode = value
  if (doFormatMoney) {
    formattedValue = (
      <span
        className={cn({
          'text-positive': (value as number) >= 0,
          'text-negative': (value as number) < 0,
        })}
      >
        {formatMoney(value, true)}
      </span>
    )
  }

  return (
    <Card className="space-y-1 p-4">
      <CardHeader className="p-0">
        <CardTitle className="p-0 text-xs font-medium  md:text-sm ">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="text-lg font-bold md:text-2xl">{formattedValue}</div>
        <div className="pt-1 text-xs text-muted-foreground">{footer}</div>
      </CardContent>
    </Card>
  )
}
