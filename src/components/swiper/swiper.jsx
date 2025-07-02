import React from 'react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

const SwiperCard = () => {
    return (
        <div className='page' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.98), var(--background)` }}>
            <Swiper
                effect={'coverflow'}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                speed={700}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{ height: '300px', '--swiper-pagination-color': 'var(--green)', }}
            >
                {Array.from({ length: 10 }).map((_, i) => {
                    return(
                    <SwiperSlide key={i} style={{borderRadius: '7px', backgroundPosition: 'center', width: '300px', height: '230px', backgroundSize: 'cover', }}>
                        <img src={`img/img${i + 3}.jpeg`} alt="" />
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default SwiperCard;