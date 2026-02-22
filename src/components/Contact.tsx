import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'doguaydin.comp@gmail.com', href: 'mailto:doguaydin.comp@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+90 553 347 50 29', href: 'tel:+905533475029' },
    { icon: FiMapPin, label: 'Location', value: 'İstanbul, Turkey', href: null },
  ];

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/doguaydn' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/dgknaydin' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">&gt; 05. contact</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-4">
              Let's work together!
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question, want to collaborate, or just want to say hi, 
              feel free to reach out. I'll try my best to get back to you!
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-primary hover:border-primary transition-all"
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Terminal style CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-dark-800 border border-gray-800 rounded-xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-900 border-b border-gray-800">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-gray-500 font-mono">contact.sh</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm">
                <p className="text-gray-500 mb-2">
                  <span className="text-primary">$</span> cat contact_info.txt
                </p>
                <div className="space-y-1 mb-4 text-gray-400">
                  <p>Name: Doğukan Aydın</p>
                  <p>Role: Fullstack Developer</p>
                  <p>Status: <span className="text-green-400">Available for hire</span></p>
                </div>
                
                <p className="text-gray-500 mb-2">
                  <span className="text-primary">$</span> send_message --to doguaydin
                </p>
                <p className="text-accent mb-4">
                  Ready to receive your message...
                </p>

                <motion.a
                  href="mailto:doguaydin.comp@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 bg-primary text-dark-900 font-semibold text-center rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Say Hello 👋
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
