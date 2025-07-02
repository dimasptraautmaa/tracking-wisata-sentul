import React from 'react'
import Hero from '../components/hero/hero'
import Navbar from '../components/navbar/navbar'
import Navmobile from '../components/navbar/navmobile'
import SwiperCard from "../components/swiper/swiper"
import alam1 from "/img/alam1.jpg"
import "./landingpage.css"
import Paket from '../components/paket/paket'
import Testimoni from '../components/testimoni/testimoni'

const LandingPage = () => {
    const homeRef = React.useRef();

    React.useEffect(() => {
        if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    }, []);
    return (
        <>
            <div ref={homeRef} className='single-page'>
                <div className='wrapper-background'>
                    <div className='landing-background' style={{  
                        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.98)), url(${alam1})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}></div>
                </div>
                <Navmobile/>
                <Navbar/>
                <Hero/>
            </div>
           <SwiperCard/>
           <Paket/>
           <Testimoni/>
        </>
    )
}

export default LandingPage;