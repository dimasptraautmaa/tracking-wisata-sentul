import React from 'react'


import "./detailPaket.css"
import { useLocation, useNavigate } from 'react-router-dom'

const DetailPaket = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const i = location.state;

    const chat = `https://wa.me/6281218445952?text=${i.msg}`

    return (
        <div className='detail-paket'>
            <div className='detail-paket-container'>
                <div id='title' style={{ fontFamily: 'var(--quicksand)', color: i.color, fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>{i.title.split("",(4))} {i.title.split(" ")[1]}</div>
                    <div id='type' style={{ fontFamily: 'var(--poppins)', color: 'var(--primary)', fontSize: '1.1rem', textAlign: 'center', transform: 'translateY(-5px)' }}>{i.type ? `( ${i.type} )` : ''}</div>
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
                            {i.rute.map((r, rkey) => {
                                return(
                                    <div className='flex-gap-inline' key={rkey}>
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
                                {i.wisata[1].map((s, skey) => {
                                    return(
                                        <div className='flex-gap-inline' key={skey}>
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
                                {i.wisata[2].map((d, dkey) => {
                                    return(
                                        <div className='flex-gap-inline' key={dkey}>
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
                                {i.wisata[3].map((t, tkey) => {
                                    return(
                                        <div className='flex-gap-inline' key={tkey}>
                                            <div>•</div>
                                            <div>{t}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            </>
                        }
                        {i.step && i.step.map((st, stkey) => {
                            return(
                                <>
                                <div key={stkey} id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                                    <div className='circle glass'><div className='fas fa-location-dot fa-sm'></div></div>
                                    {st.title}
                                </div>
                                <div id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                                    {(st.destination.map((de, dekey) => {
                                        return(
                                            <div className='flex-gap-inline' key={dekey}>
                                                <div>•</div>
                                                <div>{de}</div>
                                            </div>
                                        )
                                    }))}
                                </div>
                                </>
                            )
                        })}
                        <div id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', color: i.color, gap: '10px', alignItems: 'center', fontWeight: '600', marginTop: '10px' }}>
                            <div className='circle glass'><div className='fas fa-box-open fa-sm'></div></div>
                            Fasilitas yang kamu dapat :
                        </div>
                        <div id={!i.wisata ? "secondShow" : "thirdShow"} style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '40px', marginTop: '5px' }}>
                            {i.pack.map((p, pkey) => {
                                return(
                                    <div className='flex-gap-inline' key={pkey}>
                                        <div>•</div>
                                        <div>{p}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div id={!i.wisata ? "thirdShow" : "lastShow"} className='swiper-kotak-harga'>
                        <div>Mulai dari</div>
                        <div>{i.harga}</div>
                        <div>(Minimal 3 orang)</div>
                    </div>
                    <div id={!i.wisata ? "thirdShow" : "lastShow"} style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px', width: '100%' }}>
                        <div className='button' style={{ width: '170px', fontSize: '0.85rem', backgroundColor: 'var(--primary)', color: 'white' }} onClick={() => navigate(-1)}>Paket lainnya</div>
                        <div className='button' style={{ width: '170px', fontSize: '0.85rem', backgroundColor: i.color, gap: '5px' }} onClick={() => window.open(chat)}>
                            <div className='fab fa-whatsapp fa-xl'/>
                            Pesan paket
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DetailPaket