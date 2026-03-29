'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-teal-100 text-lg max-w-2xl">
            Get in touch with our team — whether you need technical support, sales information, or have a partnership inquiry.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">General Inquiries</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>info@bioseqanalyzer.com</p>
                <p>+1 (555) 234-5678</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Technical Support</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>support@bioseqanalyzer.com</p>
                <p>+1 (555) 234-5679</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Sales</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>sales@bioseqanalyzer.com</p>
                <p>+1 (555) 234-5680</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Office Address</h3>
              <div className="text-sm text-gray-600">
                <p>BioSeq Analyzer, Inc.</p>
                <p>400 Technology Square, Suite 800</p>
                <p>Cambridge, MA 02139</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                <p>Saturday: 9:00 AM - 1:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-xl h-48 flex items-center justify-center">
              <div className="text-teal-600/40 text-xl font-bold">Map</div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
