import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "src/styles/Contact.module.css";

export default function Contact() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formInput);
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formInput)
    });

    if(!res?.ok) {
      toast.error("Send mail failed!")
      return;
    }

    toast.success("Send mail successfully!")
    setFormInput({
      name: "",
      email: "",
      message: ""
    })
  }

  const fade = {
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }

  const verticalLeft = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5
    }
  }
  return (
    <div className="contact" id='contact'>
      <div className="container">
        <motion.div className="heading" initial={{ opacity: 0 }} whileInView={fade} viewport={{ once: true }}>
          <p className="heading-sub-text">Hire Me</p>
          <p className='heading-text'>Get in Touch</p>
        </motion.div>
        <div className={styles.contactBox}>
          <motion.div className="left-box" initial={{ opacity: 0, y: '-50px' }} whileInView={verticalLeft}>
            <div className={styles.contactHeading}>
              <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form</p>
            </div>
            <div className={styles.contactHello}>
              <p>Say Hello</p>
              <Link className={styles.helloLinks} href="//www.linkedin.com/in/cid3ei" target='_blank'>www.linkedin.com/in/cid3ei</Link>
              <a className={styles.helloLinks} href="mailto:duytiennguyen5111@gmail.com" target='_blank' rel="noreferrer">duytiennguyen5111@gmail.com</a>
            </div>
          </motion.div>
          <motion.div className={styles.rightBox} initial={{ opacity: 0, y: '50px' }} whileInView={verticalLeft}>

            <form
              name="contact-form"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <div className={styles.formTop}>
                <div className={styles.name}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                    value={formInput.name}
                    onChange={(e) => {
                      setFormInput({...formInput, name: e.target.value})
                    }}
                  />
                </div>

                <div className={styles.email}>
                  <label htmlFor="email">Your Email</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    required
                    value={formInput.email}
                    onChange={(e) => {
                      setFormInput({...formInput, email: e.target.value})
                    }}
                  />
                </div>
              </div>

              <div className={styles.formMid}>
                <div className={styles.message}>
                  <label htmlFor="message">Your message</label>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    id="message"
                    placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can"
                    required
                    value={formInput.message}
                    onChange={(e) => {
                      setFormInput({...formInput, message: e.target.value})
                    }}
                  ></textarea>
                </div>
              </div>

              <div className={styles.formBtn}>
                <button type="submit" className={styles.heroContact} onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}