import { DashboardTableData } from '@/lib/types'
import { cn, formatMoney } from '@/lib/utils'
import { Card } from '../ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

type DashboardTableProps = {
  data: DashboardTableData[]
  inverted?: boolean
}

const DashboardTable = ({ data, inverted = false }: DashboardTableProps) => {
  return (
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
          {data.map((row) => (
            <TableRow key={row.category}>
              <TableCell className="font-medium">
                {row.categoryIcon}
                {row.category}
              </TableCell>
              <TableCell className="text-right">
                {formatMoney(row.trackedValue)}
              </TableCell>
              <TableCell className="text-right">
                {formatMoney(row.budgetValue)}
              </TableCell>
              <TableCell
                className={cn('text-right', {
                  'text-positive': inverted
                    ? row.deltaValue <= 0
                    : row.deltaValue >= 0,
                  'text-negative': inverted
                    ? row.deltaValue > 0
                    : row.deltaValue < 0,
                })}
              >
                {formatMoney(row.deltaValue, true)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default DashboardTable
