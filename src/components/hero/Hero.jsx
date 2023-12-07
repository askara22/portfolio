import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
	initial: {
		x: -500,
		opacity: 0
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1
		}
	},
	scrollAnimation: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity
		}
	}
}

const slideVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-300%",
		transition: {
			duration: 20,
			repeat: Infinity,
			repeatType: "mirror"
		}
	}
}

const Hero = () => {

	const projects =["Project"]
	const contacts = ["Contact"]

  return (
	<div className="hero">
		<div className="wrapper">
			<motion.div 
			className="textContainer"
			variants={textVariants}
			initial="initial"
			animate="animate">
				<motion.h2 variants={textVariants}>Nurul Fauzi</motion.h2>
				<motion.h1 variants={textVariants}>Web Developer</motion.h1>
				<motion.div className="buttons" variants={textVariants}>
					<motion.button 
					variants={textVariants}
					>
						{projects.map((project) => (
						<a href={`#${project}`} key={project}>
							See the Latest Works
						</a>
						))}
					</motion.button>
					<motion.button 
					variants={textVariants}
					>
					{contacts.map((contact) => (
						<a href={`#${contact}`} key={contact}>
							Contact Me
						</a>
						))}
					</motion.button>
				</motion.div>
				<motion.img variants={textVariants} animate="scrollAnimation" src="/scroll.png" alt="" />
			</motion.div>
		</div>
		<motion.div 
		className="slidingTextContainer"
		variants={slideVariants}
		initial="initial"
		animate="animate">
			Front-End Developer
		</motion.div>
		<div className="imageContainer">
			<img src="/foto.png" alt="" />	
		</div>
	</div>
  )
}

export default Hero
