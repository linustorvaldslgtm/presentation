import React from 'react';
import { SlideContent, SlideType } from '../types';
import { Layers, Droplets, Wind, Mountain, Map } from 'lucide-react';

interface SlideProps {
  data: SlideContent;
  isActive?: boolean;
}

export const SlideRenderer: React.FC<SlideProps> = ({ data, isActive = true }) => {
  // Common classes
  const containerClass = `w-full h-full relative overflow-hidden bg-white text-slate-800 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`;
  
  // Render based on type
  switch (data.type) {
    case SlideType.COVER:
      return (
        <div className={containerClass}>
          <div className="absolute inset-0">
            <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-12 text-white">
            <div className="mb-6 p-4 border-b-2 border-emerald-400 inline-block">
               <Map className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
               <h2 className="text-xl tracking-widest uppercase font-light">{data.subtitle}</h2>
            </div>
            <h1 className="text-6xl font-bold mb-8 drop-shadow-lg leading-tight">{data.title}</h1>
            <p className="text-xl max-w-2xl text-slate-200 font-light leading-relaxed">{data.body}</p>
          </div>
        </div>
      );

    case SlideType.FULL_IMAGE:
      return (
        <div className={containerClass}>
          <div className="absolute inset-0">
            <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 flex flex-col justify-end h-full p-16 text-white pb-24">
            <h2 className="text-5xl font-bold mb-6 border-l-8 border-yellow-500 pl-6">{data.title}</h2>
            <div className="text-xl max-w-3xl leading-relaxed whitespace-pre-line bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              {data.body}
            </div>
          </div>
        </div>
      );

    case SlideType.CONTENT_RIGHT:
      return (
        <div className={`${containerClass} flex`}>
          <div className="w-1/2 p-16 flex flex-col justify-center bg-slate-50">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 border-b-4 border-blue-500 pb-4 inline-block">{data.title}</h2>
            <div className="text-lg text-slate-600 leading-loose whitespace-pre-line">
              {data.body}
            </div>
          </div>
          <div className="w-1/2 h-full relative">
            <img src={data.imageUrl} className="w-full h-full object-cover" alt="visual" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent opacity-50"></div>
          </div>
        </div>
      );

    case SlideType.CONTENT_LEFT:
      return (
        <div className={`${containerClass} flex flex-row-reverse`}>
          <div className="w-1/2 p-16 flex flex-col justify-center bg-slate-50">
            {data.subtitle && <span className="text-amber-600 font-bold tracking-wider mb-2 uppercase text-sm">{data.subtitle}</span>}
            <h2 className="text-4xl font-bold text-slate-900 mb-8">{data.title}</h2>
            <div className="text-lg text-slate-600 leading-loose whitespace-pre-line">
              {data.body}
            </div>
          </div>
          <div className="w-1/2 h-full relative">
            <img src={data.imageUrl} className="w-full h-full object-cover" alt="visual" />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-50 to-transparent opacity-50"></div>
          </div>
        </div>
      );

    case SlideType.LIST_GRID:
      return (
        <div className={containerClass}>
           <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <img src={data.imageUrl} className="w-full h-full object-cover grayscale" alt="bg" />
           </div>
           <div className="h-full flex flex-col p-12 relative z-10">
              <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-4">
                <span className="p-2 bg-blue-600 text-white rounded-lg"><Layers /></span>
                {data.title}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {data.listItems?.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      );

    case SlideType.SPLIT_LIST:
      return (
        <div className={`${containerClass} flex`}>
           {data.imageUrl && (
             <div className="w-2/5 relative">
                <img src={data.imageUrl} className="w-full h-full object-cover" alt="side" />
                <div className="absolute inset-0 bg-indigo-900/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 p-12 flex items-center">
                   <h2 className="text-5xl font-bold text-white leading-tight">{data.title}</h2>
                </div>
             </div>
           )}
           <div className={`${data.imageUrl ? 'w-3/5' : 'w-full'} p-16 bg-white flex flex-col justify-center gap-8`}>
              {!data.imageUrl && (
                 <h2 className="text-4xl font-bold text-indigo-900 mb-8 pb-4 border-b-2 border-indigo-100">{data.title}</h2>
              )}
              {data.listItems?.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    {idx === 0 ? <Droplets size={32} /> : <Wind size={32} />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      );

    default:
      return <div className={containerClass}>Unknown Type</div>;
  }
};