import { useState } from "react";
import "./Home.css";
import { AiFillLinkedin } from "react-icons/ai";

export default function Home() {
	const [pipe, setPipe] = useState("|");
	const stars = [
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
	];
	setTimeout(() => {
		if (pipe.includes("|")) {
			setPipe(" ");
			return;
		}
		setPipe("|");
	}, 500);
	return (
		<>
			<section className="home-container">
				<h1>hi, my name is</h1>
				<p>
					<span className="home-myname-span">Andrei Barut</span>
					<br></br>I am software developer, passionate, open to a new professional
					challenge and ready to take on responsibilities. Reliable team member
					always ready to help. Quick learner with problem-solving and
					decision-making mindset, and excellent interpersonal skills, I am seeking
					to be employed in a company with strong organizational culture, where I can
					add value using my skills and my previous professional experience within
					the IT Industry.
					<span className="home-pipe-span"> |</span>
				</p>
				<div className="home-resume-container">resume</div>
			</section>
			<div className="line"></div>
			<div className="circle">
				<a
					href="https://www.linkedin.com/in/andrei-emilian-b%C4%83ru%C8%9B-254387237"
					target={"_blank"}
				>
					<AiFillLinkedin />
				</a>
			</div>
		</>
	);
}
