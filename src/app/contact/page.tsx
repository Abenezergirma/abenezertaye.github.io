'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert(result.error || 'Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    alert('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
 -   <div className="py-16 bg-white">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-700 mb-4">Get In Touch</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or have questions about my work? 
            I'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-lg">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Email</h3>
                    <a 
                      href={`mailto:${siteConfig.links.email}`}
                      className="text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      {siteConfig.links.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-lg">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Phone</h3>
                    <a 
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-lg">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">Office</h3>
                    <p className="text-secondary-600">{siteConfig.contact.office}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="p-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-primary"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-primary resize-vertical"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}