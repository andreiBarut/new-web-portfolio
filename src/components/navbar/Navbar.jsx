import Logo from "../logo/Logo";
import "./Navbar.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
	return (
		<div className="Navbar-container">
			<div className="Navbar-logo-container">
				<Logo />
			</div>
			<DesktopNavbar />
			<MobileNavbar />
		</div>
	);
}
