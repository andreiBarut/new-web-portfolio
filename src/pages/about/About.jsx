import "./About.css";
import portrait from "../../assets/images/portrait.jpeg";
import { Fade } from "react-awesome-reveal";

export default function About() {
	return (
		<>
			<div className="about-container" id="about">
				<Fade direction="bottom" duration={2000}>
					<article>
						<h1 className="overlined">About me</h1>
						<img src={portrait} alt="myself" className="about-portrait" />
					</article>
				</Fade>

				<article className="about-articles">
					<Fade direction="bottom" duration={2000}>
						<p>
							Over two years experience working with HTML, CSS (flexbox, grid layouts,
							bootstrap, SCSS), one year of working with JavaScript, over 6 months
							working with React. I focused on developing my programming skills with
							JavaScript and React the past year, when I attended an 8 month intensive{" "}
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
							<ul class="about-skills-list">
								<li>HTML</li>

								<li>CSS</li>

								<li>JavaScript ES6</li>

								<li>React.js</li>

								<li>Bootstrap</li>

								<li>Tailwind CSS</li>

								<li>SCSS</li>

								<li>Git</li>

								<li>Figma</li>

								<li>SQL</li>
							</ul>
						</article>
					</Fade>
				</article>
			</div>
		</>
	);
}
