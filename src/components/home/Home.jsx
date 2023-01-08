import { useState } from "react";
import "./Home.css";

export default function Home() {
	const [pipe, setPipe] = useState("|");
	setTimeout(() => {
		if (pipe.includes("|")) {
			setPipe(" ");
			return;
		}
		setPipe("|");
	}, 500);
	return (
		<div className="home-container">
			<h1>hi, my name is</h1>
			<p>
				<span className="home-myname-span">Andrei Barut</span>
				<br></br>
				and I am an aspiring front end engineer, currently working for an
				opportunity to prove my skills and become a valuable asset
				<span className="home-pipe-span"> |</span>
			</p>
			<div className="home-resume-container">resume</div>
		</div>
	);
}
