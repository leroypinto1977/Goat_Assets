import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <Logo className="footer-logo footer-logo-svg" style={{ filter: 'brightness(0) invert(1)' }} />
          <p className="footer-tagline">Real estate advisory.<br />Real value.</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/company/goat-assets" className="footer-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" style={{ fill: 'currentColor', width: '14px', height: '14px' }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://x.com/goatassets" className="footer-social-btn" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" style={{ fill: 'currentColor', width: '14px', height: '14px' }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Column 2: Company */}
        <div>
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/approach">Our Approach</Link></li>
            <li><Link href="/sectors">Sectors</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/sustainability">Sustainability</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Column 3: Services */}
        <div>
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            <li><Link href="/services/investment-advisory">Investment Advisory</Link></li>
            <li><Link href="/services/transactions-advisory">Transactions Advisory</Link></li>
            <li><Link href="/services/legal-documentation">Legal &amp; Documentation</Link></li>
            <li><Link href="/services/leasing-advisory">Leasing Advisory</Link></li>
            <li><Link href="/services/valuation-advisory">Valuation &amp; Advisory</Link></li>
            <li><Link href="/services/project-advisory">Project Advisory</Link></li>
            <li><Link href="/services/capital-markets">Capital Markets</Link></li>
          </ul>
        </div>
        
        {/* Column 4: Contact Info */}
        <div>
          <h4 className="footer-col-title">Get In Touch</h4>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>One BKC, Bandra Kurla Complex, Mumbai - 400051, India</p>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <p><a href="tel:+912235016500">+91 22 3501 6500</a></p>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <p><a href="mailto:connect@goatassets.com">connect@goatassets.com</a></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p className="copyright">&copy; 2026 GOAT Assets. All Rights Reserved.</p>
        <div className="footer-legal-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
