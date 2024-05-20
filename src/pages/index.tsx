import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "src/styles/Home.module.css";
import HomePage from "src/components/apps-component/HomePage";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const loadText = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <>
    
      {
        loading ?
          <div className={styles.loader}>
            <div className={styles.svgWrapper}>
              <svg height="60" width="290" xmlns="http://www.w3.org/2000/svg">
                <rect className={styles.shape} height="60" width="290" />
              </svg>
              <motion.p variants={loadText} initial='hidden' animate='visible' className={styles.text}>Nguyen Duy Tien</motion.p>
            </div>
          </div>
          :
          <div>
            <HomePage />
          </div>
      }
    </>
  );
}
