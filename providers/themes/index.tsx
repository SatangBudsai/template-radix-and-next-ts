"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export default function ThemesProvider({ children }: ThemeProviderProps) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </NextThemesProvider>
    )
}
