import { motion } from "framer-motion";
import styles from "src/styles/About.module.css";
import ProfileImg from "src/assets/images/profile.jpg";

export default function About() {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 2, bounce: 0.3 }
  }

  return (
    <div className={"about"} id='about'>
      <div className={"container"}>
        <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} viewport={{ once: true }} className={styles.heading}>
          <p className={styles.headingSubText}>Who I am</p>
          <p className={styles.headingText}>About Me</p>
        </motion.div>
        <div className={styles.splitAbout}>
          <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} className={styles.aboutContent}>
            <p>Hello! My name is Tien and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try out for my first school project — turns out putting together a simple website taught me a lot about HTML & CSS! </p>
            <br />
            <p> I’ve had the privilege of working with some experienced professionals which has enhanced my skills and rate of learning. My main focus these days is building accessible, inclusive products and digital experiences, as well as creating designs and illustrations. With my experience I have what it takes to solve real world problems.</p>
          </motion.div>
          <motion.div initial={{ x: '50', opacity: 0 }} whileInView={horizontal} className={styles.aboutImg}>
            <img src={ProfileImg.src} alt="profile" />
          </motion.div>
        </div>
      </div>
    </div>

  )
}