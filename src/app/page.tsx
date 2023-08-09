import '@/scss/style.scss';
import { Hero } from './components/hero';
import { Header } from './components/header';
import { Carousel } from './components/carousel';
import { Differentials } from './components/differentials';
import { Plain } from './components/plain';
import { Maps } from './components/maps';
import { Footer } from './components/footer';
import { Entry } from './components/entry';




export default function Home() {
  return (
    <div>
        <Header/>
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
