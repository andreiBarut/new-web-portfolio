import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { FadeIn } from "react-slide-fade-in";

function App() {
	return (
		<div>
			<FadeIn
				from="top"
				positionOffset={2000}
				triggerOffset={2000}
				delayInMilliseconds={0}
			>
				<Navbar />
				<Home />
			</FadeIn>

			{/* <div>content</div> */}
		</div>
	);
}

export default App;
