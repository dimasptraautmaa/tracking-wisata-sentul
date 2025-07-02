import React from 'react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimoni = () => {
    return (
        <div className='page'>
            <h1 style={{ fontFamily: 'var(--quicksand)', fontSize: '2rem', textAlign: 'center', color: 'red' }}>TESTIMONI</h1>
            <div style={{ fontFamily: 'var(--quicksand)', color: '#cccccce0', textAlign: 'center', fontSize: '1.1rem' }}>dari client kami</div>
            <Swiper
                effect={'coverflow'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                loop={true}
                speed={700}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}          
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{ height: '300px', '--swiper-pagination-color': 'var(--green)',paddingBottom: '50px', marginTop: '30px' }}
            >
                {Array.from({ length: 10 }).map((_, i) => {
                    return(
                    <SwiperSlide 
                    key={i} 
                    className='glass' 
                    style={{
                        borderRadius: '7px', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        width: '230px', 
                        height: '300px', 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '15px 10px',
                        boxSizing: 'border-box'
                    }}
                    >
                        <div style={{ width: '50px', height: '50px', position: 'relative', backgroundColor: 'white', borderRadius: '50%', border: '1.5px solid var()' }}>
                            <img src="https://i.pravatar.cc/300" style={{ borderRadius: '50%' }} alt="" />
                        </div>
                        <div style={{ fontSize: '1.1rem', color: 'var(--green)', fontFamily: 'var(--quicksand)', fontWeight: '600' }}>John Doe</div>
                        <div style={{ fontSize: '0.9rem', color: '#cccccce0', fontFamily: 'var(--quicksand)', textAlign: 'center', marginTop: '10px' }}>Trekking Sentul menggunakan Trekking Wisata Sentul adalah hal yang menakjubkan, Crew-nya profesional dan dapat diandalkan.</div>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimoni;