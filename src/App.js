import React, { useState, useEffect } from 'react'

export default function App() {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize) // everytime 'resize' happens, handleResize get's called

    return () => {
      window.removeEventListener('resize', handleResize)
    } // we need to remove the EventListener, otherwise there will be more and more EventListeners added

  }, []) // empty array means useEffect() runs once, at the start

  return (
    <div className="App">
      The screen width is {width}
      <br/>
      Try resizing the screen width!
    </div>
  );
}