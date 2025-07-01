import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { easyData, extremeData, mediumData } from '../../../data/paketData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './paket.css'

const Paket = () => {

    const [ level, setLevel ] = React.useState('easy');

    return (
        <>
            <div id='paket' className='page'>
                <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': 'var(--green)',
                }}
                speed={700}
                parallax={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                slot="container-start"
                className="parallax-bg"
                style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.98)), url('img/img1.jpeg')`, backgroundPosition: 'center', backgroundSize: 'cover'}}
                data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className='swiper-paket'>
                <div className='swiper-konten'>
                    <div className='swiper-konten-title'>TRECK <span>EASY (A)</span></div>
                    <div className='swiper-konten-desc'>Trecking Easy adalah cara yang ideal untuk memulai petualangan trecking Anda. Ini adalah pengalaman santai yang memungkinkan Anda menikmati keindahan alam sambil menjaga kenyamanan dan kesenangan.</div>
                </div>
                <div className='swiper-kotak glass'>
                    <div className='swiper-kotak-container'>
                        <div className='swiper-kotak-jarak'>Jarak <span>2-5 KM</span> | Waktu <span>2-3 Jam</span></div>
                        <div className='swiper-kotak-rute'>Pesawahan, Sungai Sangkuriang, Hutan Pinus, Kebun Singkong, Pebukutan, Kebun Sereh, Curug Lewi</div>
                    </div>
                    <div className='swiper-kotak-harga'>
                        <div>Mulai dari</div>
                        <div>Rp 150.000</div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-paket'>
                <div className='swiper-konten'>
                    <div className='swiper-konten-title'>TRECK <span>EASY (B)</span></div>
                    <div className='swiper-konten-desc'>Trecking Easy adalah cara yang ideal untuk memulai petualangan trecking Anda. Ini adalah pengalaman santai yang memungkinkan Anda menikmati keindahan alam sambil menjaga kenyamanan dan kesenangan.</div>
                </div>
                <div className='swiper-kotak glass'>
                    <div className='swiper-kotak-container'>
                        <div className='swiper-kotak-jarak'>Jarak <span>2-4 KM</span> | Waktu <span>2-3 Jam</span></div>
                        <div className='swiper-kotak-rute'>Perkampungan penduduk, pesawahan, hutan kopi, air terjun Curug baring, lewi cepet, lewi liuk, perbukitan view pegunungan, curug lewi hejo</div>
                    </div>
                    <div className='swiper-kotak-harga'>
                        <div>Mulai dari</div>
                        <div>Rp 150.000</div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-paket'>
                <div className='swiper-konten'>
                    <div className='swiper-konten-title'>TRECK <span>EASY (D)</span></div>
                    <div className='swiper-konten-desc'>Trecking Easy adalah cara yang ideal untuk memulai petualangan trecking Anda. Ini adalah pengalaman santai yang memungkinkan Anda menikmati keindahan alam sambil menjaga kenyamanan dan kesenangan.</div>
                </div>
                <div className='swiper-kotak glass'>
                    <div className='swiper-kotak-container'>
                        <div className='swiper-kotak-jarak'>Jarak <span>2-4 KM</span> | Waktu <span>2-3 Jam</span></div>
                        <div className='swiper-kotak-rute'>Perkampungan, sungai putri kencana, perkebunan kopi, curug putri kencana, hutan bambu, curug love, perbukitan, hutam kopi</div>
                    </div>
                    <div className='swiper-kotak-harga'>
                        <div>Mulai dari</div>
                        <div>Rp 150.000</div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-paket'>
                <div className='swiper-konten'>
                    <div className='swiper-konten-title'>TRECK <span>MEDIUM (C)</span></div>
                    <div className='swiper-konten-desc'>Paket Trecking Medium adalah pilihan tepat bagi para petualang yang ingin merasakan tantangan sedang dalam menjelajahi keindahan alam Sentul. Ini adalah pengalaman yang menggabungkan kegembiraan petualangan dengan tingkat kesulitan yang moderat.</div>
                </div>
                <div className='swiper-kotak glass'>
                    <div className='swiper-kotak-container'>
                        <div className='swiper-kotak-jarak'>Jarak <span>7-8 KM</span> | Waktu <span>4-5 Jam</span></div>
                        <div className='swiper-kotak-rute'>Hutan jaibon, perkebunan kopi, susur sungai, leuwi lesung, curug Ciburial, hutan kopi, curug kembar, curug hordeng, bukit</div>
                    </div>
                    <div className='swiper-kotak-harga'>
                        <div>Mulai dari</div>
                        <div>Rp 150.000</div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            </div>
            <div className='page' style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.98), var(--background))`, padding: '50px 0' }}>
                <div className='paket-card-container'>
                    <div className='paket-card-level'>
                        <div onClick={() => setLevel('easy')} style={{ fontFamily: 'var(--quicksand)', fontSize: '1rem', color: level == 'easy' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Easy</div>
                        <div onClick={() => setLevel('medium')} style={{ fontFamily: 'var(--quicksand)', fontSize: '1rem', color: level == 'medium' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Medium</div>
                        <div onClick={() => setLevel('extreme')} style={{ fontFamily: 'var(--quicksand)', fontSize: '1rem', color: level == 'extreme' ? 'white' : '#ccccccc5', fontWeight: 'bold', cursor: 'pointer' }}>Extreme</div>
                    </div>
                    {(level == 'easy') && 
                    <div className='paket-card-wrapper'>
                        {(easyData.map((i, k) => {
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
                               <div key={k} className='paket-card' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.98) ), url(${i.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
        </>
    )
}

export default Paket