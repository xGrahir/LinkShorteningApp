import styles from './Shorten.module.css'
import { Button } from '../../utils/Button'
import { useRef, useState } from 'react'

export const Shorten = props => {
	const urlRef = useRef('')
	const [err, setErr] = useState('')

	const submitHandler = e => {
		e.preventDefault()

		const url = urlRef.current.value

		if (!url) {
			setErr('Please add a link')
			return
		}

		setErr(false)
		props.downloadLink(urlRef.current.value)
	}

	return (
		<div className={styles['form-background']}>
			<div className={styles['bg-image']}>
				<div className={styles['form-wrap']}>
					<form
						action=''
						onSubmit={submitHandler}
						className={`${styles.form} ${(err || props.err) && styles['form-err']}`}
						id='shorten-form'>
						<input type='url' placeholder='Shorten a link here...' ref={urlRef} />
						{(err || props.err) && (
							<div className={styles['error-container']}>
								<p>{err || props.err}</p>
							</div>
						)}
						<Button styles={styles.button} id='shorten-form'>
							Shorten It!
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
