import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import Aboutme from './components/Aboutme/Aboutme'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
	return (
		<ThemeProvider>
			<Header />
			<Hero />
			<Aboutme />
			<Skills />
			<Experience />
			<Work />
			<Testimonials />	
		</ThemeProvider>
	)
}

export default App