import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  if (!theme) return null;

  const next = theme === "light" ? "dark" : "light";

  return (
    <div className="transition-opacity duration-300 opacity-100">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(next)}
        aria-label={`Switch to ${next} theme`}
        className="w-10 h-10 rounded-full hover:text-background dark:hover:text-foreground"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
}
