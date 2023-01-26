import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
// import { FadeIn } from "react-slide-fade-in";
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	FadeIn,
	FadeOut,
	Zoom,
	ZoomOut,
	ZoomIn,
	Fade,
	StickyIn,
	StickyOut,
	MoveOut,
	MoveIn,
} from "react-scroll-motion";

function App() {
	return (
		<div>
			{/* <FadeIn
				from="top"
				positionOffset={2000}
				triggerOffset={2000}
				delayInMilliseconds={0}
			> */}
			<Navbar />
			{/* <ScrollContainer> */}
			{/* <ScrollPage>
					<Animator animation={Fade()}> */}
			<Home />
			{/* </Animator>
				</ScrollPage> */}
			{/* <ScrollPage>
					<Animator animation={Fade()}> */}
			<About />
			{/* </Animator> */}
			{/* </ScrollPage>
			</ScrollContainer> */}

			{/* <div>content</div> */}
			<Projects />
		</div>
	);
}

export default App;
