import React, { useState, useEffect } from 'react';
import PersonalBrandV2 from '@/components/PersonalBrandV2'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');
  return (
    <>
      <Navigation activeSection={activeSection} />
      <div className="min-h-screen bg-paper-white">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet" />
        <PersonalBrandV2
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <Footer/>
    </>
  );
}
