import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const shapes = [
  { left: '15%', color: '#a855f7' },
  { left: '80%', color: '#6366f1' },
  { left: '45%', color: '#be185d' },
  { left: '10%', color: '#a855f7' },
  { left: '75%', color: '#6366f1' },
];

const ParallaxDivider = ({ variant = 0 }: { variant?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const shape = shapes[variant % shapes.length];

  return (
    <div ref={ref} className="relative py-16 overflow-hidden">
      {/* Floating square */}
      <motion.div
        style={{ y: y1, rotate, left: shape.left }}
        className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg border opacity-[0.08]"
        {...{ style: { y: y1, rotate, left: shape.left, borderColor: shape.color } }}
      />

      {/* Floating dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{
          y: y2,
          left: variant % 2 === 0 ? '65%' : '30%',
          backgroundColor: shape.color,
          opacity: 0.2,
        }}
      />

      {/* Center gradient line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
};

export default ParallaxDivider;
