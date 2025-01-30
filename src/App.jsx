import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Lost from './pages/Lost.jsx'


function App() {
  //const [count, setCount] = useState(0)
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home /> } />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Lost />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
