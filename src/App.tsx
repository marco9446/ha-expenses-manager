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
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink>Dashboard</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/budget">
                <NavigationMenuLink>Budget</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/transactions">
                <NavigationMenuLink>Transactions</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/calendar">
                <NavigationMenuLink>Calendar</NavigationMenuLink>
              </Link>
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
