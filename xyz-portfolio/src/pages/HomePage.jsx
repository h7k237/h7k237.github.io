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
        <PersonalBrandV2
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <Footer/>
    </>
  );
}
