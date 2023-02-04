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
// import Cursor from "react-special-cursor";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function App() {
	return (
		<div>
			{/* <Cursor> */}
			<Navbar />
			{/* <Fade> */}
			{/* <Fade direction="bottom" duration={1500}> */}
			<Home />
			<About />
			<Projects />
			{/* </Fade> */}
			<Fade triggerOnce>
				<div className="app-links-container">
					{/* <div className="app-line"></div> */}
					<div className="app-linkedIn-square">
						<a href="/">
							<AiFillLinkedin />
						</a>
					</div>
					<div className="app-github-square">
						<a href="/">
							<AiFillGithub />
						</a>
					</div>
				</div>
			</Fade>
			{/* </Fade> */}
			{/* </Cursor> */}
		</div>
	);
}

export default App;
