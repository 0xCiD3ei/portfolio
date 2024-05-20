import { IoColorWandOutline } from "react-icons/io5";
import { BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import styles from "src/styles/Services.module.css";

export default function Services() {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4
    }
  }

  return (
    <div className="services" id='services'>
      <div className="container">
        <motion.div whileInView={fade} viewport={{ once: true }} initial={{ opacity: 0 }} className="heading">
          <p className="heading-sub-text">What I can do</p>
          <p className='heading-text'>Services</p>
        </motion.div>
        <motion.div className={styles.servicesBox} whileInView={fade} initial={{ opacity: 0 }}>
          <div className={styles.servicesCard}>
            <BiCodeAlt className={styles.servicesIcon} />
            <p className={styles.servicesTitle}>Web Development</p>
            <p className={styles.servicesDesc}>I use various web technologies to develop attractive,creative, interactive, responsive and functional website layouts. </p>
          </div>
          <div className={styles.servicesCard}>
            <IoColorWandOutline className={styles.servicesIcon} />
            <p className={styles.servicesTitle}>UI Design</p>
            <p className={styles.servicesDesc}>I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}