import Image from 'next/image';
import dashboard1 from '../assets/Frame 1707479353.png';
import dashboard2 from '../assets/Frame 1707479353-1.png';

const DashboardFeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 items-start w-full max-w-[1200px]">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Dashboard Image */}
            <div className="mb-10 flex justify-start">
              <Image 
                src={dashboard1}
                alt="Financial Dashboard"
                width={540}
                height={430}
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h3 className="mb-10 leading-[1.2]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-[#A0A0A0] text-[40px] font-normal leading-[1.2]">Lorem Ipsum </span>
              <span className="text-white text-[40px] font-bold leading-[1.2]">Dolar Sed<br/>congue</span>
            </h3>

            {/* Feature List */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  {/* Checkmark Icon */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: '#282828',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="#ECEDEE"
                        strokeWidth={2.5}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Feature Text */}
                  <p 
                    className="text-[15px] leading-[1.8] flex-1"
                    style={{ 
                      fontFamily: 'DM Sans, sans-serif',
                      color: '#FFFFFF'
                    }}
                  >
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Dashboard Image */}
            <div className="mb-10 flex justify-start">
              <Image 
                src={dashboard2}
                alt="Dashboard Overview"
                width={540}
                height={430}
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h3 className="mb-10 leading-[1.2]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-[#A0A0A0] text-[40px] font-normal leading-[1.2]">Lorem Ipsum </span>
              <span className="text-white text-[40px] font-bold leading-[1.2]">Dolar Sed<br/>congue</span>
            </h3>

            {/* Feature List */}
            <div className="space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  {/* Checkmark Icon */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: '#282828',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="#ECEDEE"
                        strokeWidth={2.5}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Feature Text */}
                  <p 
                    className="text-[15px] leading-[1.8] flex-1"
                    style={{ 
                      fontFamily: 'DM Sans, sans-serif',
                      color: '#FFFFFF'
                    }}
                  >
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeaturesSection;

