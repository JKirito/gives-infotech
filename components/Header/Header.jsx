import classes from './Header.module.css'
const Header = () => {
    return <header>
        <nav className={classes.navBar}>
            <h3>Gives Infotech</h3>
            <div className={classes.linksection}>
                <ul className={classes.navlinks}>
                    <li><a href='#'>Work</a></li>
                    <li><a href='#'>Training</a></li>
                    <li><a href='#'>Blogs</a></li>
                </ul>
                <div className={classes.hamburger}>
                    <div className={classes.hamwrapper}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;