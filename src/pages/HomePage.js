import { Navbar } from '../components/Navigation/Navbar'
import { Header } from '../components/Header/Header'
import { MainSection } from '../components/MainSection/MainSection'
import { Footer } from '../components/Footer/Footer'

export const HomePage = () => {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<MainSection />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}
