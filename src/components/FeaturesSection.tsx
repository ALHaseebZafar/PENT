import Image from 'next/image';
import lockImage from '../assets/lock_front.png';

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-[480px_1fr] gap-20 items-start w-full max-w-[1300px]">
          {/* Left: Text & Lock Image */}
          <div className="flex flex-col">
            <h3 className="text-[48px] font-bold text-white mb-6 leading-[1.2]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Lorem Ipsum<br />Dollar
            </h3>
            <p className="text-[#808080] text-[14px] leading-[1.8] mb-16" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Consequat natus consequat tortor<br/>
              vitae cursus nullam tincidunt<br/>
              urna. Tristique leo consequat
            </p>
            
            {/* 3D Lock Image */}
            <div className="flex items-center mt-auto">
              <Image 
                src={lockImage}
                alt="Lock" 
                width={265}
                height={265}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Feature Cards Grid */}
          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, auto)' }}>
            {/* Row 1, Col 1-2: Lock */}
            <div style={{ gridColumn: 'span 2' }}>
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                }
              />
            </div>
            
            {/* Row 1, Col 3-4: Pen */}
            <div style={{ gridColumn: 'span 2' }}>
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                }
              />
            </div>
            
            {/* Row 2, Col 1-2: Fingerprint */}
            <div style={{ gridColumn: 'span 2' }}>
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                }
              />
            </div>
            
            {/* Row 2-3, Col 3-4: Shield (tall card spanning 2 rows) */}
            <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <FeatureCard
                tall
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                }
              />
            </div>
            
            {/* Row 3, Col 1: Checkmark */}
            <FeatureCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              }
            />
            
            {/* Row 3, Col 2: Brick wall */}
            <FeatureCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              }
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, tall }: { icon: React.ReactNode; tall?: boolean }) => {
  return (
    <div 
      className="backdrop-blur-[2.62px] transition-all duration-300 p-10 flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#282828',
        borderRadius: '15.7px',
        border: '1.30833px solid transparent',
        backgroundImage: 'linear-gradient(#282828, #282828), linear-gradient(151.563deg, #3D3D3D 12.56%, rgba(160, 160, 160, 0.04) 82.3502%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        height: tall ? 'calc(334px)' : '157px'
      }}
    >
      <div className="flex items-center justify-center mb-5" style={{ color: '#ECEDEE' }}>
        {icon}
      </div>
      <h4 className="text-center text-[16px] font-bold leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', color: '#ECEDEE' }}>
        Lorem Ipsum<br />Dollar
      </h4>
    </div>
  );
};

export default FeaturesSection;

