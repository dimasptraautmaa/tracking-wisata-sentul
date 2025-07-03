import React from 'react'
import trekData from './trekData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { easyData, extremeData, mediumData, semiExtremeData } from '../../../data/paketData';

import 'swiper/css';
import './paket.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

const Paket = () => {

    const navigate = useNavigate();

    const [ level, setLevel ] = React.useState('easy');
    const [ initialSlide, setInitialSlide ] = React.useState(localStorage.getItem('lastSlide') | 0);

    return (
        <>
            <div id='paket' className='page'>
                <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': 'var(--green)',
                }}
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                initialSlide={initialSlide}
                onSlideChange={(swiper) => {
                    localStorage.setItem('lastSlide', swiper.activeIndex);
                }}
                speed={700}
                parallax={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <div
                slot="container-start"
                className="parallax-bg"
                style={{ 
                    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.95)), url('img/img7.jpeg')`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover'
                }}
                data-swiper-parallax="-23%"
                ></div>
                {trekData.map((i,k) => {
                    return(
                        <SwiperSlide key={k} className='swiper-paket'>
                            <div className='swiper-konten glass'>
                                {i.type && <div className='glass' style={{ width: 'max-content', padding: '5px 30px', fontFamily: 'var(--quicksand)', fontWeight: 'bold', color: i.color, fontSize: '1.1rem', borderRadius: '50px', boxSizing: 'border-box' }}>{i.type}</div>}
                                <div className='swiper-konten-title'><span style={{color: i.color}}>{i.title}</span></div>
                                {/* <div className='swiper-konten-desc'>{sliceText(i.desc)}</div> */}
                                    <div style={{ marginTop:'20px' }} className='swiper-kotak-harga'>
                                        <div>Mulai dari</div>
                                        <div>{i.harga}</div>
                                    </div>
                                <div onClick={() => navigate('/paket/detail', { state: i })} className='button' style={{ width: '200px', backgroundColor: i.color, marginTop: '10px', gap: '5px' }}>
                                    <div className='fas fa-circle-info fa-md'></div>
                                    Detail paket
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </div>
            <div id='bestPaket' className='page' style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), var(--background), rgba(0,0,0,0.9))`, padding: '50px 0' }}>
                <div className='paket-card-container'>
                    <div className='paket-card-level'>
                        <div onClick={() => setLevel('easy')} style={{ fontFamily: 'var(--quicksand)', fontSize: '0.8rem', color: level == 'easy' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Easy</div>
                        <div onClick={() => setLevel('medium')} style={{ fontFamily: 'var(--quicksand)', fontSize: '0.8rem', color: level == 'medium' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Medium</div>
                        <div onClick={() => setLevel('semi-extreme')} style={{ fontFamily: 'var(--quicksand)', fontSize: '0.8rem', color: level == 'semi-extreme' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Semi-extreme</div>
                        <div onClick={() => setLevel('extreme')} style={{ fontFamily: 'var(--quicksand)', fontSize: '0.8rem', color: level == 'extreme' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Extreme</div>
                    </div>
                    {(level == 'easy') && 
                    <div className='paket-card-wrapper'>
                        {(easyData.map((i, k) => {
                            return(
                                <div key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.95) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <div className='paket-card-title'>
                                        <div>{i.level}</div>
                                        <div>{i.title}</div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>}
                    {(level == 'medium') && 
                    <div className='paket-card-wrapper'>
                        {(mediumData.map((i, k) => {
                            return(
                                <div key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <div className='paket-card-title'>
                                        <div>{i.level}</div>
                                        <div>{i.title}</div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>}
                    {(level == 'semi-extreme') && 
                    <div className='paket-card-wrapper'>
                        {(semiExtremeData.map((i, k) => {
                            return(
                                <div key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <div className='paket-card-title'>
                                        <div>{i.level}</div>
                                        <div>{i.title}</div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>}
                    {(level == 'extreme') && 
                    <div className='paket-card-wrapper'>
                        {(extremeData.map((i, k) => {
                            return(
                               <div key={k} className='paket-card' style={{ background: i.img ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})` : 'red', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                    <div className='paket-card-title'>
                                        <div>{i.level}</div>
                                        <div>{i.title}</div>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>}
                </div>
            </div>
            <div className='page' 
                style={{ 
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.98), rgba(0,0,0,0.45), rgba(0,0,0,0.98)), url('img/img3.jpeg')", 
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    padding: '0 20px',
                    paddingBottom: '50px',
                    flexDirection: 'column',
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <div className='box-large glass'>
                    <div style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '1.7rem', fontWeight: '600' }}><span>TREKKING SENTUL</span> 44</div>
                    <div style={{ color: '#cccccce0', fontFamily: 'var(--quicksand)', fontSize: '0.99rem', marginTop: '5px', lineHeight: '1.5' }}>
                        Ayo Jelajahi Keajaiban Alam Sentul!
                        Bergabunglah bersama kami dalam petualangan seru yang penuh keindahan alam! Rasakan sensasi menjelajahi hutan tropis yang asri, segarnya cipratan air terjun alami, dan panorama perbukitan yang memukau.
                        Di TrekkingSentul44 setiap langkah adalah cerita, setiap momen adalah kenangan tak terlupakan.
                        Siapkan dirimu alam sedang memanggil!
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'var(--quicksand)', color: 'white', fontSize: '1rem', gap: '15px', marginTop: '30px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-lg'/>
                            <div>Provider Resmi dan sudah berizin</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-lg'/>
                            <div>Berisi Tim dan Pemandu Profesional</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-lg'/>
                            <div>Asuransi & Kesehatan</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-lg'/>
                            <div>Perlengkapan & Include lengkap</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div className='fas fa-circle-check fa-lg'/>
                            <div>Jaminan Uang Kembali</div>
                        </div>
                    </div>
                </div>
                <div className='box-container'>
                    <div className='box-small glass'>
                        <div className='fas fa-map fa-lg' style={{color: 'var(--green)'}}></div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>20+</div>
                        <div style={{ fontFamily: 'var(--quicksand)', fontSize: '0.9rem', color: 'white', fontWeight: '600', textAlign: 'center' }}>Rute Spesial Kami</div>
                    </div>
                    <div className='box-small glass'>
                        <div className='fas fa-note-sticky fa-lg' style={{color: 'var(--green)'}}></div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>2500+</div>
                        <div style={{ fontFamily: 'var(--quicksand)', fontSize: '0.9rem', color: 'white', fontWeight: '600', textAlign: 'center' }}>Client trekking bersama kami</div>
                    </div>
                    <div className='box-small glass'>
                        <div className='fas fa-clock fa-lg' style={{color: 'var(--green)'}}></div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>5+</div>
                        <div style={{ fontFamily: 'var(--quicksand)', fontSize: '0.9rem', color: 'white', fontWeight: '600', textAlign: 'center' }}>Tahun Kami menjadi provider</div>
                    </div>
                    <div className='box-small glass'>
                        <div className='fas fa-person-walking fa-xl' style={{color: 'var(--green)'}}></div>
                        <div style={{ fontFamily: 'var(--poppins)', fontSize: '2.2rem', color: 'var(--green)' }}>45+</div>
                        <div style={{ fontFamily: 'var(--quicksand)', fontSize: '0.9rem', color: 'white', fontWeight: '600', textAlign: 'center' }}>Tour Guide Profesional</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paket