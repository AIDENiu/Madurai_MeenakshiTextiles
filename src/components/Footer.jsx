import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-maroon-dark text-ivory pt-16 pb-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12 mb-12">
          <div>
            <Link to="/" className="font-serif text-2xl font-bold text-gold mb-4 block">MADURAI MEENAKSHI Textiles</Link>
            <p className="text-neutral-300 text-[0.95rem] mb-6 max-w-[300px]">
              Your trusted partner for premium uniform sarees, colored sarees, and institutional fabrics. Quality that speaks for itself.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-[1.1rem] font-semibold text-ivory mb-6 uppercase tracking-[0.05em]">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link to="/catalogue" className="text-neutral-300 hover:text-gold transition duration-200 text-[0.95rem]">Our Collection</Link>
              <Link to="/about" className="text-neutral-300 hover:text-gold transition duration-200 text-[0.95rem]">About Us</Link>
              <Link to="/contact" className="text-neutral-300 hover:text-gold transition duration-200 text-[0.95rem]">Contact & Enquiry</Link>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[1.1rem] font-semibold text-ivory mb-6 uppercase tracking-[0.05em]">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-neutral-300 text-[0.95rem] flex items-center gap-2">
                <MapPin size={18} />
                <span>[Client Address Required]</span>
              </p>
              <p className="text-neutral-300 text-[0.95rem] flex items-center gap-2">
                <Phone size={18} />
                <span>[Client Phone Required]</span>
              </p>
              <p className="text-neutral-300 text-[0.95rem] flex items-center gap-2">
                <Mail size={18} />
                <span>[Client Email Required]</span>
              </p>
              <p className="text-neutral-300 text-[0.95rem] flex items-center gap-2">
                <Clock size={18} />
                <span>[Store Hours Required]</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-neutral-500 text-[0.85rem]">
          <p>&copy; {currentYear} Madurai Meenakshi Textiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
