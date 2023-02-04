import "./Contact.css";
import { FaMailBulk } from "react-icons/fa";
export default function Contact() {
	return (
		<>
			<h2>Contact</h2>
			<div className="contact-container" id="contact">
				<p>
					<FaMailBulk className="contact-icon" />
				</p>
				<p>
					Contact me at{" "}
					<span className="highlighted underlined">andreibarut@gmail.com</span>
				</p>
			</div>
		</>
	);
}
