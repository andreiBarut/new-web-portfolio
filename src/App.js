import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import {
	Fade,
	Reveal,
	Zoom,
	JackInTheBox,
	Roll,
	Slide,
} from "react-awesome-reveal";
import Cursor from "react-special-cursor";
import { AiFillLinkedin } from "react-icons/ai";

function App() {
	return (
		<div>
			<Cursor>
				<Navbar />
				<Fade>
					<Slide direction="left" duration={1000}>
						<Home />
						<About />
						<Projects />
					</Slide>
				</Fade>
			</Cursor>
		</div>
	);
}

export default App;
