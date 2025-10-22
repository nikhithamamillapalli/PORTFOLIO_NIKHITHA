import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsLoading(true);

      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Nikhitha'
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        setSubmitError(
          'Failed to send message. Please try again or contact me directly via email.'
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nikhithamamillapalli99@gmail.com',
      link: 'mailto:nikhithamamillapalli99@gmail.com',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6281529578',
      link: 'tel:+916281529578',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      link: null,
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nikhitha-mamillapalli-a30aba258/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/nikhithamamillapalli',
      color: 'hover:text-orange-600'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Available for remote work and open to relocation opportunities. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="group">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                          <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                            <p className="text-gray-900 font-semibold">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                          <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl text-white`}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                            <p className="text-gray-900 font-semibold">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-gray-700 ${social.color} group`}
                    >
                      <Icon size={24} className="group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Work Availability</h3>
              <p className="text-blue-50 leading-relaxed">
                I am actively seeking opportunities in full stack development. Open to remote positions
                and willing to relocate for the right opportunity. Let's discuss how I can contribute
                to your team's success!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600 text-center">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <>
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Error Sending Message</h4>
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  </div>
                )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:border-blue-600 focus:outline-none transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:border-blue-600 focus:outline-none transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } focus:border-blue-600 focus:outline-none transition-colors resize-none`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
