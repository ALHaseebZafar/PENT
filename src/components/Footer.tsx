import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative z-10" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Top Footer Section */}
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 
              className="font-bold"
              style={{ 
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '18px',
                color: '#CCCCCC'
              }}
            >
              PentAi.
            </h2>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p 
              style={{ 
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: '#6B6B6B'
              }}
            >
              © 2024 by PentAi. All rights are reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3.5">
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
              style={{ color: '#CCCCCC' }}
            >
              <FaFacebookF size={16} />
            </a>
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
              style={{ color: '#CCCCCC' }}
            >
              <FaInstagram size={16} />
            </a>
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="X (Twitter)"
              style={{ color: '#CCCCCC' }}
            >
              <FaXTwitter size={16} />
            </a>
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
              style={{ color: '#CCCCCC' }}
            >
              <FaLinkedinIn size={16} />
            </a>
            <a 
              href="#" 
              className="hover:opacity-70 transition-opacity"
              aria-label="YouTube"
              style={{ color: '#CCCCCC' }}
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }} className="py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Realised by */}
          <div>
            <p 
              style={{ 
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: '#6B6B6B'
              }}
            >
              Realised by ⚡ NEW WEB ORDER_
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              style={{ 
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: '#6B6B6B'
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors"
              style={{ 
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: '#6B6B6B'
              }}
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

