import React from 'react';
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Link from 'next/link';
import styles from "src/styles/NavBar.module.css";

interface NavLinksPropps {
	handleNav: () => void;
}

export const NavLinks = ({ handleNav }: NavLinksPropps) => {
	return (
		<ul className={styles.navLinks}>
			<li onClick={handleNav}><Link href="//twitter.com/0xsid3ei" target='_blank' className={styles.navLink}><FaTwitter /></Link></li>
			<li onClick={handleNav}><Link href="//www.linkedin.com/in/cid3ei" target='_blank' className={styles.navLink}><FaLinkedin /></Link></li>
			<li onClick={handleNav}><Link href="//github.com/0xCiD3ei" target='_blank' className={styles.navLink}><BsGithub /></Link></li>
			<li onClick={handleNav}><a href="mailto:duytiennguyen5111@gmail.com" target='_blank' className={styles.navLink} rel="noreferrer"><BiEnvelope /></a></li>
		</ul>
	)
};
