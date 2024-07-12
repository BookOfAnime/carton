import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Laptop from './Laptop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas camera={{ fov: 50,
      near:0.1, far:2000,

      }}>
        <Laptop />
      </Canvas>
    </>
  )
}

export default App
