import { FadeIn } from "react-slide-fade-in";

export default function NavLinks(props) {
	return (
		<>
			<FadeIn
				from="bottom"
				positionOffset={50}
				triggerOffset={5000}
				delayInMilliseconds={1000}
			>
				<ul
					className="NavLinks-Ul"
					style={{
						transform: props.hamburgerBool,
						display: props.displayBool,
					}}
				>
					<li>
						<a href="/">1. home</a>
					</li>

					<li>
						<a href="/">2. about</a>
					</li>

					<li>
						<a href="/">3. projects</a>
					</li>

					<li>
						<a href="/">4. contact</a>
					</li>

					<li>
						<a href="/">3. projects</a>
					</li>

					<li>
						<a href="/">resume</a>
					</li>
				</ul>
			</FadeIn>
		</>
	);
}
