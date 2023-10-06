import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useHaExpensesStore } from '@/lib/store'
import { currencies } from '@/lib/utils'

const SettingsPage = () => {
  currencies
  const currency = useHaExpensesStore((state) => state.currency)
  const setCurrency = useHaExpensesStore((state) => state.setCurrency)

  return (
    <div className="space-y-3">
      <h1 className="mb-6 scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
        Settings
      </h1>

      <div className="space-y-2">
        <legend className="font-thin">Select the currency to use:</legend>
        <Select
          onValueChange={(newCurrency) =>
            setCurrency(newCurrency as (typeof currencies)[number]['code'])
          }
          value={currency}
        >
          <SelectTrigger className=" w-52">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Currencies</SelectLabel>
              {currencies.map((c) => (
                <SelectItem value={c.code} key={c.code} className="py-2.5">
                  <span>({c.symbol})</span>
                  <span className="ml-2">{c.name}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default SettingsPage
