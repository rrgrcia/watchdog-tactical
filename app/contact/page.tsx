'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Get In <span className="text-amber-500">Touch</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
              Reach out to us with any questions, comments, or suggestions. We're happy to assist!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative -mt-9 pb-0 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Get in touch with our team. We're here to help with any questions about our products, custom orders, or general inquiries.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <Phone className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">Phone</h3>
                    <a href="tel:9802249835" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                      (980) 224-9835
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <Mail className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">Email</h3>
                    <a href="mailto:customerservice@wdtactical.com" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                      customerservice@wdtactical.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">Location</h3>
                    <p className="text-zinc-400 text-sm">
                      10430 Harris Oaks Blvd, STE H
                      <br />
                      Charlotte, NC 28269
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="p-4 bg-green-500/10 rounded-full">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Message Sent!
                    </h3>
                    <p className="text-zinc-400 text-center">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-zinc-400 mb-1.5"
                        >
                          Your name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-zinc-400 mb-1.5"
                        >
                          Your email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-zinc-400 mb-1.5"
                        >
                          Your phone (optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                          placeholder="(980) 224-9835"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-zinc-400 mb-1.5"
                        >
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-zinc-400 mb-1.5"
                      >
                        Your message (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    {/* Consent Text */}
                    <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        By providing your phone number in this contact form, you consent to receive phone calls from us for communication regarding your inquiry or the services/products we offer. Additionally, if you want to opt-in for text notifications, you can do so by texting "JOIN" to 704-761-7442. By texting "JOIN," you consent to receive text communications from us. You may reply "STOP" anytime to cancel text notifications or "HELP" for assistance. Message and data rates may apply.{' '}
                        <a href="/privacy-policy" className="text-amber-500 hover:text-amber-400 underline">
                          View Privacy Policy
                        </a>
                        .
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-amber-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is your typical turnaround time for custom orders?',
                a: 'Custom orders typically take 2-4 weeks depending on complexity and current order volume. Rush orders may be available for an additional fee.',
              },
              {
                q: 'Do you offer warranties on your products?',
                a: "Yes, all our products come with a lifetime warranty against defects in materials and workmanship. We stand behind everything we make.",
              },
              {
                q: 'Can I request modifications to existing designs?',
                a: 'Absolutely! We specialize in custom work and can modify any of our standard designs to meet your specific needs.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-900 rounded-lg border border-zinc-800"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


