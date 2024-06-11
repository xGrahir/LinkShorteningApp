import styles from './Wrapper.module.css'

export const Wrapper = props => {
	return <div className={`${styles.wrapper} ${props.styles ? props.styles : ''}`}>{props.children}</div>
}
