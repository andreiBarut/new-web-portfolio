import Logo from "../logo/Logo";
import "./Navbar.css";
export default function Navbar() {
	return (
		<nav>
			<div className="navbar-logo-container">
				<Logo />
			</div>
			<div className="navbar-menu-container">
				<div>
					<span>1.</span>home
				</div>
				<div>
					<span>2.</span>about
				</div>
				<div>
					<span>3.</span>projects
				</div>
				<div>
					<span>4.</span>contact
				</div>
				<div className="navbar-resume-container">resume</div>
			</div>
		</nav>
	);
}
