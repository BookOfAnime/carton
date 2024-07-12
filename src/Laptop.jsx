import { Environment, Html, PresentationControls, useGLTF } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import CartoonNetworkWebsite from './CartoonNetworkWebsite'
import { CN } from './CN'

const Laptop = () => {
    const group = useRef()
    const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")
    const [isFullScreen, setIsFullScreen] = useState(false)

    const handleToggleFullScreen = (e) => {
        e.stopPropagation()
        setIsFullScreen(!isFullScreen)
    }

    if (isFullScreen) {
        return (
            <Html fullscreen>
                <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
                    <CartoonNetworkWebsite />
                    <button 
                        onClick={handleToggleFullScreen}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            padding: '10px',
                            backgroundColor: '#ff4500',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Exit Site
                    </button>
                </div>
            </Html>
        )
    }

    return (
        <>
            <Environment preset='warehouse'/>
            <PresentationControls 
                global 
                rotation={[0.13, 0.1, 0]} 
                polar={[-0.2, 0.1]} 
                azimuth={[-1, 0.75]} 
                config={{ mass: 2, tension: 400 }} 
                snap={{ mass: 4, tension: 400 }}
            >
                <group ref={group} dispose={null} position-y={-1.2} scale={0.75}>
                    <primitive object={scene} />
                    
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                    >
                        <div 
                            style={{ 
                                width: '1024px', 
                                height: '670px', 
                                overflow: 'hidden', 
                                position: 'relative' 
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <CartoonNetworkWebsite />
                        </div>
                    </Html>
                    <CN position={[0, 3.5, 0]} scale-y={.5} />
                </group>
            </PresentationControls>
            
            {/* Responsive Enter Site Button */}
            <Html style={{
                position: 'absolute',
                bottom: '20%',
                left: '0',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none',
            }}>
                <button 
                    onClick={handleToggleFullScreen}
                    style={{
                        padding: '15px 30px',
                        fontSize: 'max(16px, min(5vw, 24px))',
                        backgroundColor: '#ff4500',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        pointerEvents: 'auto',
                        position:'absolute',
                        top:"30vh"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#ff6347'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4500'}
                >
                    Enter Site
                </button>
            </Html>
        </>
    )
}

export default Laptop