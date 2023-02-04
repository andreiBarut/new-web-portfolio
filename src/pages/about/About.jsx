import "./About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import {
	DiCss3,
	DiJavascript1,
	DiReact,
	DiBootstrap,
	DiSass,
	DiGit,
} from "react-icons/di";
import portrait from "../../assets/images/portrait.jpeg";
import { Fade } from "react-awesome-reveal";

export default function About() {
	return (
		<>
			<div className="about-container" id="about">
				<Fade direction="bottom" duration={2000}>
					<article>
						<h1>About me</h1>
						<img src={portrait} alt="myself" className="about-portrait" />
					</article>
				</Fade>

				<article className="about-articles">
					<Fade direction="bottom" duration={2000}>
						<p>
							I was in university when I attended a web design class, where I learned
							to build static web pages using HTML and CSS. But I was curious for more.
							That is when I decided to take the{" "}
							<span className="highlighted">JavaScript coding bootcamp at SDA</span>.
						</p>
					</Fade>
					<Fade>
						<p>
							This allowed me to learn many things over the course of 8 months,
							including
							<span className="highlighted"> JavaScript and React</span>, among other
							technologies, such as
							<span className="highlighted"> HTTP methods</span>, request methods in
							order to
							<span className="highlighted"> fetch data </span>
							and communicate with a server or
							<span className="highlighted"> Web API. </span>Attending the course also
							helped me develop team work and debugging skills, by doing live coding
							sessions with my colleagues and trainers as well. Here are the skills I
							learned over the past year:
						</p>
					</Fade>
					<Fade>
						<article>
							{/* <h1>Skills</h1> */}
							<ul class="about-skills-list">
								{/* <li>
							<AiFillHtml5 />
						</li> */}
								<li>HTML</li>
								{/* <li>
							<DiCss3 />
						</li> */}
								<li>CSS</li>
								{/* <li>
							<DiJavascript1 />
						</li> */}
								<li>JavaScript</li>
								{/* <li>
							<DiReact />
						</li> */}
								<li>React.js</li>
								{/* <li>
							<DiBootstrap />
						</li> */}
								<li>Bootstrap</li>
								{/* <li>
							<DiSass />
						</li> */}
								<li>SCSS</li>
								{/* <li>
							<DiGit />
						</li> */}
								<li>Git</li>
								{/* <li>
							<FiFigma />
						</li> */}
								<li>Figma</li>
							</ul>
						</article>
					</Fade>
				</article>
			</div>
		</>
	);
}
