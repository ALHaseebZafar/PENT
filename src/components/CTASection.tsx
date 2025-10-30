
const CTASection = () => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div 
          className="max-w-[900px] mx-auto text-center p-16 rounded-3xl"
          style={{
            backgroundColor: 'rgba(30, 30, 30, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Heading */}
          <h2 
            className="text-white text-[48px] font-bold mb-6 leading-[1.2]"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Ready to get started?
          </h2>

          {/* Description */}
          <p 
            className="text-[#9CA3AF] text-[16px] leading-[1.7] mb-8 max-w-[700px] mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus. Egestas facilisi neque a arcu vitae dignissim. Sit lobortis orci risus volutpat eu habitasse.
          </p>

          {/* CTA Button */}
          <button 
            className="px-8 py-3 rounded-full text-white font-semibold text-[15px] transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
              fontFamily: 'DM Sans, sans-serif'
            }}
          >
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

