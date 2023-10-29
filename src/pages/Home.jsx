import styles from "./Home.module.css";
import UseMouseLocation from "../hooks/useMouseLocation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Home({ setSelected }) {
  const [active, setActive] = useState(false);
  const { x, y } = UseMouseLocation();
  const size = active ? 400 : 32;
  useEffect(() => {
    setSelected(0);
  }, []);

  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <motion.div className={styles.firstText}>
          <h1 className={styles.log}>IQuRAn.</h1>
          <h1>
            Explore the Quran, Adzkar, and Accurate Prayer Times at Your
            One-Stop Islamic Center
          </h1>
        </motion.div>
        <motion.div
          className={styles.secondText}
          animate={{
            WebkitMaskPosition: `${x - 950 / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <h1
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            استكشف القرآن، الأذكار، وأوقات الصلاة الدقيقة في مركزك الإسلامي
            متعدد الخدمات
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
