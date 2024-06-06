import { Navbar } from '../components/Navigation/Navbar'
import { Header } from '../components/Header/Header'
import { MainSection } from '../components/MainSection/MainSection'

export const HomePage = () => {
	return (
		<>
			<Navbar />
			<Header />
			<main>
				<MainSection />
			</main>
		</>
	)
}
