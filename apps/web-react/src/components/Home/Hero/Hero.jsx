

import React, { useRef, useState, useEffect } from 'react'

function Hero() {
  const videoRef = useRef(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    function onError(e) {
      console.error('Hero video failed to load', e)
      setVideoError(true)
    }

    function onCanPlay() {
      console.info('Hero video can play')
      setVideoError(false)
    }

    v.addEventListener('error', onError)
    v.addEventListener('canplay', onCanPlay)

    return () => {
      v.removeEventListener('error', onError)
      v.removeEventListener('canplay', onCanPlay)
    }
  }, [])

  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden text-white"
      aria-label="Hero section with background video"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-300 ease-in-out"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Image if Video Fails */}
      {videoError && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
          role="img"
          aria-label="Hero fallback background"
        >
          <div className="rounded-md bg-black/45 px-4 py-2 text-white">
            Video unavailable
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex max-w-[1100px] flex-col items-center justify-center gap-4 px-4 text-center md:pt-20">
        <img src="/photos/image1.png" alt="img1" className="block h-auto w-auto" />
        <img src="/photos/image4.png" alt="img4" className="block h-auto w-auto" />
      </div>
    </section>
  )
}

export default Hero
