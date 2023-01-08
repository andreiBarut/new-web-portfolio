import { useState } from "react";

export default function Logo() {
	const [dot, setDot] = useState("_");
	setTimeout(() => {
		if (dot.includes("_")) {
			setDot(" ");
			return;
		}
		setDot("_");
	}, 500);
	return (
		<div>
			aeb:~$<span className="logo-underscore-span">{dot}</span>
		</div>
	);
}
