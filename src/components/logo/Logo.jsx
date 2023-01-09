import { useState } from "react";
import "./Logo.css";
export default function Logo() {
	// const [dot, setDot] = useState("_");
	// setTimeout(() => {
	// 	if (dot.includes("_")) {
	// 		setDot(" ");
	// 		return;
	// 	}
	// 	setDot("_");
	// }, 500);
	const [className, setClassName] = useState("logo-underscore-span-active");
	setTimeout(() => {
		if (className === "logo-underscore-span-active") {
			setClassName("logo-underscore-span-hidden");
		} else {
			setClassName("logo-underscore-span-active");
		}
	}, 1000);
	return (
		<div>
			aeb:~$<span className={className}>_</span>
		</div>
	);
}
