import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-dark-900 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <motion.span
            className="font-mono text-5xl font-bold text-primary inline-block"
            animate={{
              textShadow: [
                '0 0 10px rgba(168,85,247,0.3)',
                '0 0 30px rgba(168,85,247,0.6)',
                '0 0 10px rgba(168,85,247,0.3)',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            &lt;DA /&gt;
          </motion.span>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="w-48 h-[2px] bg-dark-700 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #a855f7, #6366f1)',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Terminal text */}
        <motion.p
          className="font-mono text-sm text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            _
          </motion.span>{' '}
          initializing...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
