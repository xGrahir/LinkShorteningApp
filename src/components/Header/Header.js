import styles from './Header.module.css'
import { Button } from '../../utils/Button'
import { HeadText } from '../helpers/HeadText'
import { Wrapper } from '../../utils/Wrapper'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.image}></div>
			<Wrapper styles={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles['text-container']}>
						<HeadText
							h1styles={styles.h1}
							styles={styles.text}
							pstyles={styles.paragraph}
							title={'More than just shorter links'}
							about={"Build your brand's recognition and get detailed insights on how your links are performing."}
							tag={'h1'}></HeadText>
						<div className={styles.btn}>
							<Button styles={styles.button}>Get Started</Button>
						</div>
					</div>
					<div className={styles.half}></div>
				</div>
			</Wrapper>
		</header>
	)
}
