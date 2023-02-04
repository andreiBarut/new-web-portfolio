import "./Footer.css";
import Logo from "../logo/Logo";
import { FaConnectdevelop } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<div className="footer-container">
				<p>Designed and Developed by Andrei Barut</p>
				<FaConnectdevelop className="footer-icon" />
				<p>2023</p>
			</div>
		</>
	);
}
