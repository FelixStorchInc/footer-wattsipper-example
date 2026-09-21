export const footer = {
  logo: LogoWattSipper,
  logoAlt: 'Wattsipper Logo',
  backgroundImage: FooterBg,

  // Company info block
  companyInfo: [
    'Felix Storch, Inc. ISO 9001:2015 Certified',
    '770 Garrison Ave',
    'Bronx, NY 10474',
  ],
  phone: '(718) 893-3900 x206',
  email: 'info@wattsipper.com',

  // Navigation columns
  navColumns: [
    {
      heading: 'General',
      links: [
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'How to Order', path: '/how-to-order' },
      ],
    },
    {
      heading: 'Why Wattsipper',
      links: [
        { name: 'Benefits', path: '/benefits' },
        { name: 'Comparison', path: '/comparison-gas-electric-battery-ranges' },
        { name: 'Learning Center', path: '/learning-center' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Us', path: '/how-to-order' },
      ],
    },
  ],

  // Social links
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/showcase/wattsipper' },
    { name: 'Instagram', url: 'https://www.instagram.com/wattsipper/' },
  ],

  // Bottom bar
  copyrightEntity: 'Summit Appliance',
  legalLinks: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookies', path: '/cookies' },
    { name: 'Consent Preferences', action: 'consentPreferences' },
  ],
}

import { Link } from 'react-router-dom'
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react'
import { cn } from '@/lib/utils'
import { footer } from '../../content/siteContent'

/* Icon lookup for social links */
const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
}

function Footer() {
  const currentYear = new Date().getFullYear()
  // 1. Add this helper function outside or inside your component
    const formatPhoneWithExtension = (phoneString) => {
      if (!phoneString) return '';

      // Split the string by 'x' or 'ext' (case-insensitive)
      const parts = phoneString.toLowerCase().split(/x|ext/);
      
      // Clean the main phone number part
      const baseNumber = parts[0].replace(/[^+\d]/g, '');

      // If there's an extension, clean it and append with a comma
      if (parts.length > 1) {
        const extension = parts[1].replace(/[^\d]/g, '');
        return `tel:${baseNumber},${extension}`;
      }

      // If no extension, just return the base number
      return `tel:${baseNumber}`;
    };

  return (
    <footer
      className="full-bleed text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${footer.backgroundImage})` }}
    >
      {/* Dark overlay — colour set via --footer-overlay in index.css */}
      <div className="absolute inset-0 bg-footer-overlay z-0" />

      <div className="relative z-10 w-full pt-10 md:pt-12 pb-0">
        <div className="container-custom">
          {/* ── Main grid: info (left) | nav + follow (right) ── */}
          <div
            className={cn(
              'grid gap-10',
              'grid-cols-1',
              'md:grid-cols-[1fr_auto]'
            )}
          >
            {/* ─ Left column: logo + company info + contact ─ */}
            <div className="flex flex-col gap-4">
              <Link to="/" className="w-fit">
                <img
                  src={footer.logo}
                  alt={footer.logoAlt}
                  className="h-16 md:h-20 w-auto self-start"
                />
              </Link>

              {/* Company address lines */}
              <address className="not-italic text-sm leading-relaxed opacity-90">
                {footer.companyInfo.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < footer.companyInfo.length - 1 && <br />}
                  </span>
                ))}
              </address>

              {/* Phone & email */}
              <div className="flex flex-col gap-1 text-sm">
                <a
                  href={formatPhoneWithExtension(footer.phone)}
                  className="inline-flex items-center gap-2 hover:text-footer-link-hover w-fit link-underline"
                >
                  <Phone className="size-4 shrink-0" />
                  {footer.phone}
                </a>
                <a
                  href={`mailto:${footer.email}`}
                  className="inline-flex items-center gap-2 hover:text-footer-link-hover w-fit link-underline"
                >
                  <Mail className="size-4 shrink-0" />
                  {footer.email}
                </a>
              </div>
            </div>

            {/* ─ Right column: nav columns + follow ─ */}
            <div className="flex flex-col gap-8">
              {/* Navigation columns */}
              <nav className="flex flex-col md:flex-row gap-8 md:gap-14">
                {footer.navColumns.map((col) => (
                  <div key={col.heading} className="flex flex-col gap-3">
                    <h4 className="text-base font-bold text-white">{col.heading}</h4>
                    <ul className="flex flex-col gap-2">
                      {col.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.path}
                            className="text-sm opacity-90 hover:opacity-100 hover:text-footer-link-hover link-underline"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              {/* Follow / social — sits below nav, right-aligned and bottom-aligned on desktop */}
              <div className="flex flex-col gap-3 md:items-end md:mt-auto">
                <h4 className="text-base font-bold text-white">Follow Us</h4>
                <div className="flex items-center gap-3">
                  {footer.social.map((s) => {
                    const Icon = socialIcons[s.name]
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm opacity-90 hover:opacity-100 hover:text-footer-link-hover link-underline"
                      >
                        {Icon && <Icon className="size-4 shrink-0" />}
                        {s.name}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar — tinted strip spanning full width ── */}
      <div className="relative z-10 mt-8 border-t border-white/10 bg-footer-bottom-bar">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs opacity-80">
            <p>Copyright {currentYear} {footer.copyrightEntity}, All Rights Reserved</p>

            <div className="flex items-center gap-2">
              {footer.legalLinks.map((link, i) => {
                const linkClass = "hover:text-footer-link-hover link-underline"

                return (
                  <span key={link.name} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">|</span>}
                    {link.path ? (
                      <Link to={link.path} className={linkClass}>
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          if (link.action === 'consentPreferences') {
                            window.displayPreferenceModal?.()
                          }
                        }}
                        className={linkClass}
                      >
                        {link.name}
                      </a>
                    )}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
