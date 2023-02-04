export default function NavLinks(props) {
	return (
		<>
			<ul
				className="NavLinks-Ul"
				// style={{
				// 	transform: props.hamburgerBool,
				// 	display: props.displayBool,
				// }}
			>
				<li>
					<a href="#home" onClick={props.toggleHamburger} className="link">
						home
					</a>
				</li>

				<li>
					<a href="#about" onClick={props.toggleHamburger} className="link">
						about
					</a>
				</li>

				<li>
					<a href="#projects" onClick={props.toggleHamburger} className="link">
						projects
					</a>
				</li>

				<li>
					<a href="#contact" onClick={props.toggleHamburger} className="link">
						contact
					</a>
				</li>

				<li>
					<a href="/" onClick={props.toggleHamburger} className="link resume-link">
						resume
					</a>
				</li>
			</ul>
		</>
	);
}
