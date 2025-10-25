import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Footer from './components/Footer'
import {BrowserRouter,Routes, Route } from 'react-router'

function App() {

  return (
    <>
    <BrowserRouter>
    <div className='flex flex-col min-h-screen'>
       <Navbar />
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="*" element={<Error/>}/>
       </Routes>
       <Footer/>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
