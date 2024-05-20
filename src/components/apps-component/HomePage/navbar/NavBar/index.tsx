import React from "react";
import { FaHome, FaLaptop } from "react-icons/fa";
import { BiBookContent, BiServer, BiEnvelope } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { NavLinks } from "../NavLinks";
import styles from "src/styles/NavBar.module.css";
import ProfileImg from "src/assets/images/profile.jpg";

interface NavBarProps {
  nav: boolean;
  handleNav: () => void;
}

const navVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function NavBar({ nav, handleNav }: NavBarProps) {
  return (
    <AnimatePresence>
      <motion.nav
				initial={{ width: "0" }}
				animate={
					nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }
				}
				className={nav ? `${styles.navbar} ${styles.active}` : styles.navbar}>
				<motion.div
					initial='hidden'
					whileInView={nav ? "visible" : "hidden"}
					variants={navVariants}
					exit='hidden'
					className={styles.navbarContainer}>
					<div className={styles.topDetails}>
						<div className={styles.img__cover}>
							<img src={ProfileImg.src} alt='Main' className={styles.profilePicSmall} />
						</div>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={handleNav}
							to='home'
							className={styles.profileName}>
							Nguyen Duy Tien
						</Link>
						<NavLinks handleNav={handleNav} />
					</div>
					<ul className={styles.midDetails}>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='home'
							className={styles.midLinks}>
							<FaHome className={styles.midIcon} />
							<li className={styles.midLink} onClick={handleNav}>
								Home
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='about'
							className={styles.midLinks}>
							<FiUser className={styles.midIcon} />
							<li className={styles.midLink} onClick={handleNav}>
								About
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='skills'
							className={styles.midLinks}>
							<FaLaptop className={styles.midIcon} />
							<li className={styles.midLink} onClick={handleNav}>
								Skills
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='services'
							className={styles.midLinks}>
							<BiServer className={styles.midIcon} />
							<li className={styles.midLink} onClick={handleNav}>
								Services
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='works'
							className={styles.midLinks}>
							<BiBookContent className={styles.midIcon} />
							<li className={styles.midLink} onClick={handleNav}>
								Works
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='contact'
							className={styles.midLinks}>
							<BiEnvelope className={styles.midIcon} />
							<li className={styles.midLink} onClick={handleNav}>
								Contact
							</li>
						</Link>
					</ul>
					<div className={styles.copy}>
						<small className={styles.copyright}>
							© Copyright ©{new Date().getFullYear()} <br /> All rights reserved |
						</small>
					</div>
				</motion.div>
			</motion.nav>
    </AnimatePresence>
  )
}