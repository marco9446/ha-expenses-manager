import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const TimeRangeSelector = () => {
  return (
    <div className="space-y-2">
      <div className="border-collapse">
        <button className="rounded-l border border-t border-foreground bg-slate-300 px-3 py-1">
          week
        </button>
        <button className="border-y border-r border-foreground  px-3 py-1">
          month
        </button>
        <button className="border-y border-foreground px-3 py-1">year</button>
        <button className="rounded-r border border-foreground px-3 py-1">
          custom
        </button>
      </div>
      {/* second Row */}
      <div className="flex items-center justify-between text-sm">
        <div>Sep 25 - Oct 1</div>
        <div className="flex items-baseline">
          <button>
            <MdKeyboardArrowLeft />
          </button>
          <button>
            <MdKeyboardArrowRight />
          </button>
        </div>
        <button className="rounded border border-foreground px-3 py-1">
          today
        </button>
      </div>
    </div>
  )
}

export default TimeRangeSelector
