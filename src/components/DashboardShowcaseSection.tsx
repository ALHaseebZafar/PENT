import Image from 'next/image';
import dashboardImage from '../assets/Frame 1707479353.png';

const DashboardShowcaseSection = () => {
  return (
    <section className="py-32 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Centered Heading */}
        <h2 
          className="text-center text-white text-[48px] font-bold mb-24 leading-[1.2]"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Lorem ipsum dolor
        </h2>

        {/* Two Column Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-[380px_1fr] gap-6 items-center w-full max-w-[1300px]">
            {/* Left: Feature List */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div 
                className="px-6 py-6 rounded-xl"
                style={{
                  backgroundColor: 'rgba(40, 40, 40, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h3 
                  className="text-white text-[16px] font-bold mb-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Feature 1
                </h3>
                <p 
                  className="text-[#808080] text-[13px] leading-[1.8]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>

              {/* Feature 2 */}
              <div 
                className="px-6 py-6 rounded-xl"
                style={{
                  backgroundColor: 'rgba(40, 40, 40, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h3 
                  className="text-white text-[16px] font-bold mb-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Feature 2
                </h3>
                <p 
                  className="text-[#808080] text-[13px] leading-[1.8]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>

              {/* Feature 3 */}
              <div 
                className="px-6 py-6 rounded-xl"
                style={{
                  backgroundColor: 'rgba(40, 40, 40, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h3 
                  className="text-white text-[16px] font-bold mb-2.5"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Feature 3
                </h3>
                <p 
                  className="text-[#808080] text-[13px] leading-[1.8]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
                </p>
              </div>
            </div>

            {/* Right: Dashboard Image */}
            <div className="flex justify-end">
              <div className="relative">
                <Image 
                  src={dashboardImage}
                  alt="Financial Dashboard"
                  width={650}
                  height={520}
                  className="object-contain rounded-2xl"
                  style={{
                    filter: 'drop-shadow(0px 30px 80px rgba(0, 0, 0, 0.6))'
                  }}
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

