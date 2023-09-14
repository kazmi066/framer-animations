import { useRef } from "react";
import { CardType, cards } from "./cards";
import { useScroll, useTransform, motion } from "framer-motion";

export const Card = ({ card } : { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export const HorizontalScrollAnimation = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-75%'])

  return (
    <section ref={sectionRef} className="h-[300vh] bg-darker-grey py-10 border-y-[1px] border-primary-grey">
      <div className="h-screen sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  )
}

