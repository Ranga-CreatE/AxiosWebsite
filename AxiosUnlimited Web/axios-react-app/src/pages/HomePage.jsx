import React from 'react';
import StatCard from '../components/StatCard';

export const HomePage = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10 blur-2xl animate-pulse" style={{backgroundImage: 'radial-gradient(circle at center, #C9A24A, transparent)'}}></div>
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(201, 162, 74, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 162, 74, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
          <div className="absolute inset-0" style={{background: 'radial-gradient(circle at center, transparent 0%, #0A0A0A 80%)'}}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <div className="inline-block mb-6 px-4 py-2 border border-gold/30 rounded-full bg-gold/5 animate-fade-up">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] gold-gradient-text">Institutional Excellence</span>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl mb-8 leading-tight tracking-tight text-white animate-fade-up delay-1">
            Building <span className="gold-gradient-text">Governance</span><br />
            Driven Organizations
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-12 text-gray-400 font-light leading-relaxed animate-fade-up delay-2">
            Axios Unlimited pioneers the intersection of <span className="text-white font-medium">Spatial Computing</span> and 
            <span className="text-white font-medium"> Strategic HR</span> to build the institutions of tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up delay-3">
            <button className="hero-btn-primary">
              Schedule Consultation
            </button>
            <button className="hero-btn-secondary">
              Explore Framework
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 animate-bounce">
          <span className="text-[9px] uppercase tracking-[0.3em] mb-2">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative overflow-hidden bg-black py-32 border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] gold-gradient-text">Institutional Architecture</span>
            </div>
            <h2 className="font-heading text-5xl md:text-7xl text-white leading-tight">
              The <span className="gold-gradient-text">Axios</span> Legacy
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8 animate-fade-up">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-200 font-light">
                Axios Unlimited is a premier enterprise focused on the <span className="text-gold font-medium">architecture of progress</span>—bridging human capital and technological innovation.
              </p>
              <div className="space-y-6 text-gray-400 leading-loose border-l-2 border-gold/20 pl-8">
                <p>
                  Registered in Zimbabwe and operating globally, we design governance-driven ecosystems that enable institutions to achieve sovereign performance and market scalability.
                </p>
                <p>
                  Our methodology integrates <span className="text-white">Spatial Intelligence</span> with <span className="text-white">Structured Governance</span> to solve complex organizational challenges.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 animate-fade-up delay-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StatCard label="Specialized Units" sublabel="Core Practices" />
                <StatCard label="Global Impact" sublabel="Institutions Served" />
                <StatCard label="Expert Network" sublabel="Specialist Teams" />
                <StatCard label="Strategic Scope" sublabel="Industry Sectors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practices Preview Section */}
      <section className="relative bg-black py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
              Specialized <span className="gold-gradient-text">Practices</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Axios Unlimited delivers its work through specialized practices focused on institutional development and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Axios People',
                subtitle: 'HUMAN CAPITAL',
                description: 'Designing governance-driven systems aligning strategy, structure, and performance for sustainable growth.'
              },
              {
                title: 'Axios Systems',
                subtitle: 'DIGITAL PLATFORMS',
                description: 'Tech platforms including HRIS and digital solutions for organizational excellence.'
              },
              {
                title: 'Axios XR',
                subtitle: 'IMMERSIVE TECH',
                description: 'VR/AR training and simulation to enhance organizational learning.'
              },
              {
                title: 'Axios Agro',
                subtitle: 'AGRICULTURAL INNOVATION',
                description: 'Tech-enabled agriculture for sustainable productivity.'
              }
            ].map((practice, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-black text-gold mb-2">{practice.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">{practice.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
