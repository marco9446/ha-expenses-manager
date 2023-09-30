import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { currencies } from '@/lib/utils'
import { useHaExpensesStore } from '@/store'

const SettingsPage = () => {
  currencies
  const currency = useHaExpensesStore((state) => state.currency)
  const setCurrency = useHaExpensesStore((state) => state.setCurrency)

  return (
    <div>
      <div>
        <legend>Select the currency to use</legend>
        <Select
          onValueChange={(newCurrency) =>
            setCurrency(newCurrency as (typeof currencies)[number]['code'])
          }
          value={currency}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Currencies</SelectLabel>
              {currencies.map((c) => (
                <SelectItem value={c.code} key={c.code}>
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
