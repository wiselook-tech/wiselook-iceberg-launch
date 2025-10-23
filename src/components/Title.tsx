import { motion } from "motion/react";

const Title = ({ text }: { text: string }) => {
  return (
    <motion.h2
      className="font-heading font-bold text-5xl text-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {text}
    </motion.h2>
  );
};

export { Title };
