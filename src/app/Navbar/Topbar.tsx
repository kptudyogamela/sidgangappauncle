import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-sm font-medium py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 text-xs sm:text-sm">

        {/* Contact Info (left aligned) */}
        <div className="text-gray-800 flex items-center gap-2 whitespace-nowrap">
          <span>📞 <a href="tel:9343777577">93437 77577
          </a> / <a href="tel:90082 34224">90082 34224 </a></span>
          <span className="hidden sm:inline">|</span>
          <span>✉️  <a href="mailto:maruthiautocomponents@gmail.com" >
            maruthiautocomponents@gmail.com
          </a></span>
        </div>

        {/* Scrolling Text */}
        <div className="hidden sm:block flex-1 overflow-hidden whitespace-nowrap text-center px-4">
          <div className="scroll-track font-semibold text-red-600 inline-block animate-marquee">
            🚧 We are expanding to a new plot at Japanese Park, Vasanthanarsapura Tumkur! 🚧
          </div>
        </div>

        {/* Social Icons (right) */}
        <div className="hidden sm:flex items-center gap-3">
          <a className="text-gray-500 hover:text-red-500" href="#"><FaFacebookF className="w-5 h-4" /></a>
          <a className="text-gray-500 hover:text-red-500" href="#"><FaTwitter className="w-5 h-4" /></a>
          <a className="text-gray-500 hover:text-red-500" href="#"><FaInstagram className="w-5 h-4" /></a>
          <a className="text-gray-500 hover:text-red-500" href="#"><FaLinkedinIn className="w-5 h-4" /></a>
        </div>

      </div>
    </div>


  );
}
