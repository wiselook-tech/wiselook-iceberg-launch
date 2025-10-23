import { motion } from "motion/react";

const Subtitle = ({ text }: { text: string }) => {
  return (
    <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
      {text}
    </motion.p>
  );
};

export { Subtitle };
