import styles from "@/components/header/header.module.css";
import Link from "next/link";
import { HiHome, HiMiniUser } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<ul className={styles.navItems}>
						<li>
							<Link href="/">
								<HiHome /> Home
							</Link>
						</li>
						<li>
							<Link href="/about">
								<HiMiniUser /> About
							</Link>
						</li>
						<li>
							<Link href="/work">
								<MdOutlineWorkOutline /> Works
							</Link>
						</li>
						<li>
							<Link href="/contact">
								{" "}
								<GrContact />
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
