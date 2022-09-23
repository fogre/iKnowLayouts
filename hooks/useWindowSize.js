import { useState, useEffect } from 'react'

/**
 * @description Hook that returns object window{width, height} and boolean breakpoint if window width || height is less than given treshold
 * @param {Integer} minWidth (optional)
 * @param {Integer} minHeight (optional)
 * @returns {Object} { window, breakpoint }
 */

export const useWindowSize = (minWidth = 0, minHeight = 0) => {
  const [breakpoint, setBreakpoint] = useState(false)
  const [windowSize, setWindowSize] = useState({})

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < minWidth || window.innerHeight < minHeight ) {
        setBreakpoint(true)
      } else {
        setBreakpoint(false)
      }
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [minHeight, minWidth])

  return {
    window: windowSize,
    breakpoint
  }
}