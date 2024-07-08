import styles from './Button.module.css'

export const Button = props => {

	return (
		<button
			className={`${styles.button} ${props.styles}`}
			form={props.id}>
			{props.children}
		</button>
	)
}
