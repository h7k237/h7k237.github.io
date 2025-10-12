import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code2, Briefcase, FileText } from 'lucide-react';

export default function PersonalBrand() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const posts = [
    {
      title: "Building Scalable React Applications",
      platform: "LinkedIn",
      excerpt: "Deep dive into architecture patterns that scale...",
      date: "2025-10-05",
      link: "#"
    },
    {
      title: "The Future of Frontend Development",
      platform: "LinkedIn",
      excerpt: "Exploring emerging trends in web development...",
      date: "2025-09-28",
      link: "#"
    },
    {
      title: "Performance Optimization Techniques",
      platform: "LinkedIn",
      excerpt: "How I reduced bundle size by 40% in production...",
      date: "2025-09-15",
      link: "#"
    }
  ];

  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "React-based analytics platform serving 10K+ users",
      tech: ["React", "TypeScript", "D3.js"]
    },
    {
      title: "Design System",
      description: "Component library powering multiple products",
      tech: ["React", "Storybook", "Tailwind"]
    },
    {
      title: "Real-time Collaboration Tool",
      description: "WebSocket-powered editing experience",
      tech: ["React", "Node.js", "WebRTC"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-yass-queen to-sister-sister bg-clip-text text-transparent">
            Hammad Khan
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#posts" className="hover:text-blue-600 transition-colors">Posts</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="mb-8 transition-all duration-1000"
            style={{
              opacity: 1 - scrollY / 500,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yass-queen via-sister-sister to-crown-yellow bg-clip-text text-transparent">
              Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Building with depth, speed and purpose
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From computer engineering and firmware development to now building full-stack cloud systems for modern AI-driven products.
            </p>
          </div>

          <div className="flex gap-4 justify-center mb-12">
            <a
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-yass-queen to-sister-sister rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={20} />
            </a>
            <a
              href="#about" 
              className="px-8 py-3 border border-gray-600 hover:border-sister-sister rounded-lg font-semibold transition-all"
            >
              About Me
            </a>
          </div>

          <div className="flex gap-6 justify-center text-gray-400">
            <a href="https://www.linkedin.com/in/hammadkhan97/" className="hover:text-blue-600 transition-colors transform hover:scale-110" target="_blank">
              <Linkedin size={24} />
            </a>
            <a href="mailto:h7k237@gmail.com" className="hover:text-blue-600 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="https://www.github.com/h7k237" className="hover:text-blue-600 transition-colors transform hover:scale-110" target="_blank">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-blue-400" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div className="flex justify-center items-start">
              <div className="relative group">
                <img
                  src="/src/assets/profile.jpg"
                  alt="Profile"
                  className="w-80 h-80 object-cover rounded-2xl border-4 border-gray-700 group-hover:border-blue-400 transition-all duration-300 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I began my career in computer engineering, driven by a deep curiosity to understand systems from the ground up. From learning how flip-flops store bits to designing operating systems, I’ve always been fascinated by the architecture and inner workings of complex systems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Cisco Meraki, I helped develop and scale high-quality networking systems. My work focused on architecting and delivering solutions that enabled complex, cross-platform integrations in a fast-evolving marketplace. 
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Over time, I wanted to move further up the stack to see how software systems create real-world impact. That led me to Tamarind Bio, where I’ve translated my low-level engineering discipline into building full-stack, cloud-native AI platforms for protein design. Our goal is to deliver powerful tools that accelerate scientific discovery in one of the most meaningful domains today.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I’m deeply passionate about how evolving AI technologies will shape the future of engineering, and I’m excited to play a part in building systems that bring that future closer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section
      <section id="work" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-purple-400" size={32} />
            <h2 className="text-4xl font-bold">Featured Work</h2>
          </div>

          <div className="grid gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-purple-400 transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      {/* Posts Section */}
      <section id="posts" className="py-32 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="text-pink-400" size={32} />
            <h2 className="text-4xl font-bold">Latest Posts</h2>
          </div>

          <div className="grid gap-6">
            {posts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                className="block p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-pink-400 transition-all transform hover:translate-x-2"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-400 mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-blue-400 text-sm">
                  <Linkedin size={16} />
                  <span>Read on {post.platform}</span>
                  <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            Always interested in new opportunities, collaborations, or just talking tech.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:h7k237@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-yass-queen to-sister-sister rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/hammadkhan97/"
              className="px-8 py-4 border border-gray-600 hover:border-sister-sister rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              target="_blank"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500">
        <p>© 2025 Hammad Khan</p>
      </footer>
    </div>
  );
}
