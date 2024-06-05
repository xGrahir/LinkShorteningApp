import styles from './Header.module.css'
import { Button } from '../../utils/Button'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.image}></div>
			<div className={styles.text}>
				<h1 className={styles.title}>More than just shorter links</h1>
				<p className={styles.about}>
					Build your brand's recognition and get detailed insights on how your links are performing.{' '}
				</p>
				<Button styles={styles.button}>Get Started</Button>
			</div>
		</header>
	)
}
