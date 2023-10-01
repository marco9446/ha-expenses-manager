import TimeRangeSelector from '@/components/TimeRangeSelector/TimeRangeSelector'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatMoney } from '@/lib/utils'
import { MdOutlineMoney, MdQuestionMark } from 'react-icons/md'
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
      <div className="flex items-center justify-between">
        <div className="mt-5 flex gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                {formatMoney(830.34)}
              </div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">
                {formatMoney(458)}
              </div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Delta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                +{formatMoney(372.34)}
              </div>
              <p className="text-xs text-muted-foreground">
                difference income and expenses
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Period compl.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35%</div>
              <div className="pt-1 text-xs text-muted-foreground">
                <Progress value={35} />
              </div>
            </CardContent>
          </Card>
        </div>

        <TimeRangeSelector />
      </div>
      <section className="flex  gap-2">
        <div className="max-w-[50%] grow">
          <div className="mt-6">
            <h2 className="pb-3 text-2xl ">Incomes</h2>
            <Card className="max-w-lg">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Tracked</TableHead>
                    <TableHead className="text-right">Budget</TableHead>
                    <TableHead className="text-right">Delta</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <MdOutlineMoney className="mr-2 inline text-muted-foreground" />{' '}
                      Salary
                    </TableCell>
                    <TableCell className="text-right">
                      {formatMoney(1230)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatMoney(1230)}
                    </TableCell>
                    <TableCell className="text-right text-green-500">
                      {formatMoney(0)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <MdQuestionMark className="mr-2 inline  text-muted-foreground" />{' '}
                      Other
                    </TableCell>
                    <TableCell className="text-right">
                      {formatMoney(130)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatMoney(100)}
                    </TableCell>
                    <TableCell className="text-right text-green-500">
                      +{formatMoney(30)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
          <div className="mt-6">
            <h2 className="pb-3 text-2xl ">Expenses</h2>
            <Card className="max-w-lg">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Tracked</TableHead>
                    <TableHead className="text-right">Budget</TableHead>
                    <TableHead className="text-right">Delta</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Groceries</TableCell>
                    <TableCell className="text-right">
                      {formatMoney(80)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatMoney(100)}
                    </TableCell>
                    <TableCell className="text-right text-green-500">
                      -{formatMoney(20)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
          <div className="mt-6">
            <h2 className="pb-3 text-2xl">Savings</h2>

            <Card className="max-w-lg">
              <Table className="">
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Tracked</TableHead>
                    <TableHead className="text-right">Budget</TableHead>
                    <TableHead className="text-right">Delta</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Pension</TableCell>
                    <TableCell className="text-right">
                      {formatMoney(0)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatMoney(300)}
                    </TableCell>
                    <TableCell className="text-right text-red-500">
                      -{formatMoney(300)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>

        <div className=" max-w-[50%] grow   py-6">
          <h2 className="pb-3 text-2xl">Graph</h2>

          <Card className="h-2/3 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={600}
                height={400}
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
