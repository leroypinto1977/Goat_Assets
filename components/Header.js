'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Close the mobile menu when a nav link is tapped
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Lean top nav — Sectors & Careers live in the footer (sectors also via home portfolio cards)
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left aligned logo */}
        <Link href="/" className="logo-link">
          <Logo className="logo-img" />
        </Link>
        
        {/* Centered navigation links */}
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Mobile-only CTA so Contact is reachable inside the menu */}
            <li className="nav-cta-mobile">
              <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
                Get In Touch
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Right aligned CTA */}
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <button 
          className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} 
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
