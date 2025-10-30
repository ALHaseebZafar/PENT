
const SupportersSection = () => {
  return (
    <section className="relative z-10">
      {/* Top Gradient Band */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-400/20 via-gray-500/10 to-transparent pointer-events-none"></div>
      
      <div className="py-16 px-4 relative">
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

          {/* Dashboard Mockup */}
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Band */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-400/20 via-gray-500/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-[1100px] mx-auto">
      <div className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex" style={{ border: '3px solid rgba(255,255,255,0.8)' }}>
        {/* Left Sidebar */}
        <div className="w-[86px] bg-[#2C2C2C] flex flex-col items-center py-6 gap-6">
          {/* Logo/Icon */}
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full"></div>
          </div>
          {/* Home Icon - Active */}
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          {/* Grid Icon */}
          <div className="w-12 h-12 hover:bg-white/5 rounded-xl flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6 text-white/30" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          {/* Clock Icon */}
          <div className="w-12 h-12 hover:bg-white/5 rounded-xl flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6 text-white/30" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Card Icon */}
          <div className="w-12 h-12 hover:bg-white/5 rounded-xl flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6 text-white/30" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </div>
          {/* File Icon */}
          <div className="w-12 h-12 hover:bg-white/5 rounded-xl flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6 text-white/30" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-8">
            {/* Left: Stats */}
            <div className="space-y-5">
              {/* Current Amount */}
              <div>
                <div className="text-3xl font-bold text-gray-900">$6,21,982.70</div>
                <div className="text-sm text-gray-500">Current Amount</div>
              </div>

              {/* Deposits */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-900 rounded-full p-2">
                  <div className="w-full h-full border-4 border-white border-t-transparent rounded-full"></div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    $2,18,571
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs text-gray-500">Deposits</div>
                </div>
              </div>

              {/* Withdraw */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-900 rounded-full p-2">
                  <div className="w-full h-full border-4 border-white border-b-transparent rounded-full"></div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    $1,21,927
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-xs text-gray-500">Withdraw</div>
                </div>
              </div>

              {/* Credit Limits */}
              <div>
                <div className="text-xs text-gray-500 mb-1">Credit Limits</div>
                <div className="text-base font-bold text-gray-900 flex items-center gap-1">
                  $128 - $20113
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Online Limits */}
              <div>
                <div className="text-xs text-gray-500 mb-1">Online Limits</div>
                <div className="text-base font-bold text-gray-900 flex items-center gap-1">
                  $321 - $1,234
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Title & User */}
            <div className="flex-1 ml-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight">Financial</h1>
                  <h2 className="text-4xl font-bold text-gray-900">Dashboard</h2>
                </div>
                {/* User Section */}
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-gray-200 rounded-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Savings & Cards */}
          <div className="grid grid-cols-[2fr_1fr] gap-4 mb-4">
            {/* Savings Chart */}
            <div className="bg-white rounded-2xl p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Savings</h3>
                <button className="text-sm text-gray-600 flex items-center gap-1">
                  Weekly
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="h-36 relative">
                <svg viewBox="0 0 500 120" className="w-full h-full">
                  <polyline points="10,80 70,65 130,70 190,50 250,30 310,38 370,52 430,45 490,32" fill="none" stroke="#2C2C2C" strokeWidth="2.5"/>
                  <circle cx="250" cy="30" r="5" fill="#2C2C2C"/>
                  <rect x="230" y="10" width="40" height="16" rx="4" fill="#2C2C2C"/>
                  <text x="250" y="21" fontSize="9" fill="white" textAnchor="middle" fontWeight="bold">Highest</text>
                  <line x1="250" y1="26" x2="250" y2="90" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="3"/>
                </svg>
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>Saturday</span>
                  <span>Sunday</span>
                  <span>Monday</span>
                  <span>Tuesday</span>
                  <span>Wednesday</span>
                  <span>Thursday</span>
                  <span>Friday</span>
                </div>
              </div>
            </div>

            {/* Credit Cards */}
            <div className="space-y-3">
              <div className="bg-[#2C2C2C] rounded-2xl p-5 h-[120px] relative overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="absolute bottom-4 left-5">
                  <div className="text-white text-xl font-bold mb-1 tracking-wider">•••• 98765</div>
                  <div className="text-white/60 text-[10px] font-medium mb-2">CREDIT CARD</div>
                  <div className="text-white text-xs">
                    <span className="text-white/60 text-[10px]">Exp</span><br/>
                    <span className="font-semibold">12.25</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-2xl p-5 h-[120px] relative overflow-hidden opacity-50">
                <div className="absolute bottom-4 left-5">
                  <div className="text-gray-700 text-xl font-bold tracking-wider">••••</div>
                  <div className="text-gray-600 text-xs mt-2">
                    <span className="text-gray-500 text-[10px]">Exp</span><br/>
                    <span className="font-semibold">12.25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: 3 Columns */}
          <div className="grid grid-cols-3 gap-4">
            {/* Your Invoice */}
            <div className="bg-white rounded-2xl p-5">
              <h3 className="text-base font-bold text-gray-900 mb-4">Your Invoice</h3>
              <div className="space-y-3 mb-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-900 truncate">Gregory Mcbride</div>
                      <div className="text-[10px] text-gray-500">Invoice ID: INZ1679</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-xl text-xs font-medium">View All Invoice</button>
            </div>

            {/* Transaction */}
            <div className="bg-white rounded-2xl p-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-bold text-gray-900">Transaction</h3>
                <div className="flex gap-2 text-[9px]">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-900"></span>Invest</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-300"></span>Expense</span>
                </div>
              </div>
              <div className="flex items-end justify-between h-32 gap-1">
                {[{h:45,t:40}, {h:55,t:45}, {h:75,t:35}, {h:95,t:30,show:true}, {h:65,t:40}, {h:75,t:38}, {h:80,t:35}].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center relative">
                    {bar.show && (
                      <>
                        <div className="absolute -top-8 bg-gray-900 text-white text-[9px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">50%</div>
                        <div className="absolute -top-14 bg-gray-200 text-gray-700 text-[9px] px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">25%</div>
                      </>
                    )}
                    <div className="w-full flex flex-col gap-0.5">
                      <div className="w-full bg-gray-900 rounded-t" style={{height: `${bar.h}px`}}></div>
                      <div className="w-full bg-gray-300 rounded-b" style={{height: `${bar.t}px`}}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[8px] text-gray-400 mt-2">
                {['Sat','Sun','Mon','Tue','Wed','Thu','Fri'].map((d,i) => <span key={i}>{d}</span>)}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {/* Transfers */}
              <div className="bg-white rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-semibold">Bank Transfer</span>
                  </div>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-semibold">Global Transfer</span>
                  </div>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              {/* Last Transaction */}
              <div className="bg-white rounded-2xl p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Last Transaction</h3>
                <div className="space-y-2.5">
                  {[
                    {name: 'Cameron Watkins', amount: '+235.78 USD', positive: true},
                    {name: 'Georgia Goddard', amount: '-148.98 USD', positive: false},
                    {name: 'Bailey Thorpe', amount: '+235.78 USD', positive: true},
                    {name: 'Emma Andrews', amount: '-312.38 USD', positive: false},
                  ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <div className="text-xs font-semibold text-gray-900">{t.name}</div>
                          <div className="text-[10px] text-gray-500">23 April 2021</div>
                        </div>
                      </div>
                      <div className={`text-xs font-bold ${t.positive ? 'text-green-600' : 'text-red-600'}`}>{t.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Expense - Bottom Left Overlay */}
          <div className="absolute bottom-6 left-[106px] bg-white rounded-2xl p-5 w-64 shadow-lg">
            <h3 className="text-base font-bold text-gray-900 mb-3">Expense</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xl font-bold text-gray-900">$14,591</div>
                <div className="text-xs text-gray-500">Household</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">$19,123</div>
                <div className="text-xs text-gray-500">Utility Bill</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">$21,859</div>
                <div className="text-xs text-gray-500">Food</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">$12,724</div>
                <div className="text-xs text-gray-500">Entertainment</div>
              </div>
            </div>
          </div>

          {/* Character - Bottom Right */}
          <div className="absolute bottom-6 right-6 flex items-end gap-4">
            <div className="bg-white rounded-2xl p-4 max-w-[180px] shadow-lg">
              <p className="text-xs font-semibold text-gray-900 mb-3 leading-tight">Join Bigest Webinar of the Year Crab Knowledge from Expert</p>
              <button className="w-full px-4 py-2 bg-white border-2 border-gray-900 text-gray-900 rounded-lg text-xs font-semibold hover:bg-gray-900 hover:text-white transition-colors">Let's Try</button>
            </div>
            {/* Character Illustration */}
            <div className="w-28 h-40 bg-white rounded-t-full flex items-end justify-center border-4 border-gray-200 overflow-hidden">
              <svg className="w-20 h-20 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportersSection;

