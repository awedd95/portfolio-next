import {AppBar, Tabs, Tab} from '@material-ui/core';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


const TabLink = React.forwardRef(({ className, href, hrefAs, children, prefetch }, ref) => (
  <Link href={href} as={hrefAs} prefetch>
    <a className={className}>
      {children}
    </a>
  </Link>
)
)

const Navbar = () => {
	const router = useRouter()
	const value = router.pathname;
	return(
		<AppBar position="static">
        <Tabs
					value={value}>
            <Tab label="Home" to='/' component={TabLink} href="/" value='/'/>
            <Tab label="About" to='/about' component={TabLink} href="/about" value='/about'/>
            <Tab label="Projects" to='/projects' component={TabLink} href="/projects" value='/projects'/>
            <Tab label="Blog" to='/blog' component={TabLink} href="/blog" value='/blog'/>
        </Tabs>
        </AppBar>
	)
}

export default Navbar
