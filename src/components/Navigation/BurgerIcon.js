import styles from './BurgerIcon.module.css'

export const BurgerIcon = ({showModal}) => {

	const showModalHandler = () => {
		showModal()
	}

	return (
		<>
			<div className={styles.burger} onClick={showModalHandler}>
				<div className={styles['burger-icon']}></div>
			</div>
		</>
	)
}
