import React from 'react';
import axios from 'axios';
import Loader from '../../../utils/loader';
import swalert from '../../../utils/swalert';
import { useNavigate } from 'react-router-dom';
import "./hero.css";

const Hero = () => {

    const navigate = useNavigate();
    const endpoint = import.meta.env.VITE_API
    const [ loading, setLoading ] = React.useState(false);

    if (loading) return <Loader text={'scraping content'}/>

    return (
        <div className='hero'>
            <div className='hero-mark' style={{width: 'max-content', padding: '8px 20px', color: 'var(--text)', borderRadius: '30px', border: '1px solid var(--text)', font: '0.85rem sans-serif', marginBottom: '10px'}}>Best Trekking Provider</div>
            <div className='hero-wrapper'>
                <h1 className='hero-title'><span>Trekking Sentul</span> 44</h1>
                <h3 className='hero-desc'>Trekking Wisata Sentul | Paket Trekking Sentul | Jasa Trekking Sentul | Trekking Sentul Murah Terbaik</h3>
            </div>
            <div className='hero-button' style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', position: 'relative', width: '100%'}}>
                <a href='#paket' className='button' style={{ width: '170px', maxWidth: '50%', backgroundColor: 'var(--prime)', color: 'var(--green)' }}>
                    <div className='fa-solid fa-play fa-md'/>
                    Lihat Paket
                </a>
                <div className='button' style={{ fontFamily: 'sans-serif', maxWidth: '50%', fontWeight: '600', width: '170px' }}>
                    Pesan Sekarang
                </div>
            </div>
        </div>
    )
}

export default Hero;