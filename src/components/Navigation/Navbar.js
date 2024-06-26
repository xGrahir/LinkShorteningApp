import { Wrapper } from '../../utils/Wrapper'
import { BurgerIcon } from './BurgerIcon'
import { MobileNav } from './MobileNavigation'
import { useState } from 'react'
import { DekstopNavigation } from './DesktopNavigation'
import styles from './Navbar.module.css'

const links = [{ title: 'Features' }, { title: 'Pricing' }, { title: 'Resources' }]

export const Navbar = () => {
	const [showNavigation, setShowNavigation] = useState(false)

	const showNavHandler = () => {
		setShowNavigation(prev => !prev)
	}

	return (
		<>
			<div className={styles.navbar}>
				<Wrapper>
					<div className={styles.bar}>
						<div>
							<div className={styles.logo}></div>
						</div>
						<BurgerIcon showModal={showNavHandler} />
						<DekstopNavigation links={links} />
					</div>
				</Wrapper>
			</div>
			<MobileNav active={showNavigation} closeNav={showNavHandler} links={links} />
		</>
	)
}
