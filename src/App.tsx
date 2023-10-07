import { GearIcon } from '@radix-ui/react-icons'
import { Link, Outlet } from '@tanstack/react-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './components/ui/navigation-menu'
import { Page } from './lib/types'

function App() {
  return (
    <main className="mx-auto max-w-7xl flex-1 space-y-4  ">
      <div className="bg-card px-4 py-2 md:px-8 md:py-4">
        {/* Title section */}
        <section className="relative mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
            HA Expense Manager
          </h2>

          {/* Nav section */}
          <section className="order-3 md:order-2">
            <NavigationMenu>
              <NavigationMenuList className="inline-flex items-center justify-center space-x-2 rounded-lg bg-muted p-1 text-muted-foreground">
                <MainNavItem path="dashboard" value="Dashboard" />
                <MainNavItem path="budget" value="Budget" />
                <MainNavItem path="transactions" value="Transactions" />
                <MainNavItem path="calendar" value="Calendar" />
              </NavigationMenuList>
            </NavigationMenu>
          </section>
          <div className="order-2 flex items-center gap-2 md:order-3">
            <Link
              to="/settings"
              className="rounded-full border bg-background p-2 shadow-sm"
            >
              <GearIcon />
            </Link>
          </div>
        </section>
      </div>

      <section className="px-4 md:px-8">
        <Outlet />
      </section>
    </main>
  )
}

export default App

const MainNavItem = ({ path, value }: { path: Page; value: string }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          to={('/' + path) as Page}
          className="inline-flex items-center justify-center whitespace-nowrap
            rounded-md p-2 text-sm font-medium 
            ring-offset-background transition-all
            focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-ring focus-visible:ring-offset-2 
            disabled:pointer-events-none disabled:opacity-50"
          activeProps={{
            className: 'bg-card text-foreground shadow',
          }}
        >
          {value}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}
