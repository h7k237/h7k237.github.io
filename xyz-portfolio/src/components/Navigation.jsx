import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = ({ activeSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // Already on home page, just scroll
      document.getElementById(sectionId)?.scrollIntoView();
    }
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper-white/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-8 py-8 flex justify-between items-center">
        <div
          className="text-lg font-bold tracking-tight cursor-pointer text-forest-green hover:text-my-amber transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          onClick={goHome}
        >
          HK
        </div>
        <div className="flex gap-12">
          {['about', 'backstory', 'writing', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm capitalize transition-colors ${
                activeSection === item ? 'text-my-amber' : 'text-forest-green hover:text-my-amber'
              }`}
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
