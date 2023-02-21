import "./Projects.css";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import db from "../../db.json";
import { Fade } from "react-awesome-reveal";

export default function Projects() {
	return (
		<div className="projects-container" id="projects">
			<h2>My Projects</h2>
			<Fade direction="bottom" duration={2000}>
				{db.projects.map((project) => (
					<article
						className="projects-featured-article"
						style={{
							flexDirection: `${project.direction}`,
						}}
					>
						<img
							className="projects-featured-article-img"
							src={project.image}
							alt={project.title}
						></img>
						<div
							className="projects-featured-description-container"
							style={{
								transform: `translate(${project.translate}15%)`,
								textAlign: `${project.align}`,
							}}
						>
							<p className="projects-featured-project-paragraph">
								Featured Project # {project.id}
							</p>
							<h1>{project.title}</h1>
							<p className="projects-featured-project-description-paragraph">
								{project.description}
							</p>
							<ul className="technologies-list">
								{project.technologies.map((technology) => (
									<li>{technology}</li>
								))}
							</ul>
							<ul className="links-list">
								<li>
									<a
										href="https://github.com/andreiBarut?tab=repositories"
										target={"_blank"}
										className="project-anchor"
										rel="noreferrer"
									>
										<AiFillGithub className="projects-link" />
									</a>
								</li>
								<li>
									<a
										href={project.link}
										className="project-anchor"
										target={"_blank"}
										rel="noreferrer"
									>
										<AiOutlineLink className="projects-link" />
									</a>
								</li>
							</ul>
						</div>
					</article>
				))}
			</Fade>
		</div>
	);
}
