import { motion } from "framer-motion";
import { SkillsData } from "src/configs/app.config";
import styles from "src/styles/Skills.module.css";

export default function Skills() {
  const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

  return (
    <div className='skills' id='skills'>
				<div className='container'>
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className='heading'>
						<p className='heading-sub-text'>What I work with</p>
						<p className='heading-text'>My Skills</p>
					</motion.div>
					<motion.div
						whileInView={skillEffect}
						className={styles.skillsBox}
						initial={{ y: "-80px", opacity: 0 }}>
						{SkillsData.map((el, index) => (
							<div className={styles.skillCard} key={index}>
								<div className={styles.skillIcon}>{el.icon}</div>
								<small className={styles.skillDesc}>{el.name}</small>
							</div>
						))}
					</motion.div>
				</div>
			</div>
  )
}