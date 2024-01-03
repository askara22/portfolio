/* eslint-disable react/no-unknown-property */
import "./contact.scss"
import {motion, useInView} from "framer-motion"
import {useRef, useState} from "react"
import emailjs from '@emailjs/browser';

const variants ={
	initial: {
		y: 500,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1
		}
	}
}

const Contact = () => {
	const ref = useRef()
	const formRef = useRef()
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	const isInView = useInView(ref, {margin: "-100px"})

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_33ao1nt', 'template_ar49nwx', formRef.current, 'P8-CB6iyPDos-xHcg')
			.then((result) => {
				setSuccess(true);
			}, (error) => {
				setError(true);
			});
	};

  return (
	<motion.div 
	ref={ref}
	className="contact" 
	variants={variants} 
	initial="initial" 
	whileInView="animate"
	>
		<motion.div className="textContainer" variants={variants}>
			<motion.h1 variants={variants}>Let&apos;s get in touch</motion.h1>
			<motion.div className="item" variants={variants}>
				<h2>Mail</h2>
				<span>nurulfauzi347@gmail.com</span>
			</motion.div>
			<motion.div className="item" variants={variants}>
				<h2>Address</h2>
				<span>Kembang Alley, Kedunghalang, Bogor City</span>
			</motion.div>
			<motion.div className="item" variants={variants}>
				<h2>Phone</h2>
				<span>+62 812-2140-2689</span>
			</motion.div>
		</motion.div>
		<div className="formContainer">
			<motion.div 
			className="phoneSvg"
			initial={{ opacity: 1 }}
			whileInView={{ opacity: 0 }}
			transition={{ delay: 3, duration: 1 }}
			>
			<svg 
			width="500px" 
			height="500px" 
			viewBox="0 0 64 64" 
			>
				<motion.path 
				fill="none"
				strokeWidth={0.4}
				initial={{ pathLength: 0. }}
				animate={isInView && { pathLength: 1 }}
				transition={{ duration: 4 }}
				d="M61.529 29.137c-.856-1.662-2.515-2.615-4.55-2.615c-3.247 0-6.296 2.957-8.987 5.566c-1.245 1.207-2.52 2.443-3.569 3.113l4.447-22.527c.425-1.82.103-3.523-.905-4.793c-.953-1.201-2.461-1.918-4.034-1.918c-2.006 0-4.568 1.252-5.182 4.723l-2.055 8.553V8.715C36.694 4.307 33.751 2 30.843 2c-2.906 0-5.85 2.307-5.85 6.715V19.58l-2.79-10.238c-.705-3.039-3.054-4.123-5.017-4.123c-1.733 0-3.372.785-4.386 2.1c-.978 1.27-1.266 2.914-.822 4.59l1.94 8.861l-2.444-4.797c-1.025-2.014-2.709-3.168-4.62-3.168c-1.667 0-3.253.898-4.14 2.346c-.939 1.531-.956 3.434-.026 5.26c2.807 4.949 7.26 13.484 7.26 15.32c0 .529-.054 1.279-.116 2.148c-.267 3.734-.714 9.984 1.752 15.514c2.261 5.066 9.051 8.605 16.512 8.607c8.69 0 15.945-4.697 19.903-12.887c1.76-3.641 5.697-8.412 9.575-11.604c1.736-1.427 5.801-4.777 3.955-8.372m-50.113 6.584c0-2.898-6.268-14.117-7.501-16.291c-1.897-3.727 3.356-6.385 5.334-2.5L16.5 31.012l.615-2.457l-3.719-17.094c-1.051-3.973 5.469-6.266 6.521-1.74l5.418 20l1.047-2.291V8.742c0-6.24 8.036-6.26 8.036-.021v21.416l1.699-1.895l4-17.25c.928-5.227 7.225-3.074 6.261 1.063l-4.541 23.963c-6.729-.238-16.119 4.293-15.054 14.359c.857-9.309 9.397-12.416 15.199-12.416c2.209 0 2.949-.25 7.324-4.938c7.415-7.943 10.309-4.027 10.221-2.344c-.301 5.76-10.154 7.695-14.606 17.416c-5.846 12.762-22.854 13.279-29.961 7.146c-5.266-4.544-3.544-18.919-3.544-19.52" 
				>
				</motion.path>
			</svg>
			</motion.div>
			<motion.form
			ref={formRef}
			onSubmit={sendEmail}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 4, duration: 1 }}
			>
				<input type="text" required placeholder="Name" name="name" />
				<input type="email" required placeholder="Email"  name="email" />
				<textarea rows={8} placeholder="Message" name="message" />
				<button>Submit</button>
				{error && "Error"}
				{success && "Success"}
			</motion.form>
		</div>
	</motion.div>
  )
}

export default Contact
