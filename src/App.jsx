import viteLogo from '/vite.svg'
import FeaturesContainer from './components/FeaturesContainer'
import WelcomeTitle from './components/WelcomeTitle'
import './App.css'

function App() {
  return (
    <>
      <div className='layout'>
        <div className='VPHero'>
          <div className='container'>
            <WelcomeTitle />
            <div className='image-container'>
              {/* <div className='shadowbox shadowbox2'> */}
              <a href='https://vitejs.dev' target='_blank'>
                <img src={viteLogo} className='logo' alt='Vite logo' />
              </a>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className='VPFeatures'>
          <FeaturesContainer />
        </div>
      </div>
    </>
  )
}

export default App
