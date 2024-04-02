import './App.css'
import Hero from './components/Hero'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col'>
      <Hero /> 
      <Info /> 
      <Footer />
    </div>
  )
}

export default App
