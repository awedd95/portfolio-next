import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'

const Projects = () =>{
	return(
		<div className={styles.container}>
			<Head>
        <title>Aaron Wedd - About Me</title>
        <meta name="description" content="Welcome to my portfolio, here are some of my accomplishments and certifications" />
        <link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Typography variant="h3">Here are some cool things I've worked on</Typography>
			</main>
		</div>
	)
}

export default Projects
