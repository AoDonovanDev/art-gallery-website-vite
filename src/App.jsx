import './App.css'
import Hero from './components/Hero'
import Info from './components/Info'
import Footer from './components/Footer'
import MobileHero from './components/MobileHero'
import MobileInfo from './components/MobileInfo'
import { useState } from 'react'

function App() {

  const [screenWidth, setScreenwWidth] = useState(window.outerWidth)

  window.addEventListener('resize', function(e){
    console.log(e)
    setScreenwWidth(window.outerWidth)
    console.log(screenWidth)
  })

  return (
    <div className='flex flex-col w-full'>
      {screenWidth > 600 ? 
      <div className='desktopLayout'>
        <Hero /> 
        <Info /> 
      </div> :
      <div className='mobileLayout'>
        <MobileHero />
        <MobileInfo />
      </div>}
      <Footer screenWidth={screenWidth}/>
    </div>
  )
}

export default App
