import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-[480px_1fr] gap-20">
          {/* Left: Text & Lock Image */}
          <div>
            <h3 className="text-[48px] font-bold text-white mb-6 leading-[1.2]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Lorem Ipsum<br />Dollar
            </h3>
            <p className="text-gray-500 text-[14px] leading-[1.8] mb-24" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Consequat natus consequat tortor<br/>
              vitae cursus nullam tincidunt<br/>
              urna. Tristique leo consequat
            </p>
            
            {/* 3D Lock Image */}
            <div className="flex justify-center items-center">
              <div 
                className="relative"
                style={{ 
                  width: '265px',
                  height: '265px',
                  transform: 'rotate(-175.25deg)'
                }}
              >
                {/* Lock Shackle (U-shape) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32">
                  <svg viewBox="0 0 120 80" className="w-full h-auto">
                    <defs>
                      <linearGradient id="shackleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#2f3238' }} />
                        <stop offset="50%" style={{ stopColor: '#1f2228' }} />
                        <stop offset="100%" style={{ stopColor: '#15181d' }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 25 70 L 25 30 Q 25 5, 60 5 Q 95 5, 95 30 L 95 70"
                      fill="none"
                      stroke="url(#shackleGrad2)"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                
                {/* Lock Body */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-56">
                  <div 
                    className="w-full h-full rounded-[45px] relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, #1a1d22 0%, #0f1115 50%, #050608 100%)',
                      boxShadow: `
                        0 30px 60px rgba(0, 0, 0, 0.8),
                        inset -4px -4px 12px rgba(255, 255, 255, 0.02),
                        inset 4px 4px 12px rgba(0, 0, 0, 0.7)
                      `
                    }}
                  >
                    {/* Top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/[0.02] to-transparent rounded-t-[45px]"></div>
                    
                    {/* Left edge highlight */}
                    <div className="absolute top-0 left-0 bottom-0 w-5 bg-gradient-to-r from-white/[0.015] to-transparent rounded-l-[45px]"></div>
                    
                    {/* Lock detail lines */}
                    <div className="absolute bottom-20 left-14 right-14 space-y-4">
                      <div className="h-[2.5px] bg-gradient-to-r from-transparent via-white/8 to-transparent rounded-full"></div>
                      <div className="h-[2.5px] bg-gradient-to-r from-transparent via-white/8 to-transparent rounded-full"></div>
                      <div className="h-[2.5px] bg-gradient-to-r from-transparent via-white/8 to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards Grid */}
          <div className="space-y-5">
            {/* Row 1: 2 equal cards */}
            <div className="grid grid-cols-2 gap-5">
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                }
              />
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                }
              />
            </div>

            {/* Row 2: Fingerprint (wider) + Shield (narrower) */}
            <div className="grid grid-cols-[1.8fr_1fr] gap-5">
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                }
              />
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                }
              />
            </div>

            {/* Row 3: 2 equal cards */}
            <div className="grid grid-cols-2 gap-5">
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                }
              />
              <FeatureCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
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

const FeatureCard = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div 
      className="rounded-[24px] backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-10 h-full flex flex-col items-center justify-center min-h-[160px]"
      style={{
        backgroundColor: '#2C2C2C',
        border: '1px solid transparent',
        backgroundImage: 'linear-gradient(#2C2C2C, #2C2C2C), linear-gradient(180.42deg, #505050 0.37%, rgba(80, 80, 80, 0) 45.29%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box'
      }}
    >
      <div className="flex items-center justify-center mb-5 text-white">
        {icon}
      </div>
      <h4 className="text-center text-[16px] font-bold text-white leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        Lorem Ipsum<br />Dollar
      </h4>
    </div>
  );
};

export default FeaturesSection;

