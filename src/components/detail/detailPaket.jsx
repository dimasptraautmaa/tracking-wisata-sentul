import React from 'react'


import "./detailPaket.css"
import { useLocation } from 'react-router-dom'

const DetailPaket = () => {

    const location = useLocation();
    const i = location.state;

    return (
        <div className='detail-paket'>
            <div className='detail-paket-container glass'>
                <div id='title' style={{ fontFamily: 'var(--quicksand)', color: i.color, fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>{i.title.split("",(4))} {i.title.split(" ")[1]}</div>
                    <div id='type' style={{ fontFamily: 'var(--poppins)', color: 'white', fontSize: '1.1rem', textAlign: 'center', transform: 'translateY(-5px)' }}>{i.type ? `( ${i.type} )` : ''}</div>
                    <div id='jarak' className='swiper-kotak-jarak'>
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
                        <div id='firstShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                            <div className='circle glass'><div className='fas fa-location-dot fa-sm'/></div>
                            Rute yang bakal kamu lewatin :
                        </div>
                        <div id='firstShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
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
                            <div id='secondShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                Zona wisata ke - 1
                            </div>
                            <div id='secondShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
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
                            <div id='secondShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                Zona wisata ke - 2
                            </div>
                            <div id='secondShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
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
                            <div id='secondShow' style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                Zona wisata ke - 3
                            </div>
                            <div id='secondShow' style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
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
                        <div id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                            <div className='circle glass'><div className='fas fa-box-open fa-sm'></div></div>
                            Fasilitas yang kamu dapat :
                        </div>
                        <div id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
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
                    <div id={!i.wisata ? "thirdShow" : "lastShow"} className='swiper-kotak-harga'>
                        <div>Mulai dari</div>
                        <div>Rp 150.000/Orang</div>
                    </div>
            </div>
        </div>
    )
}

export default DetailPaket