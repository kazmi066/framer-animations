import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const BackgroundChangeAnimation = () => {
  const ref = useRef(null);
  const sectionInView = useInView(ref, { once: false, margin: "0% 0% -40% 0%" });

  return (
    <motion.section ref={ref} className={`${sectionInView ? 'bg-black' : 'bg-darker-grey'} transition-all duration-700 h-screen border-b-[1px] border-primary-grey`}>
      <div className="flex flex-col text-lighter-grey items-start justify-center md:w-[60%] w-[90%] h-full mx-auto">
        <h1>Background Change</h1>
      </div>
    </motion.section>
  )
}
