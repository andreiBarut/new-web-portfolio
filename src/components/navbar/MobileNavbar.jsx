import NavLinks from "./NavLinks";
import { MdMenuOpen, MdTranslate } from "react-icons/md";
import { VscCloseAll } from "react-icons/vsc";
import { useState } from "react";
import { useEffect } from "react";

// import { useState } from "react";

export default function MobileNavbar() {
	useEffect(() => {
		console.log("rerendered");
	});

	const [hamburgerOpen, setHamburgerOpen] = useState("translateY(-200%)");

	// const [translateEcs, setTranslateEcs] = useState("0");
	function toggleHamburger() {
		if (hamburgerOpen === "translateY(-200%)") {
			setHamburgerOpen("translateY(0)");
		} else {
			setHamburgerOpen("translateY(-200%)");
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
			{hamburgerOpen === "translateY(0)" ? iconClosed : iconOpen}
		</nav>
	);
}
