import {
  LayoutDashboard,
  PieChart,
  Settings,
  Users,
  Bell,
  Search,
  Menu,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: PieChart, label: "Analytics", active: false },
  { icon: Users, label: "Team", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden font-sans text-foreground">
      <aside className="hidden md:flex flex-col w-64 h-full bg-card/50 backdrop-blur-xl border-r border-border/50 relative z-20">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Analytics
          </span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                item.active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5 transition-transform group-hover:scale-110",
                  item.active ? "text-primary" : "text-muted-foreground"
                )}
              />
              <span>{item.label}</span>
              {item.active && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border/50">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Alex Morgan</p>
              <p className="text-xs text-muted-foreground truncate">
                alex@demo.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 border-b border-border/50 bg-background/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 -ml-2 rounded-lg hover:bg-muted"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="font-bold text-lg">Analytics</span>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xl bg-muted/50 rounded-full px-4 py-2 border border-border/50 focus-within:ring-2 ring-primary/20 transition-all">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search analytics..."
              className="flex-1 bg-transparent border-none outline-none px-3 text-sm placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-muted relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-background" />
            </button>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 blur-[120px]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="md:hidden fixed inset-y-0 left-0 w-3/4 max-w-[300px] bg-background border-r border-border z-50 p-6 shadow-2xl"
            >
                 <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">A</span>
                  </div>
                  <span className="text-xl font-bold">Analytics</span>
                </div>
                 <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.label}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl",
                        item.active
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
