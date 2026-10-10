import React from 'react';

function About() {
  return (
    <div>
      <div className="bg-maroon-dark text-ivory py-16 md:py-24 text-center fade-in">
        <div className="container">
          <h1 className="text-4xl md:text-[3rem] text-ivory mb-4">About Us</h1>
          <p className="text-neutral-300 text-lg md:text-[1.2rem] max-w-[600px] mx-auto">
            Tradition, Quality, and Trust woven into every fabric.
          </p>
        </div>
      </div>

      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-[2rem] mb-6">Madurai Meenakshi Textiles</h2>
            <div className="space-y-6 text-lg text-neutral-700 leading-[1.8]">
              <p>
                [Client Story Placeholder] Founded with a vision to provide the highest quality textiles, Madurai Meenakshi Textiles has grown to become a trusted name in uniform sarees, colored sarees, and institutional fabrics.
              </p>
              <p>
                We understand that a uniform represents an institution's identity. That's why we meticulously select our fabrics for durability, comfort, and perfect color consistency, ensuring that your staff or students always look their best.
              </p>
              <p>
                Our commitment to quality and customer satisfaction has made us the preferred choice for schools, hospitals, and corporate organizations looking for bulk textile solutions.
              </p>
            </div>
          </div>
          <div className="fade-in" style={{animationDelay: '0.4s'}}>
            <img 
              src="https://images.unsplash.com/photo-1605380537467-d86ce45b2e95?q=80&w=800&auto=format&fit=crop" 
              alt="Textile Weaving" 
              className="w-full rounded shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
