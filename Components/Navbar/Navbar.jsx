import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
window.scrollY>50?setSticky(true):setSticky(false);
    })
  },[]);

   const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  } 
  return (
    <nav className={`container ${sticky?'dark-nav':''} `} > 
        <img src={logo} alt='' className='logo' />
        <ul className={mobileMenu?'':'mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>HOME</Link></li>
            <li><Link to='program' smooth={true} offset={-250} duration={500}>PROGRAME</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>ABOUT US</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>CAMPUS</Link></li>
            <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>TESTIMONIAL</Link></li>
            <li><button className='btn dark-nav'><Link to='contact' smooth={true} offset={-260} duration={500}>CONTACT  US</Link></button></li>
        </ul>
        <img src={menu} alt='' className='menu' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
