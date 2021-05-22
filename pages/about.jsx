import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'

const About = () => {
	return(
		<>
			<Head>
        <title>Aaron Wedd - About Me</title>
        <meta name="description" content="Welcome to my portfolio, here are some of my accomplishments and certifications" />
        <link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Typography variant="h3">What I've done and what I'm good at</Typography>
			</main>
		</>
	)
}

export default About
