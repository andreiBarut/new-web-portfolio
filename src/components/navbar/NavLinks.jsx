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
						1. home
					</a>
				</li>

				<li>
					<a href="#about" onClick={props.toggleHamburger} className="link">
						2. about
					</a>
				</li>

				<li>
					<a href="#projects" onClick={props.toggleHamburger} className="link">
						3. projects
					</a>
				</li>

				<li>
					<a href="/" onClick={props.toggleHamburger} className="link">
						4. contact
					</a>
				</li>

				<li>
					<a href="/" onClick={props.toggleHamburger} className="link">
						resume
					</a>
				</li>
			</ul>
		</>
	);
}
