import styles from './Field.module.css'
import { HeadText } from './HeadText'

export const Field = props => {
	return (
		<>
			<div className={`${styles.field} ${styles[props.id]}`}>
				<div className={styles['icon-container']}>
					<div className={`${styles['icon-background']}`}>
						<div className={`${styles[props.icon]} ${styles.icon}`}></div>
					</div>
				</div>
				<HeadText
					tag={'h3'}
					h3styles={styles.h3}
					title={props.title}
					about={props.about}
					styles={styles['field-text']}
					pstyles={styles.paragraph}
				/>
			</div>
			{props.icon !== 'customizable' && (
				<div className={styles['bar-container']}>
					<div className={styles.bar}></div>
				</div>
			)}
		</>
	)
}
