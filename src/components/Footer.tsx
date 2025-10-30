import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Top Footer Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 
              className="text-white text-[20px] font-bold"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              PentAi.
            </h2>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p 
              className="text-[#9CA3AF] text-[14px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              © 2024 by PentAi. All rights are reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={18} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Realised by */}
          <div>
            <p 
              className="text-[#9CA3AF] text-[13px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Realised by ⚡ NEW WEB ORDER_
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-[#9CA3AF] text-[13px] hover:text-white transition-colors"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-[#9CA3AF] text-[13px] hover:text-white transition-colors"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

