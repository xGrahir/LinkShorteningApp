import styles from './MainSection.module.css'
import { Shorten } from './Shorten'
import { HeadText } from '../helpers/HeadText'
import { About } from './About'

export const MainSection = () => {
	return (
		<div className={styles['section-background']}>
			<div className={styles.wrapper}>
				<Shorten />
				<HeadText
					styles={styles.text}
					pstyles={styles.paragraph}
					title={'Advanced Statistics'}
					about={'Track how your links are performing across the web with our advanced statistics dashboard.'}
					tag={'h2'}></HeadText>
				<About />
			</div>
		</div>
	)
}
