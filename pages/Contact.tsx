
import React, { useState } from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        // EmailJS template parameters - Added By Bhushan on 15_01_2025
        const templateParams = {
            from_name: formData.name, // Changed to match EmailJS template expectations
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            to_email: "mvsitgiants@gmail.com", // Add recipient email
        };

        try {
            console.log("Sending email with parameters:", templateParams); // Debug log
            
            const response = await emailjs.send(
                "service_m6e0ez8", // EmailJS service ID
                "template_6p3exzl", // EmailJS template ID
                templateParams,
                "dR13T0Fyfb5JDyUXf" // EmailJS user ID
            );

            console.log("EmailJS response:", response); // Debug log

            if (response.status === 200) {
                setStatus('Your message has been sent successfully!');
                toast.success("Email sent successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
            } else {
                throw new Error(`Unexpected response status: ${response.status}`);
            }
        } catch (error: any) {
            console.error("Detailed error sending email:", error);
            console.error("Error status:", error.status);
            console.error("Error text:", error.text);
            
            let errorMessage = 'Error sending email. Please try again.';
            
            // Provide specific error messages based on the error type
            if (error.status === 412) {
                errorMessage = 'Gmail authentication failed. Please reconnect your Gmail account in EmailJS dashboard.';
                toast.error("Gmail API Error: Please reconnect your Gmail account in EmailJS dashboard", {
                    position: "top-right",
                    autoClose: 8000,
                });
            } else if (error.status === 400) {
                errorMessage = 'Invalid email parameters. Please check your information.';
                toast.error("Invalid form data. Please check your inputs.", {
                    position: "top-right",
                    autoClose: 5000,
                });
            } else {
                toast.error(`Email error: ${error.text || error.message}`, {
                    position: "top-right",
                    autoClose: 7000,
                });
            }
            
            setStatus(errorMessage);
            setTimeout(() => setStatus(''), 7000); // Clear status after 7 seconds
        }
    };

  // SEO structured data for Contact page - Added By Bhushan on 15_01_2025
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MVS IT GIANT",
    "description": "Get in touch with MVS IT GIANT for your software development needs. Contact us for custom software development, mobile app development, cloud solutions, and IT consulting services.",
    "mainEntity": {
      "@type": "Organization",
      "name": "MVS IT GIANT",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9792540100",
          "contactType": "customer service",
          "email": "mvsitgiants@gmail.com",
          "areaServed": "Worldwide",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-7668747899",
          "contactType": "sales",
          "email": "mvsitgiants@gmail.com",
          "areaServed": "Worldwide",
          "availableLanguage": "English"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      }
    }
  };

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Contact MVS IT GIANT | Software Development Company | Get In Touch"
        description="Contact MVS IT GIANT for expert software development services. Reach out for custom software development, mobile app development, cloud solutions, and IT consulting. Located in Bangalore, India."
        keywords="contact MVS IT GIANT, software development company contact, custom software development inquiry, mobile app development consultation, cloud solutions contact, IT consulting services, Bangalore software company contact"
        canonical="https://mvsitgiants.com/contact"
        structuredData={contactStructuredData}
      />
      <ToastContainer aria-label="Toast notifications" />
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question about our services or want to start a project, we're ready to answer."
        backgroundImage={`/asset/contactushero.jpg`}
      />

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-light p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full bg-secondary border-muted/50 rounded-md shadow-sm py-3 px-4 text-primary focus:outline-none focus:ring-accent focus:border-accent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted">Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full bg-secondary border-muted/50 rounded-md shadow-sm py-3 px-4 text-primary focus:outline-none focus:ring-accent focus:border-accent" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      value={formData.phone} 
                      onChange={(e) => {
                        const value = e.target.value;
                        // Allow only numeric characters - Added By Bhushan on 15_01_2025
                        if (/^\d*$/.test(value)) {
                          setFormData(prevState => ({ ...prevState, phone: value }));
                        }
                      }}
                      required 
                      className="mt-1 block w-full bg-secondary border-muted/50 rounded-md shadow-sm py-3 px-4 text-primary focus:outline-none focus:ring-accent focus:border-accent" 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted">Subject</label>
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full bg-secondary border-muted/50 rounded-md shadow-sm py-3 px-4 text-primary focus:outline-none focus:ring-accent focus:border-accent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted">Message</label>
                  <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full bg-secondary border-muted/50 rounded-md shadow-sm py-3 px-4 text-primary focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-light bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-light transition-colors">
                    Send Message
                  </button>
                </div>
                 {status && <p className={`text-center text-sm ${status.includes('successfully') ? 'text-green-500' : 'text-primary'}`}>{status}</p>}
              </form>
            </div>
            {/* Contact Info */}
            <div className="text-primary">
               <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
               <p className="text-muted mb-8 text-lg">
                You can also reach us through the following channels. We look forward to connecting with you.
               </p>
                <div className="space-y-8">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-light rounded-md text-accent shadow-md">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium">Our Address</h3>
                            <p className="text-muted">Bangalore, Karnataka</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-light rounded-md text-accent shadow-md">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium">Email Us</h3>
                            <p className="text-muted">mvsitgiants@gmail.com</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-light rounded-md text-accent shadow-md">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium">Call Us</h3>
                            <p className="text-muted">+91-9792540100 <br /> +91-7668747899</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-96 bg-secondary">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77662877017!2d77.30056510181397!3d12.954458680706043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1725135150646!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Company Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;