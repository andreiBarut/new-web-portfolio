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
	const [hamburgerOpen, setHamburgerOpen] = useState("0");
	const [skew, setSkew] = useState("skew(0deg)");
	// // const [translateEcs, setTranslateEcs] = useState("0");
	function toggleHamburger() {
		if (hamburgerOpen === "100%") {
			setHamburgerOpen("0");
			setSkew("skew(180deg)");
		} else {
			setHamburgerOpen("100%");
			setSkew("skew(0deg)");
		}
	}
	const iconOpen = (
		<MdMenuOpen
			className="navbar-hamburger-open"
			onClick={toggleHamburger}
			style={{ transform: skew }}
		/>
	);
	const iconClosed = (
		<VscCloseAll
			className="navbar-hamburger-closed"
			onClick={toggleHamburger}
			style={{ transform: skew }}
		/>
	);

	return (
		<>
			{iconOpen}
			<div
				className="Navbar-overlay"
				style={{ width: hamburgerOpen, opacity: hamburgerOpen }}
			>
				<div className="Navbar-overlay-content">
					<NavLinks toggleHamburger={toggleHamburger} />
				</div>
				{iconClosed}
			</div>
		</>
	);
}
