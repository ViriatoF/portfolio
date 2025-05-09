import { FaRegCopyright } from "react-icons/fa6";
import styles from "@/components/footer.module.css";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<p>Created by Viriato Ferreira </p>{" "}
			<p>
				<FaRegCopyright /> All right reserved {year}
			</p>
		</footer>
	);
}
