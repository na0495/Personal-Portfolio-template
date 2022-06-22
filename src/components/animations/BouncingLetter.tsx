import { motion } from "framer-motion";

// -----------------------------------------------
const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};

type BouncingLetterProps = {
  letter: string;
};

export default function BouncingLetter({ letter }: BouncingLetterProps) {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "space-around",
      }}
    >
      <motion.span
        // style={ballStyle}
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          // backgroundColor: ["#ff6699", "#6666ff"],
        }}
      >
        {letter}
      </motion.span>
    </div>
  );
}
