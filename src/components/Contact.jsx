import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

/*
  IMPORTANT:
  - Set these environment variables locally in .env (do NOT commit .env):
      VITE_EMAILJS_SERVICE_ID=service_xxx
      VITE_EMAILJS_TEMPLATE_ID=template_xxx
      VITE_EMAILJS_PUBLIC_KEY=user_xxx

  - In Vercel: add the same keys in Project > Settings > Environment Variables
*/

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });
  const hideTimeoutRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  // Read env vars (Vite injects import.meta.env at build time)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Auto-hide inline message after 5s
  const scheduleHideMessage = () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setFormMessage({ type: '', text: '' });
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const onSubmit = async (data) => {
    // basic runtime check for env vars so debugging is easier
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const msg = 'EmailJS environment variables are not set.';
      console.error(msg);
      toast.error('Contact not configured. Please contact the site owner.');
      setFormMessage({ type: 'error', text: 'Contact form is not configured. Please try later.' });
      scheduleHideMessage();
      return;
    }

    setIsSubmitting(true);
    setFormMessage({ type: '', text: '' });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        },
        PUBLIC_KEY
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormMessage({ type: 'success', text: '✅ Message sent successfully!' });
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again.');
      setFormMessage({ type: 'error', text: '❌ Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
      scheduleHideMessage();
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nemalanikhil7@gmail.com',
      href: 'mailto:nemalanikhil7@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6302048688',
      href: 'tel:6302048688'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Visakhapatnam, AP',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nikhil-nemala-643443275/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Nikhilnemala', label: 'GitHub' },
    { icon: Code, href: 'https://leetcode.com/u/Nemala123/', label: 'LeetCode' }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto mb-8" />
          <p className="text-lg text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Let's Connect
              </h3>
              <p className="text-zinc-600 dark:text-slate-400 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {info.title}
                    </h4>
                    <a
                      href={info.href}
                      className="text-zinc-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-cyan-500 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-600 dark:text-slate-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-500 hover:text-white transition-all"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-zinc-700"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Subject *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-900 dark:text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white resize-none"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-800 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={20} />
                )}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>

              {/* Inline success/error message (auto-hide after 5s) */}
              {formMessage.text && (
                <p
                  className={`mt-4 text-center text-sm ${
                    formMessage.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {formMessage.text}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
