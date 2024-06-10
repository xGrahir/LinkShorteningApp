import styles from './Header.module.css'
import { Button } from '../../utils/Button'
import { HeadText } from '../helpers/HeadText'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.image}></div>
			<div className={styles.text}>
				<HeadText
					styles={styles.text}
					pstyles={styles.paragraph}
					h1styles = {styles.h1}
					title={'More than just shorter links'}
					about={"Build your brand's recognition and get detailed insights on how your links are performing."}
					tag={'h1'}>
					<Button styles={styles.button}>Get Started</Button>
				</HeadText>
			</div>
		</header>
	)
}
