import '@/scss/style.scss'
import { Hero } from './components/hero'
import { Header } from './components/header'

export default function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
    </div>
  )
}
