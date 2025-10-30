
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#1A1A1A', backdropFilter: 'blur(10px)' }}>
      <div className="max-w-[1440px] mx-auto px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Left side: Logo and Navigation */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span 
                className="font-bold" 
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '22px',
                  color: '#FFFFFF'
                }}
              >
                Pent
              </span>
              <span 
                className="font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '22px'
                }}
              >
                AI
              </span>
              <span style={{ color: '#8B5CF6', fontSize: '18px' }}>✦</span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              <a 
                href="#" 
                className="px-8 py-3 flex items-center justify-center rounded-full font-medium hover:text-purple-400 transition-colors"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#FFFFFF'
                }}
              >
                Home
              </a>
              <a 
                href="#" 
                className="px-8 py-3 flex items-center justify-center rounded-full font-medium hover:text-white transition-colors"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#6B6B6B'
                }}
              >
                SecrtChat
              </a>
              <a 
                href="#" 
                className="px-8 py-3 flex items-center justify-center rounded-full font-medium hover:text-white transition-colors"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#6B6B6B'
                }}
              >
                GenPen
              </a>
              <a 
                href="#" 
                className="px-8 py-3 flex items-center justify-center rounded-full font-medium hover:text-white transition-colors"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#6B6B6B'
                }}
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Dashboard Button */}
          <button 
            className="px-7 py-2.5 rounded-full font-medium hover:opacity-90 transition-all"
            style={{
              background: 'linear-gradient(135deg, #301A3A 0%, #442155 100%)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#FFFFFF'
            }}
          >
            Dashboard
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

