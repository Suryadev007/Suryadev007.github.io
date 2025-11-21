import React from 'react'
import logoImg from '../assets/images/logo-img.webp';
import logoPng from '../assets/images/logo512.png';

function Header() {
  return (
    <div className='header' id='header'>
        <div className='row'>

            <div className='logo'>
                {/* <img src={logoImg} alt='Logo' /> */}
                {/* <img src={logoPng} alt='Logo' /> */}
                <h1>Surya Dev</h1>
            </div>

            <div className='menu'>
                <ul className='menu-link'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#personal-info'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#completed-projects'>projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>

            <div className='cta-mnu'>
                <a href="mailto:suryadev7056@gmail.com" ><button className='btn-signin'>Lets Talk !</button></a>
            </div>

            <div className='mob-menu-icon'>
                <i className="fa-solid fa-bars" id="mob-menu-icn" ></i>
                <i className="fa fa-times" aria-hidden="true" id="mob-menu-icn-can"></i>

                <ul className='mob-menu-link' id='mob-menu-link'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#personal-info'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#completed-projects'>projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Header