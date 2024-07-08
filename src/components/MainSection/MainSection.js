import styles from './MainSection.module.css'
import { Shorten } from './Shorten'
import { HeadText } from '../helpers/HeadText'
import { About } from './About'
import { Links } from './Links'
import { Wrapper } from '../../utils/Wrapper'
import { useState } from 'react'

export const MainSection = () => {
	const [links, setLinks] = useState([])
	const [err, setErr] = useState('')
	let contentLinks

	const fetchHandler = async url => {
		const response = await fetch('http://localhost:5000/shorten', {
			method: 'POST',
			body: JSON.stringify({ url: url }),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			setErr(response.status)
		} else {
			setErr('')
		}

		const data = await response.json()

		if (data.error) {
			setErr(data.error)
		} else {
			const urls = links.map(link => link.orginal === url)

			if (urls.includes(true)) {
				setErr('This link is already shortened')
			} else {
				setLinks(prev => {
					return [...prev, { result: data.result_url, orginal: url }]
				})
			}
		}
	}

	if (links) {
		contentLinks = links.map(link => <Links key={link.orginal} orginal={link.orginal} shortened={link.result} />)
	}

	return (
		<section className={styles['section-background']}>
			<div className={styles.wrapper}>
				<Wrapper>
					<Shorten downloadLink={fetchHandler} err={err} />
					{links && <ul className={styles.links}>{contentLinks}</ul>}
					<HeadText
						styles={styles.text}
						pstyles={styles.paragraph}
						h2styles={styles.h2}
						title={'Advanced Statistics'}
						about={'Track how your links are performing across the web with our advanced statistics dashboard.'}
						tag={'h2'}></HeadText>
				</Wrapper>
				<About />
			</div>
		</section>
	)
}
