import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Floyd Miles",
      text: "Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis. Ornare at turpis purus leo metus arcu arcu sed faucibus.",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Esther Howard",
      text: "Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit.",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Erat consectetur",
      text: "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit. Ac enim odio id accumsan pretium quisque venenatis suscipit lobortis.",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    {
      name: "Mauris pulvinar",
      text: "Quis ultricies molestie massa convallis lectus orci. Accumsan vulputate tempor dapibus.",
      avatar: "https://i.pravatar.cc/150?img=29"
    },
    {
      name: "Aliquet rhoncus",
      text: "Urna pellentesque in elementum lacus amet tristique nam elementum lacus urna quis odio. Posuere facilisi ultricies et donec mauris ornare interdum dui ut.",
      avatar: "https://i.pravatar.cc/150?img=45"
    },
    {
      name: "Egestas mauris",
      text: "Magna id ut eu amet blandit sit nisl lacus gravida. Massa praesent.",
      avatar: "https://i.pravatar.cc/150?img=44"
    },
    {
      name: "Placerat nisl",
      text: "Tristique nulla proin augue sit aliquam donec ornare. Aliquam diam egestas egestas feugiat lacinia. Facilisis sagittis nibh.",
      avatar: "https://i.pravatar.cc/150?img=26"
    },
    {
      name: "Magna tellus",
      text: "Leo praesent quisque placerat adipiscing eget sed rutrum pharetra. Tellus id vitae arcu lobortis. Elementum eu facilisi quam pellentesque volutpat. Dictum eleifend nunc semis.",
      avatar: "https://i.pravatar.cc/150?img=41"
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2 
          className="text-center font-bold mb-14 leading-[1.2]"
          style={{ 
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '40px',
            color: '#CCCCCC'
          }}
        >
          Tons of others love using PentAi.
        </h2>

        {/* Testimonials Grid - 2 Rows */}
        <div className="max-w-[1200px] mx-auto space-y-4">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Floyd Miles */}
            <div 
              className="md:col-span-1 p-5 rounded-xl"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <h3 
                  className="text-white text-[15px] font-semibold"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[0].name}
                </h3>
              </div>
              <p 
                className="text-[13px] leading-[1.7]"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#808080'
                }}
              >
                {testimonials[0].text}
              </p>
            </div>

            {/* Esther Howard */}
            <div 
              className="md:col-span-1 p-5 rounded-xl"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonials[1].avatar}
                  alt={testimonials[1].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <h3 
                  className="text-white text-[15px] font-semibold"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[1].name}
                </h3>
              </div>
              <p 
                className="text-[13px] leading-[1.7]"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#808080'
                }}
              >
                {testimonials[1].text}
              </p>
            </div>

            {/* Erat consectetur */}
            <div 
              className="md:col-span-1 p-5 rounded-xl"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonials[2].avatar}
                  alt={testimonials[2].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <h3 
                  className="text-white text-[15px] font-semibold"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[2].name}
                </h3>
              </div>
              <p 
                className="text-[13px] leading-[1.7]"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#808080'
                }}
              >
                {testimonials[2].text}
              </p>
            </div>

            {/* Mauris pulvinar */}
            <div 
              className="md:col-span-1 p-5 rounded-xl"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonials[3].avatar}
                  alt={testimonials[3].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <h3 
                  className="text-white text-[15px] font-semibold"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[3].name}
                </h3>
              </div>
              <p 
                className="text-[13px] leading-[1.7]"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#808080'
                }}
              >
                {testimonials[3].text}
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Aliquet rhoncus */}
            <div 
              className="md:col-span-1 p-5 rounded-xl"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonials[4].avatar}
                  alt={testimonials[4].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <h3 
                  className="text-white text-[15px] font-semibold"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[4].name}
                </h3>
              </div>
              <p 
                className="text-[13px] leading-[1.7]"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#808080'
                }}
              >
                {testimonials[4].text}
              </p>
            </div>

            {/* Egestas mauris */}
            <div 
              className="md:col-span-1 p-5 rounded-xl"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonials[5].avatar}
                  alt={testimonials[5].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <h3 
                  className="text-white text-[15px] font-semibold"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[5].name}
                </h3>
              </div>
              <p 
                className="text-[13px] leading-[1.7]"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#808080'
                }}
              >
                {testimonials[5].text}
              </p>
            </div>

            {/* Placerat nisl */}
            <div 
              className="md:col-span-1 p-5 rounded-xl"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonials[6].avatar}
                  alt={testimonials[6].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <h3 
                  className="text-white text-[15px] font-semibold"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[6].name}
                </h3>
              </div>
              <p 
                className="text-[13px] leading-[1.7]"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#808080'
                }}
              >
                {testimonials[6].text}
              </p>
            </div>

            {/* Magna tellus */}
            <div 
              className="md:col-span-1 p-5 rounded-xl"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={testimonials[7].avatar}
                  alt={testimonials[7].name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <h3 
                  className="text-white text-[15px] font-semibold"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {testimonials[7].name}
                </h3>
              </div>
              <p 
                className="text-[13px] leading-[1.7]"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#808080'
                }}
              >
                {testimonials[7].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

