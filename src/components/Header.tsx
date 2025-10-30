
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Left side: Logo and Navigation */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">Pent</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">AI</span>
              <span className="text-purple-400 text-xl">✦</span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
              <a href="#" className="w-[137px] h-16 px-10 py-0 flex items-center justify-center rounded-full text-white font-medium hover:text-purple-400 transition-colors">
                Home
              </a>
              <a href="#" className="w-[137px] h-16 px-10 py-0 flex items-center justify-center rounded-full text-[#6b6b6b] font-medium hover:text-white transition-colors">
                SecrtChat
              </a>
              <a href="#" className="w-[137px] h-16 px-10 py-0 flex items-center justify-center rounded-full text-[#6b6b6b] font-medium hover:text-white transition-colors">
                GenPen
              </a>
              <a href="#" className="w-[137px] h-16 px-10 py-0 flex items-center justify-center rounded-full text-[#6b6b6b] font-medium hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Dashboard Button */}
          <button className="bg-gradient-to-r from-[#301A3A] to-[#442155] text-white px-8 py-2.5 rounded-full font-medium hover:from-[#3d234a] hover:to-[#532966] transition-all">
            Dashboard
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

