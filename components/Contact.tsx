
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setStatus('sending');

    try {
      // Using Web3Forms for direct email sending
      // Note: Replacing YOUR_ACCESS_KEY_HERE with a real key from https://web3forms.com/
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "830cc8c4-9cbf-46fd-9754-cbce647fa81d", // Replace with your actual Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you! Your message has been sent successfully.');
      } else {
        setStatus('error');
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      alert('Error sending message. Please check your internet connection and try again.');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F9FAFB] dark:bg-gray-900 rounded-[3rem] p-8 md:p-16 text-center shadow-sm transition-colors duration-300">
        <div className="mb-12">
          <span className="inline-block px-4 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Get in Touch</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-light transition-colors duration-300">Have a role in mind? I'll respond within 6 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-8 py-5 rounded-full bg-white dark:bg-gray-800 border-transparent focus:border-orange-600 focus:ring-0 text-gray-900 dark:text-white font-medium transition-all shadow-sm outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-8 py-5 rounded-full bg-white dark:bg-gray-800 border-transparent focus:border-orange-600 focus:ring-0 text-gray-900 dark:text-white font-medium transition-all shadow-sm outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
          </div>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help you?"
            className="w-full px-8 py-6 rounded-[2rem] bg-white dark:bg-gray-800 border-transparent focus:border-orange-600 focus:ring-0 text-gray-900 dark:text-white font-medium transition-all shadow-sm outline-none resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
          ></textarea>
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full py-5 bg-black dark:bg-orange-600 text-white rounded-full text-xl font-bold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
        </form>

        <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col items-center space-y-4">
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Let's Connect</p>
          <div className="flex flex-col space-y-2">
            <a href={`tel:${PERSONAL_INFO.phone}`} className="text-3xl font-bold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
              {PERSONAL_INFO.phone}
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
