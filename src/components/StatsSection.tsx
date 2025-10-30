import Image from 'next/image';
import unionImage from '../assets/Union.png';

const StatsSection = () => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 
            className="text-[40px] font-bold leading-tight" 
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              color: '#CCCCCC'
            }}
          >
            Lorem ipsum dolor sit amet<br />consectetur.
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="flex justify-center gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-[320px]">
              {/* Card with 23% */}
              <div 
                className="rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden"
                style={{ 
                  width: '100%',
                  height: '190px',
                  backgroundColor: '#282828',
                  backdropFilter: 'blur(86.5px)',
                  WebkitBackdropFilter: 'blur(86.5px)',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(#282828, #282828), linear-gradient(180deg, #505050 0%, rgba(80, 80, 80, 0) 50%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box'
                }}
              >
                {/* Union Background Image */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <Image
                    src={unionImage}
                    alt=""
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                
                {/* 23% Text with gradient */}
                <span 
                  className="relative z-10"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '88px',
                    lineHeight: '1',
                    background: 'linear-gradient(166deg, #7E7E7E 16%, #FFFFFF 98%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  23%
                </span>
              </div>
              {/* Text below card */}
              <p 
                className="text-[12px] leading-[1.7] text-center px-2" 
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#FFFFFF'
                }}
              >
                Consequat natus <span className="font-semibold">consequat</span> tortor vitae cursus nullam tincidunt urna. <span className="font-semibold">Tristique</span> leo
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

