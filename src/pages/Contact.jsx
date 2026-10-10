import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    interest: location.state?.interestedIn || '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, connect this to a form service like Netlify Forms
    setStatus('This is a static demo. In production, this form will be connected to a submission service.');
    // setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="container py-16">
      <div className="text-center fade-in mb-16">
        <h1 className="text-[2.5rem] md:text-[3rem] mb-4">Get in Touch</h1>
        <p className="text-neutral-500 text-[1.1rem] max-w-[600px] mx-auto">
          Have questions about our uniform sarees, bulk orders, or pricing? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="bg-maroon-dark text-ivory p-8 md:p-12 rounded-lg h-full fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-gold text-2xl mb-8">Contact Information</h2>
          
          <div className="flex gap-6 mb-8">
            <MapPin size={24} className="text-gold shrink-0" />
            <div>
              <h3 className="text-ivory font-sans text-[1.1rem] mb-2 font-semibold">Our Store</h3>
              <p className="text-neutral-300">[Client Address Required]<br/>Madurai, Tamil Nadu</p>
            </div>
          </div>
          
          <div className="flex gap-6 mb-8">
            <Phone size={24} className="text-gold shrink-0" />
            <div>
              <h3 className="text-ivory font-sans text-[1.1rem] mb-2 font-semibold">Phone & WhatsApp</h3>
              <p className="text-neutral-300">[Client Phone Required]</p>
            </div>
          </div>
          
          <div className="flex gap-6 mb-8">
            <Mail size={24} className="text-gold shrink-0" />
            <div>
              <h3 className="text-ivory font-sans text-[1.1rem] mb-2 font-semibold">Email</h3>
              <p className="text-neutral-300">[Client Email Required]</p>
            </div>
          </div>
          
          <div className="flex gap-6 mb-8">
            <Clock size={24} className="text-gold shrink-0" />
            <div>
              <h3 className="text-ivory font-sans text-[1.1rem] mb-2 font-semibold">Business Hours</h3>
              <p className="text-neutral-300">[Store Hours Required]</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] fade-in" style={{animationDelay: '0.4s'}}>
          {status && (
            <div className="p-4 rounded bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0] mb-6 font-medium">
              {status}
            </div>
          )}
          
          {/* Note for Netlify Forms: Add data-netlify="true" attribute below in production */}
          <form onSubmit={handleSubmit} name="contact">
            <div className="mb-6">
              <label htmlFor="name" className="block font-medium mb-2 text-neutral-700">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/10 transition duration-200" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="contact" className="block font-medium mb-2 text-neutral-700">Phone / Email</label>
              <input 
                type="text" 
                id="contact" 
                name="contact" 
                className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/10 transition duration-200" 
                value={formData.contact}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="interest" className="block font-medium mb-2 text-neutral-700">Product of Interest</label>
              <input 
                type="text" 
                id="interest" 
                name="interest" 
                className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/10 transition duration-200" 
                value={formData.interest}
                onChange={handleChange}
                placeholder="e.g., Uniform Sarees, Bulk Order"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block font-medium mb-2 text-neutral-700">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/10 transition duration-200 min-h-[120px] resize-y" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
