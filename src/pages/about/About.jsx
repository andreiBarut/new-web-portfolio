import "./About.css";
import portrait from "../../assets/images/portrait-2.png";
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
							bootstrap, SCSS, Tailwind CSS), one year working with front-end
							technologies. I focused on developing my programming skills with
							JavaScript and React the past year, when I attended an 8 month intensive{" "}
							<span className="highlighted">JavaScript coding bootcamp at SDA</span>{" "}
							which allowed me to delve deeper into front-end technologies, such as{" "}
							<span className="highlighted"> JavaScript and React</span>, among other
							technologies, such as
							<span className="highlighted"> HTTP methods</span>, request methods in
							order to
							<span className="highlighted"> fetch data </span>
							and communicate with a server or
							<span className="highlighted"> Web API. </span>Attending the course also
							helped me develop team work and debugging skills, by doing live coding
							sessions with my colleagues and trainers as well.
						</p>
					</Fade>
					<Fade>
						<p>
							Fast forwarding to post coding bootcamp, I am now focusing on learning{" "}
							<span className="highlighted">new technologies & skills</span>, by
							applying them to building actual applications. I have developed a CRUD
							custom voting application for AMVVD which is used by the local county
							organization for making decisions regarding important situations.
						</p>
						<p>
							Currently developing <span className="highlighted">EMERDEN</span>, a PC
							gaming deals marketplace platform that allows users to discover the best
							bargains from approximately 30 diverse stores. Within this platform,
							users can effortlessly navigate the marketplace, curate their personal
							wishlist of games, monitor price fluctuations over time, and access data
							visualization tools for an in-depth view of price evolution.
							Additionally, they can receive personalized email notifications for their
							tracked games. This full-stack application is crafted using the{" "}
							<span className="highlighted">MERN </span>
							stack, which includes <span className="highlighted">Mongo DB</span> for
							the database, RESTful <span className="highlighted">API</span>,{" "}
							<span className="highlighted">Express and Node.js</span> for the backend,
							<span className="highlighted">React</span> for the frontend,{" "}
							<span className="highlighted">MUI</span> for component-based layouts.
							<span className="highlighted"> React Router DOM</span> was employed for
							seamless dynamic routing.
						</p>
					</Fade>
					<Fade>
						<article>
							<ul class="about-skills-list">
								<li>HTML</li>

								<li>CSS</li>

								<li>JavaScript ES6</li>

								<li>React.js</li>

								<li>Node.js</li>

								<li>Express</li>

								<li>Mongo DB</li>

								<li>Mongoose</li>

								<li>Firebase</li>

								<li>MUI</li>

								<li>Linux</li>

								<li>Bootstrap</li>

								<li>Tailwind CSS</li>

								<li>SCSS</li>

								<li>Git</li>

								<li>Figma</li>

								<li>SQL</li>

								<li>Version Control</li>
							</ul>
						</article>
					</Fade>
				</article>
			</div>
		</>
	);
}
