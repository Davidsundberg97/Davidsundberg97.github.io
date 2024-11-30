import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'

const Hero = () => {

  return (
    <section className="min-h-screen border-2 w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am David <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray-500">Software developer</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/*<Leva />*/}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <perspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              position={[0.0, -0.3, 2.7]}
              rotation={[0.2, 0.0, 0.0]}
              scale={[0.15, 0.15, 0.15]}
            />
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero