import React, { useState, useEffect } from 'react';

const PersonalBrandV2 = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
            setActiveSection(entry.target.id);
          } else {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: false
            }));
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'auto' });
  };

  const posts = [
    {
      title: "Building Scalable React Applications",
      platform: "LinkedIn",
      date: "Oct 2025",
      link: "#"
    },
    {
      title: "The Future of Frontend Development",
      platform: "LinkedIn",
      date: "Sep 2025",
      link: "#"
    },
    {
      title: "Performance Optimization Techniques",
      platform: "LinkedIn",
      date: "Sep 2025",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-paper-white">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-8 py-8 flex justify-between items-center">
          <div
            className="text-lg font-bold tracking-tight cursor-pointer text-paper-black hover:text-my-amber transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            HK
          </div>
          <div className="flex gap-12">
            {['about', 'backstory', 'writing', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm capitalize transition-colors ${
                  activeSection === item ? 'text-my-amber' : 'text-forest-green hover:text-paper-black'
                }`}
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-8 pt-32 pb-40" style={{
        minHeight: '100dvh',
        opacity: visibleSections['hero'] ? 1 : 0,
        //transform: visibleSections['hero'] ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }}>
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className="text-8xl font-black mb-12 tracking-tight text-forest-green"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              lineHeight: '0.95'
            }}
          >
            Hammad Khan
          </h1>

          {/*
          <p
            className="text-lg mb-20 text-forest-green max-w-md mx-auto"
            style={{
              fontFamily: "'Crimson Text', serif",
              lineHeight: '1.9'
            }}
          >
            Building with depth, speed and purpose—from firmware to cloud systems for AI-driven products
          </p>
          */}
          <div className="flex gap-8 justify-center text-sm">
            {[
              { name: 'Email', link: 'mailto:h7k237@gmail.com' },
              { name: 'LinkedIn', link: 'https://www.linkedin.com/in/hammadkhan97/' },
              { name: 'GitHub', link: 'https://www.github.com/h7k237' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                className="text-paper-black hover:text-my-amber transition-colors"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-8" style={{
        minHeight: '100dvh',
        opacity: visibleSections['about'] ? 1 : 0,
        //transform: visibleSections['about'] ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-px bg-my-amber mb-20"></div>

            <div className="space-y-16">
              <p
                className="text-xl text-paper-black max-w-xl"
                style={{
                  fontFamily: "'Crimson Text', serif",
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em'
                }}
              >
                Hello! I'm a software engineer and<br/>
                tech enthusiast based in San Francisco, CA.<br/>
              </p>

              <p
                className="text-xl text-paper-black max-w-xl"
                style={{
                  fontFamily: "'Crimson Text', serif",
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em'
                }}
              >
                I began my career in computer engineering,<br/>
                driven by a deep curiosity to understand<br/>
                systems from the ground up.
              </p>

              <p
                className="text-xl text-paper-black max-w-xl"
                style={{
                  fontFamily: "'Crimson Text', serif",
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em'
                }}
              >
                From learning how flip-flops store bits<br/>
                to designing operating systems,<br/>
                I've always been fascinated by the architecture<br/>
                and inner workings of complex systems.
              </p>

              <p
                className="text-xl text-forest-green max-w-xl"
                style={{
                  fontFamily: "'Crimson Text', serif",
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em'
                }}
              >
                Today, I'm especially passionate about how evolving<br/>
                AI technologies can positively shape our society,<br/>
                and I'm excited to build responsible, impactful systems<br/>
                that help bring that future closer.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/src/assets/profile.jpg"
              alt="Profile"
              className="w-60 h-60 object-cover border-1 border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Backstory Section */}
      <section id="backstory" className="py-40 px-8" style={{
        minHeight: '100dvh',
        opacity: visibleSections['backstory'] ? 1 : 0,
        transform: visibleSections['backstory'] ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }}>
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-px bg-my-amber mb-20"></div>

          <h2
            className="text-6xl font-bold mb-12 text-forest-green"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Backstory
          </h2>

          <div className="space-y-16">
            <p
              className="text-xl text-paper-black max-w-xl"
              style={{
                fontFamily: "'Crimson Text', serif",
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
              }}
            >
              I studied Computer Engineering at the University of Illinois at<br/>
              Urbana–Champaign, where I focused on computer architecture,<br/>
              embedded systems, and digital design.
            </p>

            <p
              className="text-xl text-paper-black max-w-xl"
              style={{
                fontFamily: "'Crimson Text', serif",
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
              }}
            >
              In 2019, I joined Cisco Meraki as a firmware engineer, working<br/>
              on large-scale networking systems. I was an early member of<br/>
              the team that launched a new Meraki switching product line<br/>
              and helped scale it to over 400,000 deployed switches worldwide.
            </p>

            <p
              className="text-xl text-paper-black max-w-xl"
              style={{
                fontFamily: "'Crimson Text', serif",
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
              }}
            >
              Over 5+ years, I contributed to firmware development across<br/>
              switches, wireless access points, and security appliances,<br/>
              delivering cross-platform architectures, improving system<br/>
              resilience, and enabling new hardware generations used globally.
            </p>

            <p
              className="text-xl text-paper-black max-w-xl"
              style={{
                fontFamily: "'Crimson Text', serif",
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
              }}
            >
              In mid-2025, I joined Tamarind Bio as a Founding Software<br/>
              Engineer. Tamarind builds an AI-powered platform for<br/>
              intelligent protein design, and I work across the stack to build<br/>
              the cloud backend, platform architecture, developer tooling, and<br/>
              product interfaces used by scientists and biotech companies.
            </p>

            <p
              className="text-xl text-paper-black max-w-xl"
              style={{
                fontFamily: "'Crimson Text', serif",
                lineHeight: '1.3',
                letterSpacing: '-0.01em'
              }}
            >
              I work closely with the founding team to scale our engineering<br/>
              foundation, build durable systems, and accelerate scientific<br/>
              discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-40 px-8" style={{
        minHeight: '100dvh',
        opacity: visibleSections['writing'] ? 1 : 0,
        transform: visibleSections['writing'] ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }}>
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-px bg-my-amber mb-20"></div>

          <h2
            className="text-5xl font-bold mb-24 text-forest-green"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '-0.02em'
            }}
          >
            Writing
          </h2>

          <div className="space-y-16">
            {posts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                className="block group"
              >
                <h3
                  className="text-3xl font-semibold mb-3 text-paper-black group-hover:text-my-amber transition-colors"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: '-0.01em'
                  }}
                >
                  {post.title}
                </h3>
                <div className="flex gap-4 text-sm text-forest-green" style={{ fontFamily: "'Crimson Text', serif" }}>
                  <span>{post.platform}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-8" style={{
        minHeight: '100dvh',
        opacity: visibleSections['contact'] ? 1 : 0,
        transform: visibleSections['contact'] ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }}>
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-px bg-my-amber mb-20"></div>

          <h2
            className="text-6xl font-bold mb-12 text-forest-green"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Let's connect
          </h2>

          <p
            className="text-xl mb-16 text-paper-black max-w-md"
            style={{
              fontFamily: "'Crimson Text', serif",
              lineHeight: '1.7'
            }}
          >
            Always interested in new opportunities, collaborations, or just talking tech.
          </p>

          <div className="flex gap-6">
            <a
              href="mailto:h7k237@gmail.com"
              className="inline-block px-10 py-4 bg-my-amber text-paper-white text-base font-semibold transition-all hover:opacity-90"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/hammadkhan97/"
              target="_blank"
              className="inline-block px-10 py-4 border border-paper-black text-base font-semibold transition-all hover:bg-paper-black hover:text-paper-white text-paper-black"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 text-center">
        <p className="text-sm text-forest-green" style={{ fontFamily: "'Crimson Text', serif" }}>
          © 2025 Hammad Khan
        </p>
      </footer>
    </div>
  );
};

export default PersonalBrandV2;
