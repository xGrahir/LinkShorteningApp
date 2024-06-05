import styles from './MobileNavigation.module.css'
import { createPortal } from 'react-dom'
import { Button } from '../../utils/Button'

const navContainer = document.getElementById('navigation')
const shadowContainer = document.getElementById('shadow')

export const MobileNav = ({ active, closeNav, links }) => {
	const abortNavHandler = () => {
		closeNav()
	}

	const linksList = links.map(link => <li key={link.title}><a onClick={abortNavHandler} className={styles.link} href={`#${link.title}`}>{link.title}</a></li>)

	const shadow = createPortal(
		<div className={active ? styles.shadow : ''} onClick={abortNavHandler}></div>,
		shadowContainer
	)
	const nav = createPortal(
		<nav className={`${styles['mobile-nav']} ${active ? styles.active : ''}`}>
			<div className={styles['nav-background']}>
				<ul className={styles.list}>{linksList}</ul>
				<div className={styles.bar}></div>
				<ul className={styles.list}>
					<li><a onClick={abortNavHandler} className={styles.link} href='#Login'>Login</a></li>
				</ul>
				<Button styles={styles.button}>Sing Up</Button>
			</div>
		</nav>,
		navContainer
	)

	return (
		<>
			{nav}
			{shadow}
		</>
	)
}
