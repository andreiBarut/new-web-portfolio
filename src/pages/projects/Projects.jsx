import "./Projects.css";
import { AiFillCaretDown } from "react-icons/ai";
// import {
// 	Accordion,
// 	AccordionItem,
// 	AccordionItemHeading,
// 	AccordionItemButton,
// 	AccordionItemPanel,
// } from "react-accessible-accordion";

// import "react-accessible-accordion/dist/fancy-example.css";
import grandma from "../../assets/images/grandmasRecipes.png";
export default function Projects() {
	return (
		<div className="projects-container" id="projects">
			<h2>My Projects</h2>
			<article className="projects-featured-article">
				<div className="projects-featured-article-img"></div>
				<div className="projects-featured-description-container">
					<p className="projects-featured-project-paragraph">Featured Project</p>
					<h1>Grandma's Recipes</h1>
					<p className="projects-featured-project-description-paragraph">
						Cooking assistant made with react, json as database, react router dom for
						dynamic routing. This project is an homage to my grandmother, who was a
						cook during the communist period. The recipes are taken from her cookbook.
					</p>
					<ul>
						<li>JS</li>
						<li>React</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>json</li>
					</ul>
				</div>
			</article>
		</div>
	);
}
