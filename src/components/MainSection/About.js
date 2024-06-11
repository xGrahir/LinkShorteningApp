import styles from './About.module.css'
import { Field } from '../helpers/Field'
import { Wrapper } from '../../utils/Wrapper'

const abouts = [
	{
		title: 'Brand Recognition',
		about:
			"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil cofifence in your content.",
		icon: 'recognition',
		id: 'brand'
	},
	{
		title: 'Detailed Records',
		about:
			'Gain insights into who is clickings your links. Knowing when and where people engage with your content helps inform better decisions.',
		icon: 'records',
		id: 'detailed'
	},
	{
		title: 'Fully Customizable',
		about:
			'Improve brand awareness and content discoverability through customizable links, supercharhing audience engagement.',
		icon: 'customizable',
		id: 'fully'
	},
]

export const About = () => {
	const infos = abouts.map(el => <Field key={el.id} title={el.title} about={el.about} icon={el.icon} id={el.id} />)

	return (
		<div className={styles.about}>
			<Wrapper>
				<div className={styles.wrapper}>{infos}</div>
			</Wrapper>
		</div>
	)
}
