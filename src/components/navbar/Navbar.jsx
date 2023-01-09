import Logo from "../logo/Logo";
import "./Navbar.css";
import NavigationMobile from "./NavigationMobile";
import NavigationNormal from "./NavigationNormal";
export default function Navbar() {
	return (
		<div className="Navbar">
			<div className="Navbar-logo-container">
				<Logo />
			</div>
			<NavigationNormal />
			<NavigationMobile />
		</div>
	);
}
