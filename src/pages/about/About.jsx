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

export default function About() {
	return (
		<>
			<div className="about-container" id="about">
				<article>
					<h1>About me</h1>
					<img src={portrait} alt="myself" className="about-portrait" />
				</article>
				<hr></hr>
				<article>
					<h1>Skills</h1>
					<ul class="about-skills-list">
						<li>
							<AiFillHtml5 />
						</li>
						<li>HTML</li>
						<li>
							<DiCss3 />
						</li>
						<li>CSS</li>
						<li>
							<DiJavascript1 />
						</li>
						<li>JavaScript</li>
						<li>
							<DiReact />
						</li>
						<li>React.js</li>
						<li>
							<DiBootstrap />
						</li>
						<li>Bootstrap</li>
						<li>
							<DiSass />
						</li>
						<li>SCSS</li>
						<li>
							<DiGit />
						</li>
						<li>Git</li>
						<li>
							<FiFigma />
						</li>
						<li>Figma</li>
					</ul>
				</article>
				<article>
					<p>
						I was in university when I attended a web design class, where I learned to
						build static web pages using HTML and CSS. But I was curious for more.
						That is when I decided to take the JavaScript coding bootcamp at SDA,
						which allowed me to learn many things over the course of 8 months,
						including JavaScript and React, among other technologies. Attending the
						course also helped me develop team work and debugging skills, by doing
						live coding sessions with my colleagues and trainers as well.
					</p>
					<p>
						Over the course of the last year, I have learned to use HTML, CSS and
						JavaScript profficiently, knowing how to use advanced CSS properties such
						as flexbox, grid, media queries and keyframe animations. I am familiar as
						well with preprocessors such as SCSS and CSS Frameworks like Bootstrap. I
						have learned to use advanced JS methods such as reduce, map, filter. I
						used these methods in building my applications such as the cooking
						assistant which has a search functionality. I have studied both object
						oriented programming, as well as functional programming. I am familiar
						with HTTP methods, fetching data using XHR, fetch and axios. I've used the
						request methods in order to fetch data from web APIs, data which I used in
						my own currency exchange application. Currently I am learning how to
						create databases with SQL and build my own apps where I would also work
						with the backend side of things. Subsequently, I want to use Firebase for
						building my next app, which will be a custom voting poll application,
						where users can create their own voting polls.
					</p>
				</article>
			</div>
		</>
	);
}
