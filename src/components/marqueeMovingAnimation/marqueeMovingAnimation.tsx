import { useRef } from 'react';
import Styles from './marqueeMovingAnimation.module.css';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap
} from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={Styles.parallax}>
      <motion.div className={Styles.scroller} style={{ x }}>
        <h1 className="text-lighter-grey">&nbsp;{children}</h1>
        <h1 className="text-lighter-grey">&nbsp;{children}</h1>
        <h1 className="text-lighter-grey">&nbsp;{children}</h1>
        <h1 className="text-lighter-grey">&nbsp;{children}</h1>
      </motion.div>
    </div>
  );
}

export const MarqueeMovingAnimation = () => {
  return (
    <section className="bg-darker-grey border-b-[1px] border-primary-grey h-screen flex items-center justify-center">
      <div className="w-full mx-auto">
        <ParallaxText baseVelocity={-3}>Frontend Developer</ParallaxText>
        <ParallaxText baseVelocity={1}>React | Nextjs | Javascript | TailwindCss</ParallaxText>
      </div>
    </section>
  )
}
