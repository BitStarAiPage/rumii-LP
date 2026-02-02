'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

interface JQueryRippleProps {
  children: React.ReactNode
  imageUrl: string
}

declare global {
  interface Window {
    $: any
    jQuery: any
  }
}

export function JQueryRipple({ children, imageUrl }: JQueryRippleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInitialized = useRef(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const initializeRipples = () => {
      if (!window.$ || !containerRef.current || isInitialized.current) return

      const $ = window.$
      const $container = $(containerRef.current)

      if (typeof $container.ripples === 'function') {
        try {
          $container.ripples({
            resolution: 256,      // 解像度（低いほど軽量）
            dropRadius: 30,       // 波紋の半径
            perturbance: 0.04,    // 揺らぎの強さ
            interactive: true     // マウス追従を有効化
          })
          isInitialized.current = true
        } catch (error) {
          console.error('Failed to initialize ripples:', error)
        }
      }
    }

    if (document.readyState === 'complete') {
      initializeRipples()
    } else {
      window.addEventListener('load', initializeRipples)
    }

    return () => {
      if (window.$ && containerRef.current && isInitialized.current) {
        try {
          window.$(containerRef.current).ripples('destroy')
        } catch (error) {}
      }
      window.removeEventListener('load', initializeRipples)
    }
  }, [isDesktop])

  return (
    <>
      {isDesktop && (
        <>
          <Script
            src="https://code.jquery.com/jquery-3.7.1.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/jquery.ripples.min.js"
            strategy="afterInteractive"
          />
        </>
      )}

      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {children}
      </div>
    </>
  )
}
