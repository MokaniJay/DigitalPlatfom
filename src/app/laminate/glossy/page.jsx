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
    type: 'laminate'
  },
  {
    id: 2,
    name: 'Classico 1.25mm',
    image: '/images/pdf-images.png', // Use a proper cover image path
    pdfUrl: '/pdfs/classico.pdf',
    type: 'plywood'
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
    <div className="bg-gradient-to-r from-[#f0f0f0] to-[#d0d0d0] text-gray-800 min-h-screen flex flex-col font-sans">
      
      {/* Header section with logos and main title */}
      <header className="flex flex-col items-center p-6 lg:px-12 bg-white shadow-xl rounded-b-xl z-10">
  
        <div className="flex justify-between items-center w-full">
          {/* Left-aligned content: Logo and Digital Platform */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {/* <span className="text-xl font-bold text-black uppercase tracking-wide">Website</span> */}
              <span className="text-sm font-light text-black">DIGITAL<br />PLATFORM</span>
            </div>
          </div>
          
          {/* Right-aligned content: Wolves, Creatia, and the link */}
          <div className="flex items-center space-x-4">
            <a href="https://mokani-jay-portfolio.vercel.app/"className="px-4 py-2 bg-transparent border-2 border-black rounded-full text-black hover:bg-white hover:text-black transition-colors duration-300 shadow-md">
              Go To  Portfolio
            </a>
          </div>
        </div>

        {/* Centered H1 below the top bar */}
        <div className="mt-60 mb-20 text-center">
       <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider text-black">
  Glossy Laminates Catalogue 1.25mm 
</h1>
        </div>
      </header>

      {/* Main content with title, filters, and catalog display */}
      <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
            {/* Top bar with Back and filters */}
            <div className="w-full flex justify-between items-center text-gray-500 mb-8">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden sm:inline text-xl ">Back</span>
                </Link>
               
              </div>
              
              <div className="flex items-center space-x-4">
    
            
                     <div className="relative">
 <select
  id="folder-type"
  className="bg-[#1a1a1a] text-white p-2 pr-10 pl-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white w-70 appearance-none"
  value={filterType}
  onChange={handleFilterChange}
>
  <option value="">Glossy 1.05mm Laminates</option>
  <option value="laminate"> Glossy Laminates 1.25mm </option>
  <option value="plywood" >Glossy Plywood</option>
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
                  className="px-4 py-2 bg-transparent border-2 border-gray-400 rounded-lg text-gray-500 hover:bg-gray-200 transition-colors shadow-sm"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Catalog grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center p-4 bg-white shadow-xl rounded-lg transform transition-transform duration-300 hover:scale-105"
                >
                  {/* The <a> tag wraps the entire image container, making it clickable */}
                  <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer w-[300px] h-[300px] shadow-lg rounded-lg overflow-hidden">
                    <div className="relative w-full h-full">
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
                    <span className="text-md font-light text-gray-700">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-5 bg-[#f5f5f5] text-center text-gray-800 mt-auto w-full shadow-md">
        <p>Copyrights &copy; 2025 | All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Laminates125;
