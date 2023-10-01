import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const TimeRangeSelector = () => {
  return (
    <div className="flex flex-col items-end space-y-2">
      <div className="border-collapse">
        <button className="shadow-inset rounded-l border border-t border-foreground bg-[#e6e6e6] px-3 py-1">
          month
        </button>
        <button className="rounded-r border-y border-r border-foreground px-3 py-1">
          year
        </button>
      </div>
      {/* second Row */}
      <div className="flex items-center justify-between text-sm">
        <div>Sep 25 - Oct 1</div>
        <div className="flex items-baseline gap-2 ">
          <button className="rounded hover:ring-1 ">
            <MdKeyboardArrowLeft size={'2em'} />
          </button>
          <button className=" rounded hover:ring-1">
            <MdKeyboardArrowRight size={'2em'} />
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
