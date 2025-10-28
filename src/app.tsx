import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'


const App = () => {
	return (
		<ThemeProvider>
			<Header />
      <Hero />
		</ThemeProvider>
	)
}

export default App