import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const getMonthName = (date: Date) => {
  return date.toLocaleString('default', { month: 'long', year: 'numeric' })
}

const getYearName = (date: Date) => {
  return date.toLocaleString('default', { year: 'numeric' })
}

const TimeRangeSelector = () => {
  const [timeFrame, setTimeFrame] = useState<'month' | 'year'>('month')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const changeMonth = (direction: 'previous' | 'next') => {
    const newMonth = new Date(selectedDate)
    direction === 'previous'
      ? newMonth.setMonth(selectedDate.getMonth() - 1)
      : newMonth.setMonth(selectedDate.getMonth() + 1)
    setSelectedDate(newMonth)
  }

  const changeYear = (direction: 'previous' | 'next') => {
    const newYear = new Date(selectedDate)
    direction === 'previous'
      ? newYear.setFullYear(selectedDate.getFullYear() - 1)
      : newYear.setFullYear(selectedDate.getFullYear() + 1)
    setSelectedDate(newYear)
  }

  const shouldDisableNext = () => {
    const now = new Date()
    if (timeFrame == 'year') {
      return selectedDate.getFullYear() >= now.getFullYear()
    }
    return (
      selectedDate.getFullYear() == now.getFullYear() &&
      selectedDate.getMonth() >= now.getMonth()
    )
  }
  return (
    <div className="flex flex-col items-end space-y-2">
      <div className="border-collapse">
        <button
          onClick={() => setTimeFrame('month')}
          className={cn(
            'shadow-inset rounded-l border border-t border-foreground px-3 py-1',
            {
              'bg-[#e6e6e6]': timeFrame === 'month',
            }
          )}
        >
          month
        </button>
        <button
          onClick={() => setTimeFrame('year')}
          className={cn(
            'shadow-inset rounded-r border-y border-r border-foreground px-3 py-1',
            {
              'bg-[#e6e6e6]': timeFrame === 'year',
            }
          )}
        >
          year
        </button>
      </div>
      {/* second Row */}
      <div className="flex items-center justify-between gap-2 text-sm">
        <div className="whitespace-nowrap text-xl font-bold">
          {timeFrame === 'month'
            ? getMonthName(selectedDate)
            : getYearName(selectedDate)}
        </div>
        <button
          className="rounded p-2 ring-foreground hover:ring-1"
          onClick={() => {
            timeFrame === 'month'
              ? changeMonth('previous')
              : changeYear('previous')
          }}
        >
          <ChevronLeftIcon />
        </button>
        <button
          disabled={shouldDisableNext()}
          className="rounded p-2 ring-foreground hover:ring-1"
          onClick={() => {
            timeFrame === 'month' ? changeMonth('next') : changeYear('next')
          }}
        >
          <ChevronRightIcon />
        </button>
        <button
          className="rounded border border-foreground px-3 py-1"
          onClick={() => setSelectedDate(new Date())}
        >
          today
        </button>
      </div>
    </div>
  )
}

export default TimeRangeSelector
