import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";

function App() {
	return (
		<div>
			<Navbar />

			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
