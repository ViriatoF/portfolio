"use client";
import styles from "../header/header.module.css";
import { HiHome, HiMiniUser } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const links = [
	{ 
		href: '#top', 
		icon: <HiHome />,
		label: 'Accueil' 
	},
  {
		 href: '#about',
		 icon: <HiMiniUser />, 
		label: 'À propos' 

	},
  {
		 href: '#projects', 
		 icon: <MdOutlineWorkOutline />,
		label: 'Projets' 

	},
  {
		 href: '#skills', 
		label: 'Compétences' 

	},

]

export default function Header() {

	const [open, setOpen] = useState(false);

	useEffect(()=>{
	const close = ()=> setOpen(false);
    window.addEventListener('hashchange', close);
    return ()=> window.removeEventListener('hashchange', close);
  },[]);

	return (
		<>
			<header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Aller à l’accueil"> 
					<svg xmlns="http://www.w3.org/2000/svg" aria-label="logo de viriato ferreira" width="50" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="50" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="c0eb953138"><path d="M 187.5 0 C 83.945312 0 0 83.945312 0 187.5 C 0 291.054688 83.945312 375 187.5 375 C 291.054688 375 375 291.054688 375 187.5 C 375 83.945312 291.054688 0 187.5 0 Z M 187.5 0 " clipRule="nonzero"/></clipPath><clipPath id="34c3d8fe15"><path d="M 0 0 L 375 0 L 375 375 L 0 375 Z M 0 0 " clipRule="nonzero"/></clipPath><clipPath id="f168366794"><path d="M 187.5 0 C 83.945312 0 0 83.945312 0 187.5 C 0 291.054688 83.945312 375 187.5 375 C 291.054688 375 375 291.054688 375 187.5 C 375 83.945312 291.054688 0 187.5 0 Z M 187.5 0 " clipRule="nonzero"/></clipPath><clipPath id="f16c503bc8"><rect x="0" width="375" y="0" height="375"/></clipPath><clipPath id="0164eac890"><rect x="0" width="114" y="0" height="239"/></clipPath><clipPath id="012e0d6e87"><path d="M 177.21875 133.207031 L 291.21875 133.207031 L 291.21875 176.484375 L 177.21875 176.484375 Z M 177.21875 133.207031 " clipRule="nonzero"/></clipPath><clipPath id="defd1a6b73"><path d="M 0.21875 0.207031 L 114.21875 0.207031 L 114.21875 43.484375 L 0.21875 43.484375 Z M 0.21875 0.207031 " clipRule="nonzero"/></clipPath><clipPath id="b41c14750a"><rect x="0" width="115" y="0" height="44"/></clipPath><clipPath id="2eed293515"><rect x="0" width="135" y="0" height="239"/></clipPath><clipPath id="2612452b72"><path d="M 219 86 L 333 86 L 333 279 L 219 279 Z M 219 86 " clipRule="nonzero"/></clipPath><clipPath id="ab71c2a176"><path d="M 332.300781 101.132812 L 253.585938 278.855469 L 219.742188 263.863281 L 298.457031 86.144531 Z M 332.300781 101.132812 " clipRule="nonzero"/></clipPath><clipPath id="8d2c061ec1"><path d="M 0.601562 0 L 113.398438 0 L 113.398438 192.878906 L 0.601562 192.878906 Z M 0.601562 0 " clipRule="nonzero"/></clipPath><clipPath id="d98c2d60f7"><path d="M 113.300781 15.132812 L 34.585938 192.855469 L 0.742188 177.863281 L 79.457031 0.144531 Z M 113.300781 15.132812 " clipRule="nonzero"/></clipPath><clipPath id="340b2cb58c"><rect x="0" width="114" y="0" height="193"/></clipPath></defs><g clipPath="url(#c0eb953138)"><g transform="matrix(1, 0, 0, 1, 0, 0)"><g clipPath="url(#f16c503bc8)"><g clipPath="url(#34c3d8fe15)"><g clipPath="url(#f168366794)"><rect x="-82.5" width="540" fill="currentColor" height="539.999987" y="-82.499998" fillOpacity="1"/></g></g></g></g></g><g transform="matrix(1, 0, 0, 1, 179, 68)"><g clipPath="url(#0164eac890)"><g fill="#ffffff" fillOpacity="1"><g transform="translate(0.412063, 188.399955)"><g><path d="M 100.234375 -59.28125 L 42.84375 -59.28125 L 42.84375 0 L 12.953125 0 L 12.953125 -145.078125 L 107.40625 -145.078125 L 107.40625 -120.859375 L 42.84375 -120.859375 L 42.84375 -83.40625 L 100.234375 -83.40625 Z M 100.234375 -59.28125 "/></g></g></g></g></g><g clipPath="url(#012e0d6e87)"><g transform="matrix(1, 0, 0, 1, 177, 133)"><g clipPath="url(#b41c14750a)"><g clipPath="url(#defd1a6b73)"><path fill="currentColor" d="M 0.21875 0.207031 L 114.15625 0.207031 L 114.15625 43.484375 L 0.21875 43.484375 Z M 0.21875 0.207031 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g><g transform="matrix(1, 0, 0, 1, 82, 68)"><g clipPath="url(#2eed293515)"><g fill="#ffffff" fillOpacity="1"><g transform="translate(0.619713, 188.399955)"><g><path d="M 66.5625 -35.96875 L 99.4375 -145.078125 L 132.71875 -145.078125 L 82.203125 0 L 51.015625 0 L 0.703125 -145.078125 L 33.875 -145.078125 Z M 66.5625 -35.96875 "/></g></g></g></g></g><g clipPath="url(#2612452b72)"><g clipPath="url(#ab71c2a176)"><g transform="matrix(1, 0, 0, 1, 219, 86)"><g clipPath="url(#340b2cb58c)"><g clipPath="url(#8d2c061ec1)"><g clipPath="url(#d98c2d60f7)"><path fill="currentColor" d="M 113.300781 15.132812 L 34.601562 192.820312 L 0.757812 177.832031 L 79.457031 0.144531 Z M 113.300781 15.132812 " fillOpacity="1" fillRule="nonzero"/></g></g></g></g></g></g></svg>
				</a>
      <nav className={styles.nav} aria-label="Navigation principale">
        <button className={styles.burger} aria-expanded={open} aria-controls="menu" onClick={()=>setOpen(!open)}>
          {open?<IoClose />:<RxHamburgerMenu />} 
        </button>
        <ul id="menu" className={`${styles.menu} ${open? styles.menuOpen: ''}`}>
          {links.map(l=> (
            <li key={l.href}>
              <Link href={l.href} aria-current={l.href.slice(1)?'page':undefined} onClick={()=>setTimeout(()=>{setOpen(!open)},800)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
		</>
	);
}
