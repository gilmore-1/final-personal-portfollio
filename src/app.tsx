import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import Aboutme from './components/Aboutme/Aboutme'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'

const App = () => {
	return (
		<ThemeProvider>
			<Header />
			<Hero />
			<Aboutme />
			<Skills />
			<Experience />
		</ThemeProvider>
	)
}

export default App