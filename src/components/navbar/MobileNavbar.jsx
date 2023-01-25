import NavLinks from "./NavLinks";
import { MdMenuOpen } from "react-icons/md";
import { VscCloseAll } from "react-icons/vsc";
import { useState } from "react";
// import { useState } from "react";

export default function MobileNavbar() {
	const [hamburgerOpen, setHamburgerOpen] = useState("none");

	function toggleHamburger() {
		if (hamburgerOpen === "none") {
			setHamburgerOpen("flex");
		} else {
			setHamburgerOpen("none");
		}
	}

	const iconOpen = (
		<MdMenuOpen className="navbar-hamburger-open" onClick={toggleHamburger} />
	);

	const iconClosed = (
		<VscCloseAll className="navbar-hamburger-open" onClick={toggleHamburger} />
	);

	return (
		<nav className="Navbar-MobileNavbar">
			{hamburgerOpen && <NavLinks hamburgerBool={`${hamburgerOpen}`} />}
			{hamburgerOpen === "flex" ? iconClosed : iconOpen}
		</nav>
	);
}
