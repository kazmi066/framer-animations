import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "./images";
import { useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

export const ImagesGridRevealAnimation = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0", "end end"],
  });

  const imageTransforms = [
    {
      x: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-90%"]),
      y: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-100%"]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
    },
    {
      x: useTransform(scrollYProgress, [0, 0.5], ["-50%", "50%"]),
      y: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-90%"]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
    },
    {
      x: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-150%"]),
      y: useTransform(scrollYProgress, [0, 0.5], ["-50%", "10%"]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
    },
    {
      x: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-10%"]),
      y: useTransform(scrollYProgress, [0, 0.5], ["-50%", "40%"]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
    },
    {
      x: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-150%"]),
      y: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-110%"]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
    },
    {
      x: useTransform(scrollYProgress, [0, 0.5], ["-50%", "0%"]),
      y: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-130%"]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.4]),
    },
    {
      x: useTransform(scrollYProgress, [0, 0.5], ["-50%", "-100%"]),
      y: useTransform(scrollYProgress, [0, 0.5], ["-50%", "40%"]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.4]),
    },
    {
      x: useTransform(scrollYProgress, [0, 0.5], ["-50%", "50%"]),
      y: useTransform(scrollYProgress, [0, 0.5], ["-50%", "20%"]),
      scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
    },
  ];

  const textOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className={`relative bg-darker-grey border-b-[1px] ${
        isMobile ? "h-screen" : "h-[300vh]"
      } border-primary-grey`}
    >
      <div className="h-screen sticky top-0 flex items-center justify-center">
        {!isMobile && (
          <div className="z-20">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`image-${index}`}
                className="w-[400px] h-[400px] object-cover rounded-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                style={{
                  x: imageTransforms[index % imageTransforms.length].x,
                  y: imageTransforms[index % imageTransforms.length].y,
                  scale: imageTransforms[index % imageTransforms.length].scale,
                }}
              />
            ))}
          </div>
        )}
        <div className="w-full mx-auto z-10 text-white flex items-center justify-center">
          <motion.h1 style={{ opacity: !isMobile ? textOpacity : 1 }}>Memories :)</motion.h1>
        </div>
      </div>
    </section>
  );
};
