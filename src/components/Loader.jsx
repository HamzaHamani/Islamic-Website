import "./Loader.css";
import { motion, AnimatePresence } from "framer-motion";
function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className="dot-spinner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;
