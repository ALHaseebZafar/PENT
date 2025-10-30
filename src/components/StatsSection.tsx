import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-[56px] font-bold text-white leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Lorem ipsum dolor sit amet<br />consectetur.
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="flex justify-center gap-[10px]">
          {[1, 2, 3].map((item) => (
            <div key={item} style={{ width: '317.33px' }}>
              {/* Card with 23% */}
              <div 
                className="rounded-3xl mb-5 flex items-center justify-center"
                style={{ 
                  width: '317.33px',
                  height: '200px',
                  backgroundColor: '#282828',
                  backdropFilter: 'blur(86.5px)',
                  WebkitBackdropFilter: 'blur(86.5px)',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(#282828, #282828), linear-gradient(180.42deg, #505050 0.37%, rgba(80, 80, 80, 0) 45.29%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '96px',
                    lineHeight: '1',
                    letterSpacing: '0.005em',
                    background: 'linear-gradient(166.07deg, #7E7E7E 16.41%, #FFFFFF 97.61%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    MozBackgroundClip: 'text',
                    MozTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  23%
                </span>
              </div>
              {/* Text below card */}
              <p className="text-[13px] text-gray-500 leading-relaxed text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Consequat natus <span className="font-semibold text-white">consequat</span> tortor vitae cursus nullam tincidunt urna. <span className="font-semibold text-white">Tristique</span> leo
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

