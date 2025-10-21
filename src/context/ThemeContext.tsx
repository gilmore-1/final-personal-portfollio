import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
interface ThemeContextType {
	theme: Theme
	toggleTheme: () => void
	setTheme: (t: Theme) => void
}

const THEME_KEY = 'theme'

const applyTheme = (theme: Theme) => {
	document.documentElement.classList.remove('theme-light', 'theme-dark')
	document.documentElement.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
	document.documentElement.setAttribute('data-theme', theme)
}

const getInitialTheme = (): Theme => {
	try {
		const stored = (typeof localStorage !== 'undefined') ? (localStorage.getItem(THEME_KEY) as Theme | null) : null
		if (stored === 'light' || stored === 'dark') return stored
		const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		return prefersDark ? 'dark' : 'light'
	} catch {
		return 'light'
	}
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [theme, setThemeState] = useState<Theme>(() => getInitialTheme())

	useEffect(() => {
		applyTheme(theme)
		try { localStorage.setItem(THEME_KEY, theme) } catch {}
	}, [theme])

	// optional: respond to system preference changes only if user has not set explicit stored preference
	useEffect(() => {
		if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
		const mq = window.matchMedia('(prefers-color-scheme: dark)')

		const listener = (e: MediaQueryListEvent) => {
			try {
				const stored = localStorage.getItem(THEME_KEY)
				if (stored === 'light' || stored === 'dark') return // respect explicit preference
				setThemeState(e.matches ? 'dark' : 'light')
			} catch {}
		}

		// modern API
		if (typeof mq.addEventListener === 'function') {
			mq.addEventListener('change', listener as EventListener)
		} else {
			// legacy API exists on some browsers — cast to any to avoid TS errors
			const mqAny = mq as any
			if (typeof mqAny.addListener === 'function') mqAny.addListener(listener)
		}

		return () => {
			if (typeof mq.removeEventListener === 'function') {
				mq.removeEventListener('change', listener as EventListener)
			} else {
				const mqAny = mq as any
				if (typeof mqAny.removeListener === 'function') mqAny.removeListener(listener)
			}
		}
	}, [])

	const setTheme = useCallback((t: Theme) => setThemeState(t), [])
	const toggleTheme = useCallback(() => setThemeState((s) => (s === 'dark' ? 'light' : 'dark')), [])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = (): ThemeContextType => {
	const ctx = useContext(ThemeContext)
	if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
	return ctx
}


// add default export to avoid "has no exported member 'useTheme'" confusion from different import styles
export default ThemeProvider