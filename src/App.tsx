import { mdiCog } from '@mdi/js'
import Icon from '@mdi/react'
import { Link, Outlet } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './components/ui/navigation-menu'

function App() {
  return (
    <main className="mx-auto max-w-7xl flex-1 space-y-4 p-8 pt-6">
      {/* Title section */}
      <section className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">
          HA Expense Manager
        </h2>
        <div className="flex items-center gap-2">
          <Link to="/settings">
            <Icon path={mdiCog} title="Settings" size={1} />
          </Link>
        </div>
      </section>

      {/* Nav section */}
      <section>
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <NavigationMenuLink className="rounded border p-1 " asChild>
                <Link to="/">Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="rounded border p-1 " asChild>
                <Link to="/budget">Budget</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="rounded border p-1 " asChild>
                <Link to="/transactions">Transactions</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="rounded border p-1 " asChild>
                <Link to="/calendar">Calendar</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default App
