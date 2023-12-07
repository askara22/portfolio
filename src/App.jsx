import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax"
import About from "./components/about/About"
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"

const App = () => {
  return <div>
	<section id="Homepage">
		<Navbar/>
		<Hero/>
	</section>
	<section id="About"><Parallax type="about"/></section>
	<section>
		<About/>
	</section>
	<section id="Project"><Parallax type="portfolio"/></section>
	<Project />
	<section id="Contact">
		<Contact />
	</section>
  </div>;
};

export default App;
