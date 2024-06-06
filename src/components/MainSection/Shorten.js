import styles from './Shorten.module.css'
import { Button } from '../../utils/Button'

export const Shorten = () => {
	const submitHandler = e => {
		e.preventDefault()
		console.log('xd')
	}

	return (
		<div className={styles['form-background']}>
			<div className={styles['bg-image']}>
				<div className={styles['form-wrap']}>
					<form action='' onSubmit={submitHandler} className={styles.form}>
						<input type='url' placeholder='Shorten a link here...' />
						<Button styles={styles.button}>Shorten It!</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
