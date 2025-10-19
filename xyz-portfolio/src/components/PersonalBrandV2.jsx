import React, { useState, useEffect } from 'react';
import { posts } from '@/data/posts';
import { useLocation, Link } from 'react-router-dom';

const PersonalBrandV2 = ({ activeSection, setActiveSection }) => {
  const [visibleSections, setVisibleSections] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView();
      }, 100);
    }
  }, [location]);

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

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-8 pt-32 pb-40" style={{
        minHeight: '100dvh',
        opacity: visibleSections['hero'] ? 1 : 0,
        //transform: visibleSections['hero'] ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }}>
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className="text-8xl font-display font-black mb-12 tracking-tight text-paper-black"
            style={{
              lineHeight: '0.95'
            }}
          >
            Hammad<br/>Khan
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
                className="text-forest-green hover:text-my-amber transition-colors"
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
              <h2 className="mb-12">
                Hello!
              </h2>

            <div className="space-y-10">
              <p className="max-w-xl">
                I'm a software engineer and tech enthusiast<br/>
                based in San Francisco, CA.<br/>
              </p>

              <p className="max-w-xl">
                I began my career in computer engineering,<br/>
                driven by a deep curiosity to understand<br/>
                systems from the ground up.
              </p>

              <p className="max-w-xl">
                From learning how flip-flops store bits<br/>
                to designing operating systems,<br/>
                I've always been fascinated by the architecture<br/>
                and inner workings of complex systems.
              </p>

              <p className="max-w-xl">
                Today, I'm especially interested in evolving AI<br/>
                technologies, and I'm excited to build novel,<br/>
                impactful systems supercharged with the power of AI.
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

          <h2 className="mb-12">
            Backstory
          </h2>

          <div className="space-y-10">
            <p className="max-w-xl">
              I studied Computer Engineering at the University of Illinois at<br/>
              Urbana–Champaign, where I focused on computer architecture,<br/>
              embedded systems, and digital design.
            </p>

            <p className="max-w-xl">
              In 2019, I joined Cisco Meraki as a firmware engineer, working<br/>
              on large-scale networking systems. I was an early member of<br/>
              the team that launched a new Meraki switching product line<br/>
              and helped scale it to over 400,000 deployed switches worldwide.
            </p>

            <p className="max-w-xl">
              Over 5+ years, I contributed to firmware development across<br/>
              switches, wireless access points, and security appliances,<br/>
              delivering cross-platform architectures, improving system<br/>
              resilience, and enabling new hardware generations used globally.
            </p>

            <p className="max-w-xl">
              In mid-2025, I joined Tamarind Bio as a Founding Software<br/>
              Engineer. Tamarind builds an AI-powered platform for<br/>
              intelligent protein design, and I work across the stack to build<br/>
              the cloud backend, platform architecture, developer tooling, and<br/>
              product interfaces used by scientists and biotech companies.
            </p>

            <p className="max-w-xl">
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

          <h2 className="mb-12">
            Writing
          </h2>

          <div className="space-y-10">
            {posts.map((post, idx) => {
              const isExternal = post.type === "external";
              const Wrapper = isExternal ? 'a' : Link;
              const linkProps = isExternal
                ? { href: post.link, target: "_blank", rel: "noopener noreferrer" }
                : { to: `/posts/${post.slug}` };
              return (
                <Wrapper
                  key={idx}
                  {...linkProps}
                  className="block group"
                >
                  <h3 className="mb-3 group-hover:text-my-amber transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-forest-green" style={{ fontFamily: "'Crimson Text', serif" }}>
                    <span>{post.platform}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </Wrapper>
              );
            })}
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

          <h2 className="mb-12">
            Let's connect
          </h2>

          <p className="mb-16 max-w-md">
            Always interested in new opportunities, collaborations, or just talking tech.
          </p>

          <div className="flex gap-6">
            <a
              href="mailto:h7k237@gmail.com"
              className="text-sm font-semibold text-forest-green hover:text-my-amber transition-colors"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/hammadkhan97/"
              target="_blank"
              className="text-sm font-semibold text-forest-green hover:text-my-amber transition-colors"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalBrandV2;
