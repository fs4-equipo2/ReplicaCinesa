import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SwiperMain } from './components/SliderMain/SwiperMain'
import { swiperMainData } from './components/SliderMain/SwiperMainData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SwiperMain swiperInfo={swiperMainData} />
    </>
  )
}

export default App
