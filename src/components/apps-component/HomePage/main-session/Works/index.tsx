import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import { FiFolder, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { WorkData } from "src/configs/app.config";
import styles from "src/styles/Works.module.css";

export default function Works() {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<div className='works' id='works'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={fade}
						viewport={{ once: true }}
						className='heading'>
						<p className='heading-sub-text'>I build real value</p>
						<p className='heading-text'>Works</p>
					</motion.div>

					<motion.div
						className={styles.worksBox}
						initial={{ opacity: 0 }}
						whileInView={fade}>
						{WorkData.map((w, index) => {
							return (
								<div key={index}>
									<Link href={w.site} target='_blank' className={styles.workLinkGroup}>
										<div className={styles.worksCard}>
											<div className={styles.worksContainer}>
												<div className={styles.topWork}>
													<FiFolder className={styles.workFolder} />
													<div className={styles.right}>
														<Link
															className={styles.workGit}
															href={w.gitlink}
															target='_blank'>
															<FiGithub />
														</Link>
														<Link
															className={styles.workLink}
															href={w.site}
															target='_blank'>
															<IoOpenOutline />
														</Link>
													</div>
												</div>
												<div className={styles.midWork}>
													<p className={styles.workTitle}>{w.title}</p>
													<p className={styles.workDesc}>{w.desc}</p>
												</div>
												<div className={styles.bottomWork}>
													{w.tech.map((e, index) => {
														return <small key={index}>{e}</small>;
													})}
												</div>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
	);
};
