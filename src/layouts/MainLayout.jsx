import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-[#FFFFFF]">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;