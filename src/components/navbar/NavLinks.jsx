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
					<a href="#home" onClick={props.toggleHamburger}>
						1. home
					</a>
				</li>

				<li>
					<a href="#about" onClick={props.toggleHamburger}>
						2. about
					</a>
				</li>

				<li>
					<a href="#projects" onClick={props.toggleHamburger}>
						3. projects
					</a>
				</li>

				<li>
					<a href="/" onClick={props.toggleHamburger}>
						4. contact
					</a>
				</li>

				<li>
					<a href="/" onClick={props.toggleHamburger}>
						resume
					</a>
				</li>
			</ul>
		</>
	);
}
