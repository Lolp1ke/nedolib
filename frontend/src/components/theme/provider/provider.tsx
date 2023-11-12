"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function Provider({ children, ...props }: ThemeProviderProps) {
	return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
