import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function PageTransition({ children, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.main
      className={className}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? {} : { opacity: 0, y: -10 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
