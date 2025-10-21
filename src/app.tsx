import { ThemeProvider, useTheme } from './context/ThemeContext'
import Header from './components/Header/Header'

const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<button
			type="button"
			className="btn"
			onClick={toggleTheme}
			aria-pressed={theme === 'dark'}
			aria-label="Toggle color theme"
			style={{ margin: 16 }}
		>
			Toggle theme — {theme}
		</button>
	)
}

const App = () => {
	return (
		<ThemeProvider>
			<Header />
		</ThemeProvider>
	)
}

export default App