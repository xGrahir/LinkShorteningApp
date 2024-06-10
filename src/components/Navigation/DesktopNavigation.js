import styles from './DesktopNavigation.module.css'
import { Button } from '../../utils/Button'

export const DekstopNavigation = ({ links }) => {
	const linksList = links.map(link => (
		<li key={link.title}>
			<a href={`#${link.title}`} className={styles.link}>
				{link.title}
			</a>
		</li>
	))

	return (
		<nav className={styles['desktop-nav']}>
				<div>
					<ul className={styles.list}>{linksList}</ul>
				</div>
				<div className={styles.wrapper}>
					<ul className={styles.list}>
						<li>
							<a className={styles.link} href='#Login'>
								Login
							</a>
						</li>
					</ul>
                        <Button styles={styles.button}>Sign Up</Button>
				</div>
		</nav>
	)
}
