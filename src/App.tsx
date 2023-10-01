import { Link, Outlet } from '@tanstack/react-router'
import { MdSettings } from 'react-icons/md'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './components/ui/navigation-menu'

function App() {
  return (
    <main className="mx-auto max-w-7xl flex-1 space-y-4  ">
      <div className="bg-white px-8 py-4">
        {/* Title section */}
        <section className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-[#047bf4]">
            HA Expense Manager
          </h2>
          <div className="flex items-center gap-2">
            <Link
              to="/settings"
              className="rounded-full border bg-background p-2 shadow-sm"
            >
              <MdSettings title="Settings" />
            </Link>
          </div>
        </section>

        {/* Nav section */}
        <section>
          <NavigationMenu>
            <NavigationMenuList className="inline-flex h-9 items-center justify-center space-x-2 rounded-lg bg-muted p-1 text-muted-foreground">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    activeProps={{
                      className: 'bg-white text-foreground shadow',
                    }}
                    to="/"
                    className="inline-flex items-center justify-center whitespace-nowrap
                  rounded-md px-3 py-1 text-sm font-medium ring-offset-background 
                  transition-all 
                  focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:pointer-events-none disabled:opacity-50"
                  >
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/budget"
                    className="inline-flex items-center justify-center whitespace-nowrap
                  rounded-md px-3 py-1 text-sm font-medium ring-offset-background 
                  transition-all 
                  focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:pointer-events-none disabled:opacity-50"
                    activeProps={{
                      className: 'bg-white text-foreground shadow',
                    }}
                  >
                    Budget
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/transactions"
                    className="inline-flex items-center justify-center whitespace-nowrap
                  rounded-md px-3 py-1 text-sm font-medium ring-offset-background 
                  transition-all 
                  focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:pointer-events-none disabled:opacity-50"
                    activeProps={{
                      className: 'bg-white text-foreground shadow',
                    }}
                  >
                    Transactions
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/calendar"
                    className="inline-flex items-center justify-center whitespace-nowrap
                  rounded-md px-3 py-1 text-sm font-medium ring-offset-background 
                  transition-all 
                  focus-visible:outline-none focus-visible:ring-2 
                  focus-visible:ring-ring focus-visible:ring-offset-2 
                  disabled:pointer-events-none disabled:opacity-50"
                    activeProps={{
                      className: 'bg-white text-foreground shadow',
                    }}
                  >
                    Calendar
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>
      </div>

      <section className="px-8">
        <Outlet />
      </section>
    </main>
  )
}

export default App
