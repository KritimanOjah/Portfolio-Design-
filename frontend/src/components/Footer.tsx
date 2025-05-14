// Footer.jsx
import IconStack from "./IconStack";
export default function Footer() {
    return (
      <footer className="w-full  text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Kritiman Ojah</h3>
            <p className="text-sm text-gray-300">Help you create experiences where aesthetics & functionality seamlessly come together.</p>
          </div>
  
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
            <li><a id="len1" className="hoverable" href="#home">Home</a></li>
  <li><a id="len2" className="hoverable" href="#work">Work</a></li>
  <li><a id="len3" className="hoverable" href="#about">About</a></li>
  <li><a id="len4" className="hoverable" href="#contact">Contact</a></li>
            </ul>
          </div>
  
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <IconStack/>
          </div>
        </div>
  
        <div className="text-center text-sm text-gray-500 mt-10 border-t pt-6 border-gray-700">
          © 2025 Kritiman Ojah. All rights reserved.
        </div>
      </footer>
    );
  }
  