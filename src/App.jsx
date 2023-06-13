
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'

function App() {

  return (
    // add BroswerRouter 
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
