import styles from './Socials.module.css'

export const Socials = props => {

	return <a href={props.social}><div className={`${styles[props.social]} ${styles.socials}`}></div></a>
}
