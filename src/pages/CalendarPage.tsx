import { Badge } from '@/components/ui/badge'
import { formatMoney } from '@/lib/utils'
import moment from 'moment'
import { useCallback } from 'react'
import { Calendar, EventPropGetter, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

type CustomEvent = {
  title: string
  start: Date
  end: Date
  allDay?: boolean
  resource?: {
    color?: string
    amount: number
    category: string
  }
}

const CalendarPage = () => {
  const eventPropGetter = useCallback<EventPropGetter<CustomEvent>>(
    (event, start, end, isSelected) => ({
      ...(event.resource?.color && {
        style: {
          backgroundColor: event.resource.color,
        },
      }),
    }),
    []
  )
  return (
    <div>
      <h1 className="mb-6 scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
        Calendar
      </h1>
      <Calendar
        components={{
          event: (event) => (
            // TODO use useMemo
            <div>
              <span className="capitalize">{event.title}</span>
              {event.event.resource?.amount !== undefined && (
                <Badge variant="default" className="ml-3">
                  {formatMoney(event.event.resource?.amount)}
                </Badge>
              )}
            </div>
          ),
        }}
        showAllEvents
        views={['month', 'agenda']}
        length={182}
        localizer={localizer}
        eventPropGetter={eventPropGetter}
        events={[
          {
            title: 'electricity bill',
            start: new Date(),
            end: new Date(),
            allDay: true,
            resource: {
              amount: 23,
              category: 'caen',
            },
          },
          {
            title: 'some other bil',
            start: new Date('2023-10-01T13:18:33.941Z'),
            end: new Date('2023-10-01T19:18:33.941Z'),
            allDay: true,
          },
        ]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}

export default CalendarPage
