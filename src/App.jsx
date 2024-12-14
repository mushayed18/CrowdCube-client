import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {

  return (
    <div className='font-poppins'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
