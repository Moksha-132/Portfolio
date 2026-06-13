import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"
type ThemeColor = "purple" | "blue" | "green" | "rose" | "orange"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    defaultColor?: ThemeColor
    storageKey?: string
    colorStorageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
    themeColor: ThemeColor
    setThemeColor: (color: ThemeColor) => void
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
    themeColor: "purple",
    setThemeColor: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system",
    defaultColor = "purple",
    storageKey = "vite-ui-theme",
    colorStorageKey = "vite-ui-color-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )
    const [themeColor, setThemeColor] = useState<ThemeColor>(
        () => (localStorage.getItem(colorStorageKey) as ThemeColor) || defaultColor
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark", "theme-blue", "theme-green", "theme-rose", "theme-orange")

        if (themeColor !== "purple") {
            root.classList.add(`theme-${themeColor}`)
        }

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme, themeColor])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        },
        themeColor,
        setThemeColor: (color: ThemeColor) => {
            localStorage.setItem(colorStorageKey, color)
            setThemeColor(color)
        }
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
