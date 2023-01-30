import "./Projects.css";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
import grandma from "../../assets/images/grandmasRecipes.png";
export default function Projects() {
	return (
		<div className="projects-container">
			<h2>My Projects</h2>
			<ul>
				<Accordion allowZeroExpanded="true" className="projects-accordion">
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton className="projects-accordion-button">
								<li>Grandma's Recipes</li>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel className="accordion-panel">
							<img src={grandma} className="accordion-image" />
							<p>
								Cooking assistant application made with React. Used JSON for database,
								dynamic routing for categories and details pages. Application designed
								to help people discover and cook Romanian traditional recipes, recipes
								taken straight out of my grandma's cooking book. She was a cook during
								the communist period in Romania and has written all her recipes in this
								book. This is my omage to her.
							</p>
							<button className="projects-panel-button">
								<a href="#">DEMO</a>
							</button>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton className="projects-accordion-button">
								<li>Currency Exchange App</li>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>asokdjsaojfhas asfjk hflasfn lasfjlkasfj lkasjflf saj l</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton className="projects-accordion-button">
								<li>Hangman with Cars</li>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>asoklfhasjhf jflkashflk l aslf hasklf flhasflkh f sahl</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton className="projects-accordion-button">
								<li>Custom Digital Watch</li>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>asoklfhasjhf jflkashflk l aslf hasklf flhasflkh f sahl</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton className="projects-accordion-button">
								<li>Custom Voting Polls</li>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>asoklfhasjhf jflkashflk l aslf hasklf flhasflkh f sahl</p>
						</AccordionItemPanel>
					</AccordionItem>
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton className="projects-accordion-button">
								<li>This React Portfolio</li>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel className="projects-accordion-panel">
							<p>asoklfhasjhf jflkashflk l aslf hasklf flhasflkh f sahl</p>
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>
			</ul>
		</div>
	);
}
