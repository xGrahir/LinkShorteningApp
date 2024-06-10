import { Navbar } from '../components/Navigation/Navbar'
import { Header } from '../components/Header/Header'
import { MainSection } from '../components/MainSection/MainSection'
import { Footer } from '../components/Footer/Footer'
import { BoostSection } from '../components/BoostSection/BoostSection'

export const HomePage = () => {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<MainSection />
				<BoostSection />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}
