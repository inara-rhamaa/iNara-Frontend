"use client";

import { useEffect, useState } from 'react';

interface CarouselText {
  id: number;
  text: string;
}

// Sample carousel text data
const carouselTexts: CarouselText[] = [
  {
    id: 1,
    text: 'Experience the future of AI with iNara - your personal assistant for everyday tasks.'
  },
  {
    id: 2,
    text: 'Just speak naturally and watch iNara understand and respond to your needs.'
  },
  {
    id: 3,
    text: 'iNara works with all your favorite apps and services for a truly connected experience.'
  }
];

export default function AdPanel() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Auto-rotate text carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentText = carouselTexts[currentTextIndex];
  
  return (
    <div className="h-full flex flex-col bg-inara-pastel-white rounded-lg p-6 shadow-md">
      {/* YouTube Video Section */}
      <div className="w-full flex-1 flex flex-col">
        <div className="relative w-full h-[60%] rounded-lg overflow-hidden bg-gray-100 border-2 border-inara-green-light shadow-md">
          <iframe 
            src="https://www.youtube.com/embed/wPp8GV-B-kE?autoplay=1&mute=1&controls=0&loop=1&playlist=wPp8GV-B-kE"
            className="w-full h-full"
            title="iNara YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Text Carousel Section */}
        <div className="mt-8 w-full h-[30%] flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md border border-inara-green-light/30">
          <div className="text-center flex-1 flex items-center justify-center">
            <p className="text-inara-green-dark text-xl font-medium transition-all duration-500 ease-in-out">
              {currentText.text}
            </p>
          </div>
          
          <div className="flex justify-center space-x-2 mt-4">
            {carouselTexts.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentTextIndex ? 'bg-inara-green' : 'bg-gray-300'}`}
                onClick={() => setCurrentTextIndex(index)}
                aria-label={`View text ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
