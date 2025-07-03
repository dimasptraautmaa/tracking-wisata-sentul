import React from 'react'
import trekData from './trekData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { easyData, extremeData, mediumData } from '../../../data/paketData';

import 'swiper/css';
import './paket.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Paket = () => {

    const [ level, setLevel ] = React.useState('easy');
    const [ width, setWidth ] = React.useState(window.innerWidth);

    const sliceText = (text) => {
        return text.substring(0,153) + '...';
    }

    return (
        <>
            <div id='paket' className='page'>
                <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': 'var(--green)',
                }}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
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
                            <div className='swiper-konten'>
                                {i.type &&
                                <div className='glass' style={{ width: 'max-content', padding: '5px 30px', fontFamily: 'var(--quicksand)', fontWeight: 'bold', color: i.color, fontSize: '1.1rem', borderRadius: '50px', boxSizing: 'border-box', transform: 'translateY(5px)' }}>{i.type}</div>
                                }
                                <div className='swiper-konten-title'><span style={{color: i.color}}>{i.title}</span></div>
                                <div className='swiper-konten-desc'>{i.desc}</div>
                            </div>
                            <div className='swiper-kotak glass'>
                                <div className='swiper-kotak-container'>
                                    <div style={{ fontFamily: 'var(--quicksand)', color: i.color, fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>{i.title.split("",(4))} {i.title.split(" ")[1]}</div>
                                    <div style={{ fontFamily: 'var(--poppins)', color: 'white', fontSize: '1.1rem', textAlign: 'center', transform: 'translateY(-5px)' }}>{i.type ? `( ${i.type} )` : ''}</div>
                                    <div className='swiper-kotak-jarak'>
                                        <div style={{display: 'flex', gap: '7px', alignItems: 'center'}}>
                                            <span style={{color: i.color}}><div className='fas fa-map-location-dot fa-sm'/></span>
                                            <div>{i.jarak}</div>
                                        </div>
                                        <div>|</div>
                                        <div style={{display: 'flex', gap: '7px', alignItems: 'center'}}>
                                            <span style={{color: i.color}}><div className='fas fa-clock fa-sm'/></span>
                                            <div>{i.waktu}</div>
                                        </div>
                                    </div>
                                    <div className='swiper-kotak-rute'>
                                        <div style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                            <div className='circle glass'><div className='fas fa-location-dot fa-sm'/></div>
                                            Rute yang bakal kamu lewatin :
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                            {i.rute.map((r, key) => {
                                                return(
                                                    <div className='flex-gap-inline' key={key}>
                                                        <div>•</div>
                                                        <div>{r}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {i.wisata && i.wisata[1] && 
                                            <>
                                            <div style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                                <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                                Zona wisata ke - 1
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                                {i.wisata[1].map((s, key) => {
                                                    return(
                                                        <div className='flex-gap-inline' key={key}>
                                                            <div>•</div>
                                                            <div>{s}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            </>
                                        }
                                        {i.wisata && i.wisata[2] && 
                                            <>
                                            <div style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                                <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                                Zona wisata ke - 2
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                                {i.wisata[2].map((d, key) => {
                                                    return(
                                                        <div className='flex-gap-inline' key={key}>
                                                            <div>•</div>
                                                            <div>{d}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            </>
                                        }
                                        {i.wisata && i.wisata[3] && 
                                            <>
                                            <div style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                                <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                                Zona wisata ke - 3
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                                {i.wisata[3].map((t, key) => {
                                                    return(
                                                        <div className='flex-gap-inline' key={key}>
                                                            <div>•</div>
                                                            <div>{t}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            </>
                                        }
                                        <div style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                            <div className='circle glass'><div className='fas fa-box-open fa-sm'></div></div>
                                            Fasilitas yang kamu dapat :
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                            {i.pack.map((p, key) => {
                                                return(
                                                    <div className='flex-gap-inline' key={key}>
                                                        <div>•</div>
                                                        <div>{p}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='swiper-kotak-harga'>
                                        <div>Mulai dari</div>
                                        <div>Rp 150.000</div>
                                    </div>
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
                        <div onClick={() => setLevel('easy')} style={{ fontFamily: 'var(--quicksand)', fontSize: '1rem', color: level == 'easy' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Easy</div>
                        <div onClick={() => setLevel('medium')} style={{ fontFamily: 'var(--quicksand)', fontSize: '1rem', color: level == 'medium' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Medium</div>
                        <div onClick={() => setLevel('extreme')} style={{ fontFamily: 'var(--quicksand)', fontSize: '1rem', color: level == 'extreme' ? 'red' : 'red', fontWeight: 'bold', cursor: 'pointer' }}>Extreme</div>
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