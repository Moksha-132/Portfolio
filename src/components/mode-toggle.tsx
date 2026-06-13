import { Moon, Sun, Monitor, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { theme, setTheme, themeColor, setThemeColor } = useTheme()

    const colors = [
        { name: 'Purple', value: 'purple', class: 'bg-purple-500' },
        { name: 'Blue', value: 'blue', class: 'bg-blue-500' },
        { name: 'Green', value: 'green', class: 'bg-green-500' },
        { name: 'Rose', value: 'rose', class: 'bg-rose-500' },
        { name: 'Orange', value: 'orange', class: 'bg-orange-500' },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-lg border-border bg-transparent shadow-sm relative group">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 p-2 rounded-xl">
                <div className="flex items-center justify-between gap-1 mb-2 bg-secondary/50 p-1 rounded-lg">
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`flex-1 h-8 rounded-md ${theme === 'light' ? 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setTheme("light")}
                    >
                        <Sun className="h-4 w-4" />
                    </Button>
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`flex-1 h-8 rounded-md ${theme === 'dark' ? 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setTheme("dark")}
                    >
                        <Moon className="h-4 w-4" />
                    </Button>
                </div>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Color Accent
                </DropdownMenuLabel>
                <div className="grid grid-cols-5 gap-1 pt-1">
                    {colors.map((c) => (
                        <button
                            key={c.value}
                            onClick={() => setThemeColor(c.value as any)}
                            className={`h-8 w-full rounded-md flex items-center justify-center transition-all ${themeColor === c.value ? 'bg-secondary/80 ring-1 ring-border' : 'hover:bg-secondary/50'}`}
                            title={c.name}
                        >
                            <div className={`w-4 h-4 rounded-full ${c.class}`} />
                        </button>
                    ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
