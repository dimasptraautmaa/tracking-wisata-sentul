import React from 'react';
import "./navbar.css";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleMobile = () => {
        const navmboile = document.querySelector('.navmobile');
        navmboile.classList.add('show')
    }

    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='nav-logo'>
                    {/* <img src="/img/logo.ico" width={28} alt="stresslo logo" /> */}
                    <img src="/img/logo.png" width={28} alt="" />
                    <h1 style={{color: 'white', fontWeight: '500', fontSize: '1rem'}}>Trekkingsentul44</h1>
                </div>
                <div className='nav-menu'>
                    <div className='nav-content'>
                        <a href="#paket" className='nav-content-text'>Paket Trecking</a>
                        <a href="#paket" className='nav-content-text'>Tentang Kami</a>
                    </div>
                    <div className='nav-user'>
                        <div className='button' onClick={() => navigate('/register')} style={{height: '35px', width: '130px', backgroundColor: 'unset', color: 'var(--green)'}}>
                            Instagram
                        </div>
                        <div className='button' onClick={() => navigate('/login')} style={{gap: '5px', fontSize: '0.9rem', height: '35px', width: '140px', backgroundColor: 'var(--green)', color: 'var(--primary)'}}>
                            <div className='fa-brands fa-whatsapp fa-xl'></div>
                            whatsapp
                        </div>
                    </div>
                    <div className='nav-user-mobile'>
                        <div onClick={() => handleMobile()} className='fa-solid fa-bars fa-xl'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;