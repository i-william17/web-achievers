/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll';
import { FaTiktok, FaFacebook } from 'react-icons/fa';
import home from '../assets/home.png'
import about from '../assets/information-button.png'
import pictorial from '../assets/image.png'
import contact from '../assets/mobile.png'
import menu from '../assets/burger-menu.png'
import event from '../assets/event.png'
import EventModal from './EventModal';


const Navbar = () => {
  
  const[sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{(
      window.scrollY > 70 ? setSticky(true): setSticky(false));
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }

  const [openModal, setOpenModal] = useState(false);

  return (
    <React.StrictMode>
    <nav className= {`container ${sticky? 'dark-nbar' : ''}`}>
      <img src={logo} alt=''></img>

      <ul className={mobileMenu ?'' : 'hide'}>
        <li><Link to='hero' activeClass="active"  spy={true} smooth={true} offset={0} duration={500}><button className='btn'><img className = "navbr" src={home} alt=''/>Home</button></Link></li>
        <li><Link to='about' activeClass="active"  spy={true} smooth={true} offset={-1200} duration={500}><button className='btn'><img className = "navbr" src={about} alt=''/>About</button></Link></li>
        <li><Link to='pics' activeClass="active"  spy={true} smooth={true} offset={-150} duration={500}><button className='btn'><img className = "navbr" src={pictorial} alt=''/>Pictorials</button></Link></li>
        <li><Link to='contact' activeClass="active"  spy={true} smooth={true} offset={-300} duration={500}><button className='btn'><img className = "navbr" src={contact} alt=''/>Contact us</button></Link></li>
        <li><button className='btn' onClick={() => setOpenModal(true)}><img className= "navbr" src={event} alt=''/>Upcoming Events</button></li>

            <EventModal open = {openModal} onClose = {() => setOpenModal(false)} />

        <li><a href='#fb' alt=''><FaFacebook className='facebook'/></a></li>
        <li><a href='https://www.tiktok.com/@world.achievers.o?is_from_webapp=1&sender_device=pc' alt=''><FaTiktok className='tiktok' /></a></li>
        
      </ul>
      <img className= 'menu' src={menu} alt="" onClick={toggleMenu }/>
    </nav>
    </React.StrictMode>

  )
}

export default Navbar
