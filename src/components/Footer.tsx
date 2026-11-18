import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/friendlyContent';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* ── 13. Brand Section as a Horizontal Bar ── */}
        <div className="footer-brand-horizontal-bar">
          <div className="footer-brand-header-group">
            <Link to="/" className="footer-brand-anchor">
              <img src={logo} alt="Homesync LLC Logo" className="footer-logo-img" />
              <div className="footer-brand-text">
                <span className="footer-brand-name">
                  HOME<span style={{ color: '#0063A6' }}>SYNC</span> LLC
                </span>
                <span className="footer-brand-tag">PROPERTY MAINTENANCE &amp; REPAIRS</span>
              </div>
            </Link>
            <p className="footer-text-secondary" style={{ maxWidth: '520px', margin: 0 }}>
              Dependable residential property care, handyman repairs, and rental turnovers across Richmond, Virginia.
            </p>
          </div>

          <div className="footer-contact-items-horizontal">
            <div className="footer-contact-row">
              <MapPin size={16} className="text-brand-blue" />
              <span>{companyInfo.address}</span>
            </div>
            <div className="footer-contact-row">
              <Phone size={16} className="text-brand-blue" />
              <a href={`tel:${companyInfo.phoneRaw}`} className="footer-link-highlight">
                {companyInfo.phone}
              </a>
            </div>
            <div className="footer-contact-row">
              <Mail size={16} className="text-brand-blue" />
              <a href={`mailto:${companyInfo.email}`} className="footer-link-highlight">
                {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Footer Columns (Services & Hours removed) ── */}
        <div className="footer-main-grid-revised">
          
          {/* 19. Service Areas (Greater Virginia) */}
          <div className="footer-col">
            <h4 className="footer-heading">Service Areas (Greater Virginia)</h4>
            <p className="footer-text-secondary" style={{ marginBottom: '14px', fontSize: '0.875rem' }}>
              Serving residential properties throughout Greater Virginia:
            </p>
            <ul className="footer-list area-list">
              <li>• Richmond • Henrico • Hanover</li>
              <li>• King William • King &amp; Queen</li>
              <li>• Fairfax • Arlington • Loudoun</li>
              <li>• Alexandria • Manassas</li>
              <li>• Virginia Beach • Norfolk • Chesapeake</li>
              <li>• Portsmouth • Suffolk • Hampton • Newport News</li>
              <li>• Washington • Southampton</li>
            </ul>
          </div>

          {/* Contractor Assurance (Hours of operation removed) */}
          <div className="footer-col">
            <h4 className="footer-heading">Contractor Assurance</h4>
            <div className="assurance-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem', marginBottom: '8px' }}>
                <ShieldCheck size={20} color="#0063A6" />
                <span>Licensed &amp; Insured VA Contractor</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.55, margin: '0 0 16px' }}>
                Virginia Contractor Class C · Insured for full homeowner protection on every project.
              </p>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '12px 14px' }}>
                <span style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>
                  Have questions about coverage or estimates? Call or text us directly at{' '}
                  <a href={`tel:${companyInfo.phoneRaw}`} style={{ color: '#0063A6', fontWeight: 700, textDecoration: 'none' }}>
                    {companyInfo.phone}
                  </a>.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── 12. Bottom Legal Strip (Work Guarantee & About Our Crew removed) ── */}
        <div className="footer-bottom-strip">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Homesync LLC. Licensed &amp; Insured Residential Contractor in Richmond, VA. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-legal-link">
              Privacy &amp; SMS Policy
            </Link>
            <span className="footer-bullet">•</span>
            <Link to="/contact" className="footer-legal-link">
              Contact Dispatch
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer-root {
          background-color: #0B1C30;
          color: #94A3B8;
          padding: 56px 0 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* ── 13. Horizontal Brand Bar ── */
        .footer-brand-horizontal-bar {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-bottom: 36px;
          margin-bottom: 36px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        @media (min-width: 900px) {
          .footer-brand-horizontal-bar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .footer-brand-header-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-contact-items-horizontal {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.875rem;
          color: #CBD5E1;
        }

        @media (min-width: 600px) {
          .footer-contact-items-horizontal {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
          }
        }

        .footer-brand-anchor {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .footer-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        .footer-brand-text {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .footer-brand-tag {
          font-size: 0.65rem;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        .footer-text-secondary {
          font-size: 0.875rem;
          line-height: 1.55;
          color: #94A3B8;
        }

        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .footer-link-highlight {
          color: #E2E8F0;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer-link-highlight:hover {
          color: #0063A6;
        }

        .text-brand-blue {
          color: #0063A6;
          flex-shrink: 0;
        }

        /* ── Revised Footer Columns ── */
        .footer-main-grid-revised {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .footer-main-grid-revised {
            grid-template-columns: 1.3fr 1fr;
            gap: 48px;
          }
        }

        .footer-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .area-list li {
          font-size: 0.875rem;
          color: #CBD5E1;
          line-height: 1.5;
        }

        .assurance-box {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 20px;
        }

        /* ── Bottom Legal Strip ── */
        .footer-bottom-strip {
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          font-size: 0.8125rem;
          color: #64748B;
        }

        @media (min-width: 768px) {
          .footer-bottom-strip {
            flex-direction: row;
          }
        }

        .footer-copyright {
          margin: 0;
          text-align: center;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .footer-legal-link {
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer-legal-link:hover {
          color: #0063A6;
          text-decoration: underline;
        }

        .footer-bullet {
          color: #475569;
        }
      `}</style>
    </footer>
  );
}
