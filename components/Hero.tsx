import React from 'react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              👋 Hello, I'm a Web Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building{' '}
            <span className="gradient-text">Digital Experiences</span>{' '}
            That Matter
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional websites and applications that help businesses grow and users thrive. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg 
                className="w-6 h-6 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}