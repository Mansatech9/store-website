import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
     





      <main className="flex-grow ">
        <div className=" bg-[#FFFFFF]">
        
          <Home/>
      
        </div>
      </main>
      



      <Footer />
    </div>
  )
}

export default App
