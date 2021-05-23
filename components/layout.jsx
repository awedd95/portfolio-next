import Navbar from './navbar'
import Footer from './footer'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

const Layout = ( {children} ) => {
	return(
		<>
    <ThemeProvider theme={theme}>
		<Navbar />
		{ children }
		<Footer />
    </ThemeProvider>
		</>
	);
}

export default Layout
