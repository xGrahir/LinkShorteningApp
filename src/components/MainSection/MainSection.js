import styles from './MainSection.module.css'
import { Shorten } from './Shorten'
import { HeadText } from '../helpers/HeadText'
import { About } from './About'
import { Wrapper } from '../../utils/Wrapper'

export const MainSection = () => {
	return (
		<section className={styles['section-background']}>
			<div className={styles.wrapper}>
				<Wrapper>
					<Shorten />
					<HeadText
						styles={styles.text}
						pstyles={styles.paragraph}
						h2styles={styles.h2}
						title={'Advanced Statistics'}
						about={'Track how your links are performing across the web with our advanced statistics dashboard.'}
						tag={'h2'}></HeadText>
				</Wrapper>
				<About />
			</div>
		</section>
	)
}
