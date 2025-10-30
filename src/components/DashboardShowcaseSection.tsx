import Image from 'next/image';
import dashboardImage from '../assets/Frame 1707479353.png';

const DashboardShowcaseSection = () => {
  return (
    <section className="py-28 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Centered Heading */}
        <h2 
          className="text-center font-bold mb-16 leading-[1.2]"
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '42px',
            color: '#E8E8E8',
            letterSpacing: '-0.01em'
          }}
        >
          Lorem ipsum dolor
        </h2>

        {/* Two Column Layout */}
        <div className="flex justify-center">
          <div className="grid items-center w-full" style={{ gridTemplateColumns: '320px 1fr', gap: '60px', maxWidth: '1100px' }}>
            {/* Left: Feature List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Feature 1 */}
              <div 
                style={{
                  backgroundColor: 'rgba(35, 35, 35, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  padding: '18px 20px'
                }}
              >
                <h3 
                  className="font-bold"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    marginBottom: '8px'
                  }}
                >
                  Feature 1
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: '#B8B8B8',
                    lineHeight: '1.6'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>

              {/* Feature 2 */}
              <div 
                style={{
                  backgroundColor: 'rgba(35, 35, 35, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  padding: '18px 20px'
                }}
              >
                <h3 
                  className="font-bold"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    marginBottom: '8px'
                  }}
                >
                  Feature 2
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: '#B8B8B8',
                    lineHeight: '1.6'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>

              {/* Feature 3 */}
              <div 
                style={{
                  backgroundColor: 'rgba(35, 35, 35, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  padding: '18px 20px'
                }}
              >
                <h3 
                  className="font-bold"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    color: '#FFFFFF',
                    marginBottom: '8px'
                  }}
                >
                  Feature 3
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: '#B8B8B8',
                    lineHeight: '1.6'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>
            </div>

            {/* Right: Dashboard Image */}
            <div className="flex justify-center items-center">
              <div className="relative" style={{ width: '100%' }}>
                <Image 
                  src={dashboardImage}
                  alt="Financial Dashboard"
                  className="w-full h-auto"
                  style={{
                    borderRadius: '14px',
                    filter: 'drop-shadow(0px 20px 60px rgba(0, 0, 0, 0.5))'
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

