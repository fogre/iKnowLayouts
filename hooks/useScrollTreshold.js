import { useState, useEffect } from 'react'

export const useScrollTreshold = threshold => {
  const [overThreshold, setThreshold] = useState(false)

  useEffect(() => {
    const changeThreshold = () => {
      if (window.scrollY >= threshold) {
        setThreshold(true)
      } else {
        setThreshold(false)
      }
    }

    window.addEventListener('scroll', changeThreshold, true)
    return () => window.removeEventListener('scroll', changeThreshold)
  }, [threshold])

  return { overThreshold }
}