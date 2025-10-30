import Image from 'next/image';
import unionImage from '../assets/Union.png';

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div 
          className="max-w-[920px] mx-auto text-center px-16 py-14 rounded-2xl relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(30, 30, 30, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Union Background Decoration */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <Image
              src={unionImage}
              alt="Background Decoration"
              fill
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
          {/* Content - positioned above background */}
          <div className="relative z-10">
            {/* Heading */}
            <h2 
              className="font-bold mb-5 leading-[1.2]"
              style={{ 
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '42px',
                color: '#CCCCCC'
              }}
            >
              Ready to get started?
            </h2>

            {/* Description */}
            <p 
              className="leading-[1.8] mb-8 max-w-[680px] mx-auto"
              style={{ 
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: '#808080'
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus. Egestas facilisi neque a arcu vitae dignissim. Sit lobortis orci risus volutpat eu habitasse.
            </p>

            {/* CTA Button */}
            <button 
              className="px-8 py-3 rounded-full text-white font-semibold transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px'
              }}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

