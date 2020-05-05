import { useState, useLayoutEffect, useRef } from 'react'

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({})

  const ref = useRef()

  useLayoutEffect(() => {
    if (ref.current) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions({
            width: ref.current.getBoundingClientRect().width,
            height: ref.current.getBoundingClientRect().height
          })
        )

      measure()

      window.addEventListener('resize', measure)
      window.addEventListener('scroll', measure)

      return () => {
        window.removeEventListener('resize', measure)
        window.removeEventListener('scroll', measure)
      }
    }
  }, [ref])

  return [ref, dimensions]
}

export default useDimensions
