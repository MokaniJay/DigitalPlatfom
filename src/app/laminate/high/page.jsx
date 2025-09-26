"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dummy data for the catalog items (I've corrected the image paths)
const catalogItems = [
  {
    id: 1,
    name: 'demo1 PDF',
    image: '/images/pdf-images.png', // Use a proper cover image path
    pdfUrl: '/pdfs/demo1.pdf',
    type: 'High Wood'
  },
  {
    id: 2,
    name: 'Classico 1.25mm',
    image: '/images/pdf-images.png', // Use a proper cover image path
    pdfUrl: '/pdfs/classico.pdf',
    type: 'High Plywood'
  },
];

const Laminates125 = () => {
  const [filterType, setFilterType] = useState('');

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleReset = () => {
    setFilterType('');
  };

  const filteredItems = catalogItems.filter(item =>
    !filterType || item.type === filterType
  );

  return (
    <div className="bg-[#101010] text-white min-h-screen flex flex-col font-sans">
      
      {/* Header section with logos and main title */}
  
      <header className="flex flex-col items-center p-6 lg:px-12 bg-[#1a1a1a] z-10 shadow-2xl">
  
        <div className="flex justify-between items-center w-full">
          {/* Left-aligned content: Logo and Digital Platform */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {/* <span className="text-2xl font-bold text-gold uppercase tracking-widest">Website</span> */}
              <span className="text-sm font-light text-gold">DIGITAL<br />PLATFORM</span>
            </div>
          </div>
          
          {/* Right-aligned content: Wolves, Creatia, and the link */}
          <div className="flex items-center space-x-4">
           
            <a href="https://mokani-jay-portfolio.vercel.app/" className="px-6 py-3 bg-transparent border-2 border-gold rounded-full text-gold hover:bg-[#333333] hover:text-gold transition-all duration-300 ease-in-out">
              Go To  Portfolio
            </a>
          </div>
        </div>
  
        {/* Centered H1 below the top bar */}
        <div className="mt-40 mb-24 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold tracking-tight text-gold">
            1.25mm Laminates Catalogue Reference
          </h1>
        </div>
      </header>
  
      {/* Main content with title, filters, and catalog display */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-7xl mx-auto text-center">
  
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
            {/* Top bar with Back and filters */}
            <div className="w-full flex justify-between items-center text-gray-300 mb-10">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all ease-in-out duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden sm:inline">Back</span>
                </Link>
           
              </div>
  
              <div className="flex items-center space-x-4">
               <div className="relative">
 <select
  id="folder-type"
  className="bg-[#2e2e2e] text-white p-2 pr-10 pl-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white w-50 appearance-none"
  value={filterType}
  onChange={handleFilterChange}
>
  <option value="">High</option>
  <option value="High Wood"> High Wood</option>
  <option value="High Plywood"> High Plywood</option>
</select>

{/* Custom arrow */}
<div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
  <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
</div>

</div>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-transparent border-2 border-gray-500 rounded-xl text-gray-300 hover:bg-[#444444] transition-all duration-300 ease-in-out"
                >
                  Reset
                </button>
              </div>
            </div>
  
            {/* Catalog grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center p-6 bg-[#2a2a2a] rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                >
                  {/* The <a> tag wraps the entire image container, making it clickable */}
                  <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer w-[320px] h-[320px] overflow-hidden rounded-xl">
                    
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </a>
                  <div className="p-4 text-center mt-4">
                    <span className="text-md font-serif font-light text-gray-300">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
  
      {/* Footer */}
      <footer className="py-6 bg-[#1a1a1a] text-center text-white mt-auto w-full">
        <p>Copyrights &copy; 2025 | All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Laminates125;
