import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import Aboutme from './components/Aboutme/Aboutme'
import Skills from './components/Skills/Skills'

const App = () => {
	return (
		<ThemeProvider>
			<Header />
			<Hero />
			<Aboutme />
			<Skills />
		</ThemeProvider>
	)
}

export default App