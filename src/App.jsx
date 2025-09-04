import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">    
      <div className="header">Mark Angelo Dela Cruz</div>
      <div className="main">      
        <div className="left">
          <div className="hero">Hero</div>
          <div className="sidebar">Sidebar</div>
        </div>
        <div className="right">
          <div className="main-content">Main Content</div>
          <div className="extra">Extra Content</div>
        </div>      
      </div>
      <div className="lower">
        <div className="ri">Related Images</div>
        <div className="rp">Related Posts</div>
      </div>
      <div className="footer">C-PCIT9 IT3A</div>
    </div>
  )
}

export default App
