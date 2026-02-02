'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
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

// グローバルでスクリプト読み込み状態を管理
let jqueryLoaded = false
let ripplesLoaded = false

export function JQueryRipple({ children, imageUrl }: JQueryRippleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInitialized = useRef(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [scriptsReady, setScriptsReady] = useState(false)

  // デスクトップ判定
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // 初期化関数
  const initializeRipples = useCallback(() => {
    if (!window.$ || !containerRef.current || isInitialized.current) return

    const $ = window.$
    const $container = $(containerRef.current)

    if (typeof $container.ripples === 'function') {
      try {
        $container.ripples({
          resolution: 256,
          dropRadius: 30,
          perturbance: 0.04,
          interactive: true
        })
        isInitialized.current = true
      } catch (error) {
        console.error('Failed to initialize ripples:', error)
      }
    }
  }, [])

  // スクリプト読み込み完了時に初期化
  useEffect(() => {
    if (!isDesktop || !scriptsReady) return

    // 少し遅延させてDOMの準備を待つ
    const timer = setTimeout(() => {
      initializeRipples()
    }, 100)

    return () => {
      clearTimeout(timer)
      if (window.$ && containerRef.current && isInitialized.current) {
        try {
          window.$(containerRef.current).ripples('destroy')
          isInitialized.current = false
        } catch (error) {}
      }
    }
  }, [isDesktop, scriptsReady, initializeRipples])

  const handleJQueryLoad = () => {
    jqueryLoaded = true
    if (ripplesLoaded) {
      setScriptsReady(true)
    }
  }

  const handleRipplesLoad = () => {
    ripplesLoaded = true
    if (jqueryLoaded) {
      setScriptsReady(true)
    }
  }

  // 既にスクリプトが読み込まれている場合
  useEffect(() => {
    if (window.$ && window.$.fn?.ripples) {
      jqueryLoaded = true
      ripplesLoaded = true
      setScriptsReady(true)
    }
  }, [])

  return (
    <>
      {isDesktop && (
        <>
          <Script
            src="https://code.jquery.com/jquery-3.7.1.min.js"
            strategy="afterInteractive"
            onLoad={handleJQueryLoad}
          />
          <Script
            src="/jquery.ripples.min.js"
            strategy="afterInteractive"
            onLoad={handleRipplesLoad}
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
