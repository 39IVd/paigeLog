import React from 'react'
import {Link} from 'gatsby'
import github from '../img/github-icon.svg'
import instagram from '../img/social/instagram2.svg'
import gmail from '../img/social/gmail-2.svg'
import logo from '../img/paigelog2.png'
// import logo from '../img/paigelog_logo.svg'

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: ''
        }
    }

    toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState({
            active: !this.state.active
        },
        // after state has been updated,
        () => {
            // set the class in state for the navbar accordingly
            this.state.active
                ? this.setState({navBarActiveClass: 'is-active'})
                : this.setState({navBarActiveClass: ''})
        })
    }

    render() {
        return (
            <div style={{backgroundColor:'#fcf9ae'}}>
                <nav  style={{backgroundColor:'#0c0c13', paddingBottom:'20px'}}
                    className="navbar is-transparent"
                    role="navigation"
                    aria-label="main-navigation">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item" title="Logo">
                                <img
                                    src={logo}
                                    className="Logo"
                                    // width='200px' 
                                    // height='auto' 
                                    // resize='both'
                                    style={{
                                        marginTop:'30px',
                                        marginLeft:'700px',
                                        display: 'block',
                                        // width: '150px',
                                        height:'auto'
                                        // margin : '0px auto'
                                        // alignItems:'center',
                                        // resize:'both',
                                        // float:'center',
                                        // width:'150px',
                                        // height:'auto',
                                    }}/>
                            </Link>
                            {/* Hamburger menu */}
                            <div
                                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                                data-target="navMenu"
                                onClick={() => this.toggleHamburger()}></div>
                        </div>
                    </nav>
                    <nav>
                    <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}
                    style={{
                      marginLeft:'20px', marginRight:'20px'
                  }}>
                        <div className="navbar-start has-text-centered"
                      >
                            <Link className="navbar-item" to="/about">
                                <span className="menu-text">ABOUT ME</span>
                            </Link> 
                            <Link className="navbar-item" to="/blog">
                                <span className="menu-text">IT</span>
                            </Link>
                            <Link className="navbar-item" to="/blog">
                            <span className="menu-text">LIFE</span>
                            </Link>
                            <Link className="navbar-item" to="/blog">
                            <span className="menu-text">PROJECTS</span>
                            </Link>
                            <Link className="navbar-item" to="/blog">
                            <span className="menu-text">MUSIC</span>
                            </Link>
                        </div>
                        <div className="navbar-end has-text-centered">
                            <a
                                className="navbar-item"
                                href="https://github.com/39IVd"
                                target="_blank"
                                rel="noopener noreferrer">
                                <span className="icon">
                                    <img src={github} alt="Github"/>
                                </span>
                            </a>
                            <a
                                className="navbar-item"
                                href="mailto:tmdwn4174@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                <span className="icon">
                                    <img src={gmail} alt="gmail"/>
                                </span>
                            </a>
                            <a className="navbar-item" href="" target="_blank" rel="noopener noreferrer">
                                <span className="icon">
                                    <img src={instagram} alt="instagram"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </nav>

            </div>

        )
    }
}

export default Navbar
