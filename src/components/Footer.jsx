import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* logo */}
          <div>
            <Link href="/" className="text-2xl flex gap-2 items-center font-bold text-blue-600">
        <img className="h-14 w-14" src="/image.png" alt="" />
        <p className="font-extrabold ">jOB<span className="text-white font-extrabold italic">HUB</span></p>
           
        </Link>
            <p className="mt-3 text-sm text-gray-400">
              Building modern, scalable, and secure web applications using
              Next.js and modern technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="footer-link">Web Development</li>
              <li className="footer-link">UI/UX Design</li>
              <li className="footer-link">SEO Optimization</li>
              <li className="footer-link">API Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
            <p className="text-sm text-gray-400 mt-1">
              Email: support@jobhub.com
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Phone: +880 1234-567890
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} JOBHUB. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
