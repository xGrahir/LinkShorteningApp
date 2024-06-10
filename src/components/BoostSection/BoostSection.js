import styles from './BoostSection.module.css'
import { Button } from '../../utils/Button'

export const BoostSection = () => {
	return (
			<section className={styles['section-background']}>
				<div className={styles['bg-image']}>
					<div className={styles.wrapper}>
						<h3>Boost your links today</h3>
						<Button styles={styles.button}>Get Started</Button>
					</div>
				</div>
			</section>
	)
}
