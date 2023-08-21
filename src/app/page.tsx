'use client';
import '@/scss/style.scss';
import { Hero } from './components/hero';
import { Header } from './components/header';
import { Carousel } from './components/carousel';
import { Differentials } from './components/differentials';
import { Plain } from './components/plain';
import { Maps } from './components/maps';
import { Footer } from './components/footer';
import { Entry } from './components/entry';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileMenu from './components/headerMobile';




export default function Home() {

  useEffect(()=>{
    AOS.init({duration: 3000})
}, [])
  return (
    <div>
        <Header/>
        <MobileMenu/>
        <Hero/>
        <Carousel/>
        <Differentials/>
        <Plain/>
        <Entry/>
        <Maps/>
        <Footer/>
    </div>
  )
}
