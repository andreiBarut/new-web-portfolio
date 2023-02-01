import "./Projects.css";
import { AiFillCaretDown, AiOutlineLink } from "react-icons/ai";
// import {
// 	Accordion,
// 	AccordionItem,
// 	AccordionItemHeading,
// 	AccordionItemButton,
// 	AccordionItemPanel,
// } from "react-accessible-accordion";
import { AiFillLinkedin } from "react-icons/ai";
import db from "../../db.json";
// import "react-accessible-accordion/dist/fancy-example.css";
import grandma from "../../assets/images/grandmasRecipes.png";
export default function Projects() {
	return (
		<div className="projects-container" id="projects">
			<h2>My Projects</h2>
			{/* {db.projects[0].title} */}
			{db.projects.map((project) => (
				<article className="projects-featured-article">
					<div className="projects-featured-article-img"></div>
					<div className="projects-featured-description-container">
						<p className="projects-featured-project-paragraph">
							Featured Project #{project.id}
						</p>
						<h1>{project.title}</h1>
						<p className="projects-featured-project-description-paragraph">
							{project.description}
						</p>
						<ul>
							{project.technologies.map((technology) => (
								<li>{technology}</li>
							))}
						</ul>
						<ul>
							<li>
								<AiFillLinkedin className="projects-link" />
							</li>
							<li>
								<AiOutlineLink className="projects-link" />
							</li>
						</ul>
					</div>
				</article>
			))}
		</div>
	);
}
