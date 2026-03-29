import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-300 flex items-center justify-center">
                <span className="text-teal-900 font-bold text-sm">BS</span>
              </div>
              <span className="font-bold text-lg text-white">BioSeq Analyzer</span>
            </div>
            <p className="text-sm text-teal-300">
              Advanced genomic sequence analysis platform with alignment visualization, variant calling, and phylogenetic tree construction.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/booking" className="hover:text-white transition-colors">Book Analysis</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><a href="mailto:support@bioseqanalyzer.com" className="hover:text-white transition-colors">support@bioseqanalyzer.com</a></li>
              <li><span className="text-teal-300">+1 (555) 234-5678</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-teal-400">&copy; {new Date().getFullYear()} BioSeq Analyzer. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-teal-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
