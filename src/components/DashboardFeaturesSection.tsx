import Image from 'next/image';
import dashboard1 from '../assets/Frame 1707479353.png';
import dashboard2 from '../assets/Frame 1707479353-1.png';
import ellipse from '../assets/Ellipse 349.svg';

const DashboardFeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-center  relative">
          <div className="grid grid-cols-2 gap-4 items-start w-full max-w-[1200px] relative z-10">
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
              <h3
                className="mb-10"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  width: '446px',
                  lineHeight: '1.2',
                  opacity: 1
                }}
              >
                <span style={{ color: '#A0A0A0', fontSize: '40px', fontWeight: 400 }}>Lorem Ipsum </span>
                <span style={{ color: '#FFFFFF', fontSize: '40px', fontWeight: 700 }}>Dolar Sed<br />congue</span>
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
                      className="flex-1"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#D0D0D0'
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
              <h3
                className="mb-10"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  width: '446px',
                  lineHeight: '1.2',
                  opacity: 1
                }}
              >
                <span style={{ color: '#A0A0A0', fontSize: '40px', fontWeight: 400 }}>Lorem Ipsum </span>
                <span style={{ color: '#FFFFFF', fontSize: '40px', fontWeight: 700 }}>Dolar Sed<br />congue</span>
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
                      className="flex-1"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#D0D0D0'
                      }}
                    >
                      Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute left-0 right-0 flex justify-center bottom-[-130px] z-0">
            <Image
              src={ellipse}
              alt="Decorative Divider"
              className="w-full h-auto"
              style={{ maxWidth: '1500px' }}
            />
          </div>

        </div>

        {/* Ellipse Divider with Decorative Dots & Gradient */}
        <div className="relative mt-32 w-full" style={{ height: '450px', overflow: 'visible' }}>
      

          {/* Background Gradient - Below ellipse */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 1200px 500px at 50% 25%, rgba(35, 35, 35, 0.5) 0%, rgba(20, 20, 20, 0.3) 40%, transparent 70%)',
              top: '80px',
              height: '400px',
              zIndex: 1
            }}
          />

          {/* Scattered Bubbles/Dots - Around and below ellipse curve */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
            {/* Row 1 - Top area (above curve) */}
            <div style={{ position: 'absolute', top: '15px', left: '10%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#555', opacity: 0.5, boxShadow: '0 0 6px rgba(85, 85, 85, 0.3)' }} />
            <div style={{ position: 'absolute', top: '22px', left: '18%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#5A5A5A', opacity: 0.6, boxShadow: '0 0 8px rgba(90, 90, 90, 0.4)' }} />
            <div style={{ position: 'absolute', top: '12px', left: '28%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#4D4D4D', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: '25px', left: '35%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#525252', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '18px', left: '45%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5D5D5D', opacity: 0.7, boxShadow: '0 0 10px rgba(93, 93, 93, 0.5)' }} />
            <div style={{ position: 'absolute', top: '20px', left: '52%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#4F4F4F', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '14px', left: '62%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#565656', opacity: 0.6, boxShadow: '0 0 8px rgba(86, 86, 86, 0.4)' }} />
            <div style={{ position: 'absolute', top: '23px', left: '70%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#4A4A4A', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: '16px', left: '78%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5F5F5F', opacity: 0.7, boxShadow: '0 0 10px rgba(95, 95, 95, 0.5)' }} />
            <div style={{ position: 'absolute', top: '19px', left: '88%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#545454', opacity: 0.5 }} />

            {/* Row 2 - Middle area (near curve) */}
            <div style={{ position: 'absolute', top: '42px', left: '8%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#515151', opacity: 0.6 }} />
            <div style={{ position: 'absolute', top: '38px', left: '15%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#565656', opacity: 0.7, boxShadow: '0 0 9px rgba(86, 86, 86, 0.4)' }} />
            <div style={{ position: 'absolute', top: '48px', left: '22%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#4A4A4A', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '45px', left: '32%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5D5D5D', opacity: 0.75, boxShadow: '0 0 11px rgba(93, 93, 93, 0.5)' }} />
            <div style={{ position: 'absolute', top: '40px', left: '40%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#525252', opacity: 0.6 }} />
            <div style={{ position: 'absolute', top: '50px', left: '48%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#585858', opacity: 0.7 }} />
            <div style={{ position: 'absolute', top: '43px', left: '56%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#4F4F4F', opacity: 0.6, boxShadow: '0 0 7px rgba(79, 79, 79, 0.4)' }} />
            <div style={{ position: 'absolute', top: '46px', left: '64%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5F5F5F', opacity: 0.8, boxShadow: '0 0 12px rgba(95, 95, 95, 0.5)' }} />
            <div style={{ position: 'absolute', top: '37px', left: '72%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#4C4C4C', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '44px', left: '80%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#575757', opacity: 0.7, boxShadow: '0 0 9px rgba(87, 87, 87, 0.4)' }} />
            <div style={{ position: 'absolute', top: '49px', left: '90%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#535353', opacity: 0.6 }} />

            {/* Row 3 - At ellipse curve (80px) */}
            <div style={{ position: 'absolute', top: '68px', left: '12%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#565656', opacity: 0.7, boxShadow: '0 0 10px rgba(86, 86, 86, 0.5)' }} />
            <div style={{ position: 'absolute', top: '72px', left: '20%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#505050', opacity: 0.6 }} />
            <div style={{ position: 'absolute', top: '75px', left: '28%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5C5C5C', opacity: 0.75, boxShadow: '0 0 11px rgba(92, 92, 92, 0.5)' }} />
            <div style={{ position: 'absolute', top: '70px', left: '38%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#4B4B4B', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '78px', left: '46%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#585858', opacity: 0.7 }} />
            <div style={{ position: 'absolute', top: '73px', left: '54%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5F5F5F', opacity: 0.8, boxShadow: '0 0 12px rgba(95, 95, 95, 0.6)' }} />
            <div style={{ position: 'absolute', top: '69px', left: '62%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#525252', opacity: 0.6 }} />
            <div style={{ position: 'absolute', top: '76px', left: '70%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#575757', opacity: 0.7, boxShadow: '0 0 10px rgba(87, 87, 87, 0.5)' }} />
            <div style={{ position: 'absolute', top: '74px', left: '80%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#535353', opacity: 0.6 }} />
            <div style={{ position: 'absolute', top: '71px', left: '88%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5E5E5E', opacity: 0.75 }} />

            {/* Row 4 - Below curve (100-140px) */}
            <div style={{ position: 'absolute', top: '105px', left: '10%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#4F4F4F', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '115px', left: '18%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#545454', opacity: 0.6, boxShadow: '0 0 8px rgba(84, 84, 84, 0.4)' }} />
            <div style={{ position: 'absolute', top: '108px', left: '26%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#4A4A4A', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: '120px', left: '35%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5A5A5A', opacity: 0.7, boxShadow: '0 0 10px rgba(90, 90, 90, 0.5)' }} />
            <div style={{ position: 'absolute', top: '110px', left: '44%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#505050', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '125px', left: '52%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#555555', opacity: 0.6, boxShadow: '0 0 9px rgba(85, 85, 85, 0.4)' }} />
            <div style={{ position: 'absolute', top: '112px', left: '60%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#4D4D4D', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '118px', left: '68%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5B5B5B', opacity: 0.7 }} />
            <div style={{ position: 'absolute', top: '130px', left: '76%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#484848', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: '107px', left: '84%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#535353', opacity: 0.6, boxShadow: '0 0 8px rgba(83, 83, 83, 0.4)' }} />

            {/* Row 5 - Further below (150-190px) */}
            <div style={{ position: 'absolute', top: '155px', left: '15%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#4C4C4C', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: '165px', left: '25%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#515151', opacity: 0.5, boxShadow: '0 0 7px rgba(81, 81, 81, 0.3)' }} />
            <div style={{ position: 'absolute', top: '172px', left: '35%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#474747', opacity: 0.3 }} />
            <div style={{ position: 'absolute', top: '160px', left: '45%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#565656', opacity: 0.6, boxShadow: '0 0 9px rgba(86, 86, 86, 0.4)' }} />
            <div style={{ position: 'absolute', top: '178px', left: '55%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#4A4A4A', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: '168px', left: '65%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#505050', opacity: 0.5 }} />
            <div style={{ position: 'absolute', top: '175px', left: '75%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#4D4D4D', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: '158px', left: '85%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#555555', opacity: 0.6, boxShadow: '0 0 8px rgba(85, 85, 85, 0.3)' }} />

            {/* Row 6 - Deep below (210-250px) */}
            <div style={{ position: 'absolute', top: '215px', left: '12%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#484848', opacity: 0.3 }} />
            <div style={{ position: 'absolute', top: '225px', left: '22%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#454545', opacity: 0.25 }} />
            <div style={{ position: 'absolute', top: '220px', left: '32%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#4D4D4D', opacity: 0.4, boxShadow: '0 0 6px rgba(77, 77, 77, 0.2)' }} />
            <div style={{ position: 'absolute', top: '235px', left: '42%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#494949', opacity: 0.3 }} />
            <div style={{ position: 'absolute', top: '228px', left: '52%', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#525252', opacity: 0.5, boxShadow: '0 0 8px rgba(82, 82, 82, 0.3)' }} />
            <div style={{ position: 'absolute', top: '240px', left: '62%', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: '#464646', opacity: 0.25 }} />
            <div style={{ position: 'absolute', top: '218px', left: '72%', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#4E4E4E', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: '232px', left: '82%', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: '#4A4A4A', opacity: 0.3 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeaturesSection;

