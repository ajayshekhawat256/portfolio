import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='navBar'>
            {/* <MenuIcon/> */}
            <a className='title' href="/">Ajay</a>
            <div className='menu'>
                {
                    menuOpen ? (
                        <CloseIcon style={{ color: 'red' }} className="menuBtn" onClick={() => setMenuOpen(!menuOpen)} />
                    ) : (
                            <MenuIcon style={{ color: 'white' }} className='menuBtn' onClick={() => setMenuOpen(!menuOpen)} />
                    )
                }
                {/* <img className='menuBtn' src={menuOpen ? <CloseIcon /> : < MenuRoundedIcon color="primary" /> } onClick={()=>setMenuOpen(!menuOpen)} alt="" /> */}
                <ul className={`${'menuItems'} ${menuOpen ? 'menuOpen' : ''}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar