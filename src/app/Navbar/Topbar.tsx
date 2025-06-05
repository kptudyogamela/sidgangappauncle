import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-sm font-medium py-2 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">

        {/* Phone & Email */}
        <div className="text-gray-800 flex flex-col sm:flex-row items-center gap-1 text-center">
          <span>📞 93437 77577 or 90082 34224</span>
          <span className="hidden sm:inline">|</span>
          <span>✉️ maruthiautocomponents@gmail.com</span>
        </div>

        {/* Scrolling Text */}
        <div className="w-full sm:flex-1 overflow-hidden whitespace-nowrap relative text-center">
          <div className="scroll-track font-semibold text-red-600 inline-block animate-marquee">
            🚧 We are expanding to a new plot at Japanese Park, Vasanthanarsapuru Tumkur! 🚧&nbsp;&nbsp;&nbsp;
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center gap-3 min-w-[150px] justify-end">
          <a className="text-gray-500 hover:text-red-500" href="#" aria-label="Facebook">
            <FaFacebookF className="w-5 h-4" />
          </a>
          <a className="text-gray-500 hover:text-red-500" href="#" aria-label="Twitter">
            <FaTwitter className="w-5 h-4" />
          </a>
          <a className="text-gray-500 hover:text-red-500" href="#" aria-label="Instagram">
            <FaInstagram className="w-5 h-4" />
          </a>
          <a className="text-gray-500 hover:text-red-500" href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="w-5 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
