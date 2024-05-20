import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "src/styles/HeroSession.module.css";

interface HeroSessionProps {
  nav: boolean;
  handleNav: () => void;
}

export default function HeroSession({ nav, handleNav }: HeroSessionProps) {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
		scroll.scrollToTop({ smooth: "linear" });
	};

  const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	window.addEventListener("scroll", toggleVisible);

  const heroVariants = {
		hidden: {
			opacity: 0,
			y: "-50%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const menuVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			transition: {
				duration: 1,
			},
		},
	};

  return (
    <div className={styles.heroSection} id='home'>
			<div className={styles.heroOverlay}></div>
			<motion.div
				variants={menuVariants}
				initial='hidden'
				whileInView='visible'
				onClick={handleNav}
				className={styles.menuIcon}>
				{nav ? <FaTimes /> : <FaBars />}
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className={visible ? `${styles.toTopIcon} ${styles.show}` :  `${styles.toTopIcon} ${styles.hide}`}
				onClick={scrollToTop}>
				<AiOutlineArrowUp />
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className={styles.heroContent}>
				<p className={styles.heroIntro}>
					<span>Tien</span> <span>Nguyen Duy.</span>
				</p>
				<p className={styles.heroDesc}>
					I&apos;m a <span className={styles.heroDescSub}>Web Developer.</span>
				</p>
			</motion.div>
			<motion.span
				variants={contactVariants}
				initial='hidden'
				whileInView='visible'>
				<a
					href='Nguyen-Duy-Tien CV.pdf'
					download='Nguyen-Duy-Tien CV'
					className={styles.heroContact}>
					Download CV <BiDownload className={styles.cvIcon} />
				</a>
			</motion.span>
		</div>
  )
}