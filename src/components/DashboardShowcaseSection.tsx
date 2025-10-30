import Image from 'next/image';
import dashboardImage from '../assets/Frame 1707479353.png';

const DashboardShowcaseSection = () => {
  return (
    <section className="py-32 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Centered Heading */}
        <h2 
          className="text-center font-bold mb-20 leading-[1.2]"
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '40px',
            color: '#FFFFFF'
          }}
        >
          Lorem ipsum dolor
        </h2>

        {/* Two Column Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-[350px_1fr] gap-8 items-center w-full max-w-[1100px]">
            {/* Left: Feature List */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div 
                className="px-5 py-5 rounded-xl"
                style={{
                  backgroundColor: 'rgba(40, 40, 40, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h3 
                  className="font-bold mb-2"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    color: '#FFFFFF'
                  }}
                >
                  Feature 1
                </h3>
                <p 
                  className="text-[13px] leading-[1.7]"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    color: '#FFFFFF'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>

              {/* Feature 2 */}
              <div 
                className="px-5 py-5 rounded-xl"
                style={{
                  backgroundColor: 'rgba(40, 40, 40, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h3 
                  className="font-bold mb-2"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    color: '#FFFFFF'
                  }}
                >
                  Feature 2
                </h3>
                <p 
                  className="text-[13px] leading-[1.7]"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    color: '#FFFFFF'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>

              {/* Feature 3 */}
              <div 
                className="px-5 py-5 rounded-xl"
                style={{
                  backgroundColor: 'rgba(40, 40, 40, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h3 
                  className="font-bold mb-2"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    color: '#FFFFFF'
                  }}
                >
                  Feature 3
                </h3>
                <p 
                  className="text-[13px] leading-[1.7]"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    color: '#FFFFFF'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>
            </div>

            {/* Right: Dashboard Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full">
                <Image 
                  src={dashboardImage}
                  alt="Financial Dashboard"
                  className="w-full h-auto rounded-xl"
                  style={{
                    filter: 'drop-shadow(0px 25px 60px rgba(0, 0, 0, 0.5))'
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcaseSection;

