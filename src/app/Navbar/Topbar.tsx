import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-sm font-medium py-2 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">

        {/* Left: Phone and Email */}
        <div className="text-gray-800 flex items-center flex-wrap gap-2 min-w-[220px]">
          <span>📞 93437 77577 or 90082 34224</span>
          <span className="inline"> | ✉️ maruthiautocomponents@gmail.com</span>
        </div>

        <div className="scroll-wrapper">
          <div className="scroll-track font-semibold text-red-600 whitespace-nowrap">
            🚧 We are expanding to a new plot at Japanese Park, Vasanthanarsapuru Tumkur! 🚧 &nbsp;&nbsp;&nbsp;
          </div>
        </div>




        {/* Right: Social Icons */}
        <div className="flex items-center gap-3 min-w-[150px] justify-end hidden sm:flex">
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
    </div >
  );
}
