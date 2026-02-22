import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiCode, FiSmartphone } from 'react-icons/fi';

const About = () => {
  const expertise = [
    {
      icon: FiServer,
      title: 'Backend Development',
      description: 'Building robust APIs and microservices with Node.js, Express, and Java Spring Boot.',
      color: 'primary',
    },
    {
      icon: FiCloud,
      title: 'DevOps & Cloud',
      description: 'Docker, AWS, CI/CD pipelines, and infrastructure automation.',
      color: 'accent',
    },
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Creating responsive interfaces with React, Vue.js, and modern frameworks.',
      color: 'secondary',
    },
    {
      icon: FiSmartphone,
      title: 'Database & Caching',
      description: 'PostgreSQL, MongoDB, Redis, Elasticsearch for optimal data management.',
      color: 'primary',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm">&gt; 01. who_am_i</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-dark-800/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 font-mono text-sm text-gray-500">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2">about.md</span>
              </div>
              <div className="font-mono text-sm space-y-4 text-gray-300">
                <p>
                  <span className="text-primary">## </span>
                  Hi there! 👋
                </p>
                <p>
                  I'm a <span className="text-primary">Computer Engineer</span> with 
                  <span className="text-accent"> 3+ years</span> of experience building
                  production-ready applications.
                </p>
                <p>
                  My journey started with curiosity about how systems work, and evolved into 
                  a passion for creating <span className="text-primary">scalable</span>, 
                  <span className="text-accent"> efficient</span>, and 
                  <span className="text-secondary"> reliable</span> software solutions.
                </p>
                <p>
                  I specialize in <span className="text-primary">backend development</span> but 
                  I'm comfortable working across the entire stack. I love solving complex 
                  problems and turning ideas into reality.
                </p>
                <p>
                  <span className="text-gray-500">// Currently open to new opportunities</span>
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Completed' },
                { value: '2', label: 'Apps in Production' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-dark-800/30 border border-gray-800 rounded-lg"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-5 bg-dark-800/50 border border-gray-800 rounded-lg hover:border-primary/50 transition-all group"
              >
                <div className={`w-12 h-12 rounded-lg bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`text-${item.color}`} size={24} />
                </div>
                <h3 className="font-display font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
