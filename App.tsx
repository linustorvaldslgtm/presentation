import React, { useState, useEffect, useRef } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { ChevronLeft, ChevronRight, FileDown, Maximize2 } from 'lucide-react';

// Declaration for html2pdf to avoid TS errors since we loaded it via CDN
declare var html2pdf: any;

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const totalSlides = SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleExportPDF = async () => {
    setIsExporting(true);
    
    // We need a short timeout to let React render the print container if it was hidden
    setTimeout(() => {
      const element = document.getElementById('pdf-export-container');
      const opt = {
        margin: 0,
        filename: 'geo-presentation-danau-erosi.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
      };

      html2pdf().from(element).set(opt).save().then(() => {
        setIsExporting(false);
      });
    }, 100);
  };

  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="h-14 bg-slate-900 text-white flex items-center justify-between px-6 border-b border-slate-800 z-50">
        <div className="font-bold text-lg text-emerald-400 flex items-center gap-2">
          <Maximize2 size={20} /> GeoPresentation
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">
            Slide {currentIndex + 1} / {totalSlides}
          </span>
          <button 
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded text-sm font-medium transition-colors disabled:opacity-50"
          >
            {isExporting ? 'Generating...' : <><FileDown size={16} /> PDF</>}
          </button>
        </div>
      </div>

      {/* Main Presentation Area */}
      <div className="flex-1 relative bg-black flex items-center justify-center p-4 lg:p-8">
        {/* Aspect Ratio Container (16:9) */}
        <div className="w-full max-w-6xl aspect-video bg-white relative shadow-2xl rounded-lg overflow-hidden ring-1 ring-slate-800">
          {SLIDES.map((slide, index) => (
             <div 
               key={slide.id} 
               className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'z-10 opacity-100 pointer-events-auto' : 'z-0 opacity-0 pointer-events-none'}`}
             >
               {index === currentIndex && <SlideRenderer data={slide} isActive={true} />}
             </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button 
          onClick={prevSlide} 
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 text-white backdrop-blur disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide} 
          disabled={currentIndex === totalSlides - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 text-white backdrop-blur disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Hidden PDF Generation Container */}
      {/* 
         This container renders ALL slides vertically.
         It is positioned off-screen or hidden but accessible to html2pdf.
         We toggle display to ensure html2canvas captures it correctly.
       */}
      <div 
        id="pdf-export-container" 
        className={`${isExporting ? 'fixed top-0 left-0 z-[9999]' : 'hidden'}`}
        style={{ width: '297mm' }} // A4 Landscape width approx
      >
        {SLIDES.map((slide) => (
          <div key={`pdf-${slide.id}`} className="w-[297mm] h-[210mm] relative page-break-after-always overflow-hidden bg-white">
             {/* Force isActive true so it renders content immediately */}
             <SlideRenderer data={slide} isActive={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
