import Image from 'next/image';
import angularGradient from '../assets/Angular gradient 1st version.png';
import dashboardImage from '../assets/Dashboard.png';

const SupportersSection = () => {
  return (
    <section className="relative z-10">
      {/* Angular Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={angularGradient}
          alt="Background Gradient"
          fill
          className="object-cover"
          style={{ objectPosition: 'center' }}
          priority
        />
      </div>
      
      <div className="py-16 px-4 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Our Supporters */}
          <div className="text-center mb-32">
            <h2 className="text-white text-xl font-semibold mb-12">Our Supporters</h2>
            <div className="flex items-center justify-center gap-20">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="text-gray-500 text-sm font-medium"
                >
                  Supporter-logo
                </div>
              ))}
            </div>
          </div>

          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white leading-tight mb-5">
              Lorem ipsum dolor sit amet<br />consectetur.
            </h2>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
            </p>
          </div>

          {/* Dashboard Image */}
          <div className="relative max-w-[1000px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <Image
                src={dashboardImage}
                alt="Financial Dashboard"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
