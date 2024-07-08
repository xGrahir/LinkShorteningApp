import { Wrapper } from '../../utils/Wrapper'
import styles from './Footer.module.css'
import { Links } from './Links'
import { Socials } from './Socials'

const LINKS = [
	{ l1: 'Features', l2: 'Link Shortening', l3: 'Branded Links', l4: 'Analytics' },
	{ l1: 'Resources', l2: 'Blog', l3: 'Developers', l4: 'Support' },
	{ l1: 'Company', l2: 'About', l3: 'Our Team', l4: 'Carrers', l5: 'Contact' },
]

const SOCIALS = [{ s: 'fb' }, { s: 'x' }, { s: 'p' }, { s: 'i' }]

export const Footer = () => {
	const links = LINKS.map(link => <Links links={link} key={link.l1} />)
	const socials = SOCIALS.map(social => <Socials social={social.s} key={social.s} />)

	return (
		<div className={styles['section-background']}>
			<Wrapper styles={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles['logo-container']}>
						<div className={styles.logo}></div>
					</div>
					<div className={styles['links-container']}>
						<div className={styles.links}>{links}</div>
						<div className={`${styles.links} ${styles.socials}`}>{socials}</div>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}
