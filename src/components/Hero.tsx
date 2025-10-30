
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Grid Background - Only in Hero, starts below header */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center',
          zIndex: 0
        }}
      />
      <div className="max-w-[900px] mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 
          className="font-bold leading-[1.2] mb-6" 
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '56px',
            color: '#C4C4C4',
            letterSpacing: '-0.02em'
          }}
        >
          Lorem ipsum dolor sit amet<br />consectetur
        </h1>

        {/* Description */}
        <p 
          className="leading-[1.7] mb-12 max-w-[620px] mx-auto" 
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#8A8A8A'
          }}
        >
          Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est<br />vivamus mauris fames et. Sed lacus purus in tellus.
        </p>

        {/* CTA Button */}
        <button 
          className="px-11 py-3.5 rounded-full font-medium hover:bg-white transition-all" 
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            backgroundColor: '#E8E8E8',
            color: '#1A1A1A',
            fontWeight: 500
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;

