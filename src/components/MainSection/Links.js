import styles from './Links.module.css'
import { useState } from 'react'

export const Links = props => {
	const [clicked, setClicked] = useState(false)

	const copyToClipboardHandler = () => {
		navigator.clipboard.writeText(props.shortened)

		setClicked(true)
	}

	return (
		<>
			<li className={styles.link}>
				<div className={styles.link__container}>
					<p className={`${styles.link__link} ${styles.link__orginal}`}>{props.orginal}</p>
					<hr className={styles.link__line}></hr>
					<p className={`${styles.link__link} ${styles.link__shortened}`}>{props.shortened}</p>
				</div>
				<div className={styles.link__controllers}>
					<button className={`${styles.link__button} ${clicked ? styles.link__clicked : ''}`} onClick={copyToClipboardHandler}>
						{clicked ? 'Copied!' : 'Copy'}
					</button>
				</div>
			</li>
		</>
	)
}
