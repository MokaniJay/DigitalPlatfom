"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const catalogItems = [
  {
    id: 1,
    name: 'Oak Wood Finish',
    image: '/wood/oak.png', 
    pdfUrl: '/pdfs/oak.pdf',
    type: 'wood'
  },
  {
    id: 2,
    name: 'Maple Wood Finish',
    image: '/wood/mapple.png',
    pdfUrl: '/pdfs/maple.pdf',
    type: 'wood'
  },
  {
    id: 3,
    name: 'Pine Wood Finish',
    image: '/wood/pine.png', 
    pdfUrl: '/pdfs/pine.pdf',
    type: 'wood'
  },
  {
    id: 4,
    name: 'Walnut Wood Finish',
    image: '/wood/walnut.png', 
    pdfUrl: '/pdfs/walnut.pdf',
    type: 'wood'
  },
];

const wood = () => {
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
    <div className="bg-[#f3f1e5] text-[#3c2f2f] min-h-screen flex flex-col font-sans">
      
      
      <header className="flex flex-col items-center p-6 lg:px-12 bg-[#8B5C40] z-10">
        <div className="flex justify-between items-center w-full">
         
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white uppercase tracking-wide">WoodWorks</span>
              <span className="text-sm font-light text-white">NATURAL<br />MATERIALS</span>
            </div>
          </div>
          
        
          <div className="flex items-center space-x-4">
        
            <a hhref="https://mokani-jay-portfolio.vercel.app/" className="px-4 py-2 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-[#8B5C40] transition-colors duration-300">
              Go To  Portfolio
            </a>
          </div>
        </div>

      
        <div className="mt-60 mb-20 text-center">
          <h1 className="text-3xl lg:text-5xl font-light tracking-wide text-white">
            Wood Finish Catalogue Reference
          </h1>
        </div>
        
      </header>
      
    
      <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
         
            <div className="w-full flex justify-between items-center text-gray-300 mb-8">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-green transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                <span className="hidden sm:inline text-lg" style={{ color: '#8B5C40' }}>Back</span>

                </Link>
            
              </div>

              <div className="flex items-center space-x-4">
                   <div className="relative">
 <select
  id="folder-type"
  className="bg-[#8a5d40] text-white p-2 pr-10 pl-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white w-70 appearance-none"
  value={filterType}
  onChange={handleFilterChange}
>
  <option value="">Wood Finish</option>
  <option value="laminate">Wood</option>
  <option value="plywood">Plywood</option>
</select>


<div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
  <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
</div>

</div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-[#8B5C40] text-white border border-[#8B5C40] rounded-lg hover:bg-white hover:text-[#8B5C40] transition-colors"

                >
                  Reset
                </button>
              </div>
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center p-4"
                >
                  <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer w-[300px] h-[300px] shadow-lg transform transition-transform duration-300 hover:scale-105">
                    
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                     
                    </div>
                  </a>
                  <div className="p-4 text-center mt-4">
                    <span className="text-xl font-light text-white"style={{ color: '#8B5C40' }} >{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      
      <footer className="py-5 bg-[#5C4033] text-center text-white mt-auto w-full">
        <p>Copyrights &copy; 2025 | All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default wood;
