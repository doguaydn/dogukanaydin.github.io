import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const SpotlightCursor = () => {
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible, x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed w-[600px] h-[600px] rounded-full z-[60]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
      }}
    />
  );
};

export default SpotlightCursor;
