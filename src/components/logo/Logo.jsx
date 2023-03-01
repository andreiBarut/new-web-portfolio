import { useState } from "react";
import "./Logo.css";

export default function Logo() {
	const [className, setClassName] = useState("logo-underscore-span-active");
	setTimeout(() => {
		if (className === "logo-underscore-span-active") {
			setClassName("logo-underscore-span-hidden");
		} else {
			setClassName("logo-underscore-span-active");
		}
	}, 1000);
	return (
		<div className="Navbar-Logo">
			<a href="#home" style={{ color: "#ff9838", textDecoration: "none" }}>
				aeb:~$<span className={className}>_</span>
			</a>
		</div>
	);
}
