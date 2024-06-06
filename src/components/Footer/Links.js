import styles from './Links.module.css'

export const Links = props => {

    let l5

	const { l1, l2, l3, l4 } = props.links

    if(props.links.l5) {
        l5 = props.links.l5
    } 

	return (
		<div className={styles['links']}>
			<p className={styles['bold-link']}>
				<a href={`#${l1}`}>{l1}</a>
			</p>
			<div className={styles['normal-links']}>
				<a href={`#${l2}`}>{l2}</a>
				<a href={`#${l3}`}>{l3}</a>
				<a href={`#${l4}`}>{l4}</a>
		        {l5 && <a href={`#${l5}`}>{l5}</a>}
			</div>
		</div>
	)
}
