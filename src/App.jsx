import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Lost from './pages/Lost.jsx'
import Art from "./pages/art.jsx";
import Stocks from "./pages/stocks.jsx";
import News from "./pages/news.jsx";


function App() {
  //const [count, setCount] = useState(0)
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/news" element={<News />} />
          <Route path="/art" element={<Art />} />
          <Route path="/*" element={<Lost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
