import React, { useState } from 'react';
import enquiryImg from '../assets/enquiry-now.webp';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    console.log('Submitted enquiry form:', formData);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="enquiry" className="bg-[#f4f4f4] w-full border-t border-zinc-200 font-sans">
      <div className="flex flex-col md:flex-row w-full min-h-[300px]">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 lg:w-[45%] xl:w-[40%]">
          <img 
            src={enquiryImg} 
            alt="People in discussion" 
            className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 lg:w-[55%] xl:w-[60%] p-8 sm:p-12 md:p-16 lg:p-24 xl:py-32 xl:px-32 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-900 mb-10 tracking-tight">
            Enquire Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*" 
                required
                className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3.5 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors shadow-sm"
              />
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*" 
                required
                className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3.5 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors shadow-sm"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3.5 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors shadow-sm"
              />
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject" 
                className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3.5 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors shadow-sm"
              />
            </div>

            {/* Row 3 */}
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message" 
              rows="6"
              className="w-full bg-white border border-zinc-200 rounded-sm px-4 py-3.5 text-sm text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors shadow-sm resize-y"
            ></textarea>

            {/* Submit Button */}
            <div>
              <button 
                type="submit"
                className="bg-[#222222] hover:bg-black text-white font-medium px-8 py-3.5 rounded-sm text-sm transition-colors shadow-sm"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Enquiry;
