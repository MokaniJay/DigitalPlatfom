// import React from 'react';
// import Link from 'next/link';

// // Main App component
// const App = () => {
//   return (
//     <div className="bg-black min-h-screen flex flex-col font-sans">
      
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 bg-transparent z-10">
//         <div className="flex items-center space-x-4">
//           <div className="text-2xl font-bold text-white uppercase">website</div>
//           <div className="text-sm font-light text-white uppercase opacity-70"> Digital<br />Platform</div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-2">
//             <div className="text-xl font-bold text-white">Website</div>
//             {/* <div className="text-lg text-white">creatia</div> */}
//           </div>
//           <a href="#" className="px-4 py-2 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300">
//             Go To  Portfolio
//           </a>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <main className="flex-grow flex items-center justify-center p-8 relative">
//         <div className="relative z-10 w-full max-w-7xl text-center">
//           <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-12"> Catalogue Reference</h1>

//           {/* Grid of Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
//             {/* Card Data Array */}
//             {[
//         { label: '1.25mm Laminates', Link: '/laminate/1.25mm-laminates' },
//               { label: '1.0mm Laminates'   <Link href="/laminate"></Link>},
//               { label: '0.92mm Laminates' },
//               { label: '0.8mm Laminates' },
//               { label: 'Pastel Colours' },
//               { label: 'Exterior Grade' },
//               { label: 'Liner' },
//               { label: 'PVC & Acrylic' },
//               { label: 'ACP' },
//               { label: 'Pre-Lam / Pannel' },
//               { label: 'Plywood' },
//               { label: 'Veneer' },
//               { label: 'Louvers' },
//               { label: 'Profile' },
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className="bg-[#2a2a2a] p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-lg hover:shadow-2xl hover:bg-[#333333] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
//               >
//                 {/* Placeholder SVG Icon */}
//                 <svg className="w-12 h-12 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                 </svg>
//                 <span className="text-white text-sm text-center">{item.label}</span>
//               </div>
//             ))}
//           </div>
          
//         </div>
//       </main>

//       {/* Footer */}
//      <footer className="py-5 bg-[#424242] text-center text-white mt-auto">
//         <p>Copyrights &copy; 2025 | All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;




import React from 'react';
import Link from 'next/link';

// Main App component
const App = () => {
  // Card Data Array
  const cardData = [
    { label: '1.25mm Laminates', link: '/laminate/1.25mm-laminates' },
    { label: '1.0mm Laminates', link: '/laminate/1.0mm-laminates' },
  { label: 'Basic', link: '/laminate/basic' },
{ label: 'Textured', link: '/laminate/textured' },
{ label: 'Glossy', link: '/laminate/glossy' },
{ label: 'Wood', link: '/laminate/wood' },
{ label: 'Matte', link: '/laminate/matte' },
{ label: 'High', link: '/laminate/high' },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-transparent z-10">
        <div className="flex items-center space-x-4">
          {/* <div className="text-2xl font-bold text-white uppercase">website</div> */}
          <div className="text-sm font-light text-white uppercase opacity-70"> Digital<br />Platform</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {/* <div className="text-xl font-bold text-white">Website</div> */}
          </div>
          <Link href="/website" className="px-4 py-2 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300">
            Go To  Portfolio
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-8 relative">
        <div className="relative z-10 w-full max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-12"> Catalogue Reference</h1>

          {/* Grid of Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {cardData.map((item, index) => (
              <Link 
                key={index} 
                href={item.link} 
                className="bg-[#2a2a2a] p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-lg hover:shadow-2xl hover:bg-[#333333] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {/* Placeholder SVG Icon */}
                <svg className="w-12 h-12 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-white text-sm text-center">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="py-5 bg-[#424242] text-center text-white mt-auto">
        <p>Copyrights &copy; 2025 | All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default App;

// "use client"
// import React, { useState } from 'react';

// // Main App component
// const App = () => {
//   const [currentPage, setCurrentPage] = useState('main'); // 'main' or '1.25mm'

//   // Component for the main catalog grid page
//   const MainCatalogPage = () => (
//     <>
//       <main className="flex-grow flex items-center justify-center p-8 relative">
//         <div className="relative z-10 w-full max-w-7xl text-center">
//           <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Lamital Catalogue Reference</h1>

//           {/* Grid of Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
//             {/* Card Data Array */}
//             {[
//               { label: '1.25mm Laminates', id: '1.25mm' },
//               { label: '1.0mm Laminates', id: '1.0mm' },
//               { label: '0.92mm Laminates', id: '0.92mm' },
//               { label: '0.8mm Laminates', id: '0.8mm' },
//               { label: 'Pastel Colours', id: 'pastels' },
//               { label: 'Exterior Grade', id: 'exterior' },
//               { label: 'Liner', id: 'liner' },
//               { label: 'PVC & Acrylic', id: 'pvc' },
//               { label: 'ACP', id: 'acp' },
//               { label: 'Pre-Lam / Pannel', id: 'prelam' },
//               { label: 'Plywood', id: 'plywood' },
//               { label: 'Veneer', id: 'veneer' },
//               { label: 'Louvers', id: 'louvers' },
//               { label: 'Profile', id: 'profile' },
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className="bg-[#2a2a2a] p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-lg hover:shadow-2xl hover:bg-[#333333] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
//                 onClick={() => {
//                   if (item.id === '1.25mm') {
//                     setCurrentPage('1.25mm');
//                   }
//                 }}
//               >
//                 {/* Placeholder SVG Icon */}
//                 <svg className="w-12 h-12 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                 </svg>
//                 <span className="text-white text-sm text-center">{item.label}</span>
//               </div>
//             ))}
//           </div>
          
//         </div>
//       </main>
//     </>
//   );

//   // Component for the 1.25mm Laminates page
//   const LaminateCatalogPage = () => (
//     <div className="w-full flex-grow flex flex-col p-8">
//       {/* Page Header and Controls */}
//       <header className="flex justify-between items-center mb-12 w-full max-w-7xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white">1.25mm Laminates Catalogue Reference</h1>
//       </header>

//       {/* Navigation Controls */}
//       <div className="flex items-center justify-between w-full max-w-7xl mx-auto mb-8">
//         <div className="flex items-center space-x-4">
//           <button 
//             className="flex items-center space-x-2 px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
//             onClick={() => setCurrentPage('main')}
//           >
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//             </svg>
//             <span>Back</span>
//           </button>
//           <select className="px-4 py-2 rounded-full bg-[#2a2a2a] text-white border border-[#444]">
//             <option>1.25mm Laminates</option>
//             <option>1.0mm Laminates</option>
//           </select>
//         </div>
//         <div className="flex items-center space-x-4">
//           <select className="px-4 py-2 rounded-full bg-[#2a2a2a] text-white border border-[#444]">
//             <option>Folder Type</option>
//             <option>PDF</option>
//           </select>
//           <button className="px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
//             Reset
//           </button>
//         </div>
//       </div>

//       {/* Catalog Display */}
//       <div className="flex-grow flex justify-center items-center w-full">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           <div className="flex flex-col items-center">
//             <img src="https://placehold.co/300x400/323232/ffffff?text=Amulya+Mica+1.25mm" alt="Amulya Mica 1.25mm" className="rounded-xl shadow-lg" />
//             <span className="mt-4 text-white text-sm">Amulya Mica 1.25mm</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <img src="https://placehold.co/300x400/323232/ffffff?text=Classico+1.25mm" alt="Classico 1.25mm" className="rounded-xl shadow-lg" />
//             <span className="mt-4 text-white text-sm">Classico 1.25mm</span>
//           </div>
//           {/* Add more catalog items here */}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-black min-h-screen flex flex-col font-sans text-white">
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 bg-transparent z-10">
//         <div className="flex items-center space-x-4">
//           <div className="text-2xl font-bold uppercase">Lamital</div>
//           <div className="text-sm font-light uppercase opacity-70">Laminate Digital<br />Platform</div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-2">
//             <div className="text-xl font-bold">Your Company Name</div>
//             <div className="text-lg">creatia</div>
//           </div>
//           <a href="#" className="px-4 py-2 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300">
//             Go to Lamital.in
//           </a>
//         </div>
//       </header>
      
//       {currentPage === 'main' ? <MainCatalogPage /> : <LaminateCatalogPage />}

//       {/* Footer */}
//       <footer className="py-20 bg-[#424242] text-center text-white mt-auto">
//         <p>Copyrights &copy; 2025 | All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;





// main one with addi link and pdf 


// Main App component

// import React from 'react';
// import Link from 'next/link';

// const App = () => {
//   return (
//     <div className="bg-black min-h-screen flex flex-col font-sans">
      
//       {/* Header */}
//       <header className="flex justify-between items-center p-6 bg-transparent z-10">
//         <div className="flex items-center space-x-4">
//           <div className="text-2xl font-bold text-white uppercase">website</div>
//           <div className="text-sm font-light text-white uppercase opacity-70"> Digital<br />Platform</div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-2">
//             <div className="text-xl font-bold text-white">Website</div>
//           </div>
//           <a href="#" className="px-4 py-2 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300">
//             Go To  Portfolio
//           </a>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <main className="flex-grow flex items-center justify-center p-8 relative">
//         <div className="relative z-10 w-full max-w-7xl text-center">
//           <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Catalogue Reference</h1>

//           {/* Grid of Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
//             {/* Card Data Array */}
//             {[
//               { label: '1.25mm Laminates', link: '/laminate/1.25mm-laminates' },
//               { label: '1.0mm Laminates', link: '/laminate/1.0mm-laminates' },
//               { label: '0.92mm Laminates', link: '/laminate/0.92mm-laminates' },
//               { label: '0.8mm Laminates', link: '/laminate/0.8mm-laminates' },
//               { label: 'Pastel Colours', link: '/laminate/pastel-colours' },
//               { label: 'Exterior Grade', link: '/laminate/exterior-grade' },
//               { label: 'Liner', link: '/laminate/liner' },
//               { label: 'PVC & Acrylic', link: '/laminate/pvc-acrylic' },
//               { label: 'ACP', link: '/laminate/acp' },
//               { label: 'Pre-Lam / Pannel', link: '/laminate/pre-lam' },
//               { label: 'Plywood', link: '/laminate/plywood' },
//               { label: 'Veneer', link: '/laminate/veneer' },
//               { label: 'Louvers', link: '/laminate/louvers' },
//               { label: 'Profile', link: '/laminate/profile' },
//             ].map((item, index) => (
//               <Link key={index} href={item.link}>
//                 <div 
//                   className="bg-[#2a2a2a] p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-lg hover:shadow-2xl hover:bg-[#333333] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
//                 >
//                   {/* Placeholder SVG Icon */}
//                   <svg className="w-12 h-12 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                   </svg>
//                   <span className="text-white text-sm text-center">{item.label}</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="py-5 bg-[#424242] text-center text-white mt-auto">
//         <p>Copyrights &copy; 2025 | All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

