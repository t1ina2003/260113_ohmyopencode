import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-all duration-300 relative overflow-hidden group border border-border/50"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute top-0 left-0 w-5 h-5 transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute top-0 left-0 w-5 h-5 transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  );
}
