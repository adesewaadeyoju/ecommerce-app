import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {

  return (
    <>
     <Navbar/>
     <div style={{padding:'2rem'}} >
     <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path= '/cart' element={<Cart/>} />
     </Routes>
     </div> 
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
