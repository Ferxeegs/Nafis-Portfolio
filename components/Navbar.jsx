"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navVariant = {
	open: {
		clipPath: "circle(2000px at calc(100% - 40px) 40px)",
		transition: {
			type: "tween",
			duration: 0.55,
			ease: [0.22, 1, 0.36, 1],
		},
	},
	closed: {
		clipPath: "circle(0px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.25,
			type: "tween",
			duration: 0.35,
			ease: [0.4, 0, 1, 1],
		},
	},
};

const itemVariants = {
	open: (custom) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom,
			type: "tween",
			duration: 0.35,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
	closed: {
		opacity: 0,
		y: 28,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
};

const menuLinks = [
	{ href: "/#home", label: "Home", index: "01" },
	{ href: "/about", label: "About", index: "02" },
	{ href: "/projects", label: "Projects", index: "03" },
	{ href: "/#contact", label: "Contact", index: "04" },
];

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const handleItemClick = () => {
		setIsNavOpen(false);
	};

	return (
		<motion.div
			className="fixed z-[45] w-full h-screen flex items-center justify-center overflow-hidden"
			variants={navVariant}
			animate={isNavOpen ? "open" : "closed"}
			initial={false}
			aria-hidden={!isNavOpen}>
			<div className="relative flex min-h-[100vh] min-w-[100vw] flex-col items-center justify-center overflow-hidden bg-teal-dark">
				{/* Atmosphere */}
				<div
					aria-hidden
					className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal/40 blur-3xl"
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-amber/20 blur-3xl"
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(11,90,84,0.55)_100%)]"
				/>

				<div className="relative z-10 flex w-full max-w-3xl flex-col items-start px-10 md:px-16">
					<motion.p
						variants={itemVariants}
						animate={isNavOpen ? "open" : "closed"}
						custom={0.05}
						className="mb-6 text-xs font-medium uppercase tracking-[0.45rem] text-amber">
						Navigation
					</motion.p>

					<nav className="flex w-full flex-col gap-2 md:gap-3">
						{menuLinks.map((item, i) => (
							<Link key={item.href} href={item.href} onClick={handleItemClick}>
								<motion.div
									variants={itemVariants}
									animate={isNavOpen ? "open" : "closed"}
									custom={0.1 + i * 0.08}
									className="group flex items-baseline gap-5 border-b border-white/10 py-3 transition-colors duration-300 hover:border-amber/50 md:py-4">
									<span className="text-sm font-medium text-amber/80 transition-colors group-hover:text-amber">
										{item.index}
									</span>
									<span className="text-4xl font-bold tracking-tight text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-amber md:text-6xl lg:text-7xl">
										{item.label}
									</span>
								</motion.div>
							</Link>
						))}
					</nav>

					<motion.div
						variants={itemVariants}
						animate={isNavOpen ? "open" : "closed"}
						custom={0.48}
						className="mt-12 flex w-full flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
						<p className="tracking-wide">
							Nafis <span className="text-amber">Mufadhal</span>
						</p>
						<div className="flex gap-6">
							<a
								href="https://github.com/nafissmf"
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-amber">
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/nafissmf"
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-amber">
								LinkedIn
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
					isNavOpen
						? "backdrop-filter backdrop-blur-md bg-teal-dark/80"
						: "backdrop-filter backdrop-blur-md bg-surface/40"
				} inset-0 flex flex-row justify-between items-center h-16 z-50 `}>
				<div>
					<h1
						className={`text-2xl ml-2 md:ml-0 font-semibold tracking-tight transition-colors ease duration-500 ${
							isNavOpen ? "text-white" : "text-teal-dark"
						}`}>
						Nafis{" "}
						<span className={isNavOpen ? "text-amber" : "text-amber-deep"}>
							Mufadhal
						</span>
					</h1>
				</div>
				<div className="flex flex-row items-center">
					<button
						aria-label={isNavOpen ? "Close menu" : "Open menu"}
						aria-expanded={isNavOpen}
						className="burger button flex flex-col justify-center items-center space-y-1.5 "
						onClick={toggleNav}>
						<div
							className={`w-10 h-1 bg-teal-dark rounded-full transition-all ease duration-300 ${
								isNavOpen ? "rotate-45 bg-white translate-y-[2px]" : ""
							}`}></div>
						<div
							className={`w-10 h-1 bg-teal-dark rounded-full transition-all ease duration-300 ${
								isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
							}`}></div>
					</button>
				</div>
			</nav>
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};
export default Navbar;
