import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, Typography, Button, ButtonGroup} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Footer = () => {
	const classes =useStyles();
	return(
		<div className={classes.root}>
		<ButtonGroup variant="text" size='large'>
			<Button href="https://github.com/awedd95" startIcon={<FontAwesomeIcon icon={faGithub}/>}><Typography variant="body1" display="block">Github</Typography></Button>
			<Button href="https://www.linkedin.com/in/aaron-wedd/" startIcon={<FontAwesomeIcon icon={faLinkedin}/>}><Typography variant="body1" display="block">LinkedIn</Typography></Button>
			<Button href="mailto:aaron@aaronw.xyz?subject=Portfolio Site Enquiry" startIcon={<FontAwesomeIcon icon={faEnvelopeOpen}/>}><Typography variant="body1">Email</Typography></Button>
		</ButtonGroup>
		</div>
	)
}

export default Footer
