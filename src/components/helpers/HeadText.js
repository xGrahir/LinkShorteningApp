import styles from './HeadText.module.css'

export const HeadText = (props) => {
	return (
		<div className={`${styles.text} ${props.styles}`}>
			{props.tag === 'h1' && <h1 className={styles.title}>{props.title}</h1>}
            {props.tag === 'h2' && <h2 className={`${styles.title} ${styles.h2}`}>{props.title}</h2>}
            {props.tag === 'h3' && <h3 className={`${styles.title} ${styles.h3}`}>{props.title}</h3>}
			<p className={`${styles.about} ${props.pstyles}`}>
				{props.about}
			</p>
            {props.children}
		</div>
	)
}
