
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-6xl font-bold text-[#d1d1d1] leading-tight mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Lorem ipsum dolor sit amet consectetur
        </h1>

        {/* Description */}
        <p className="text-lg text-[#a0a0a0] leading-relaxed mb-12 max-w-[700px] mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est
          vivamus mauris fames et. Sed lacus purus in tellus.
        </p>

        {/* CTA Button */}
        <button className="bg-[#e8e8e8] text-[#1a1a1a] px-12 py-3.5 rounded-full font-medium hover:bg-white transition-all" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;

