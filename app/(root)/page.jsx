// Copyright (C) 2025 Nafis Mufadhal
// This file is part of Alvalens-porto-2-nextJs.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FullPageWrapper, Section, useFullPage } from "@alvalens/react-fullpage-snap";

// components
import Button from "@/components/Button";
import Me from "@/public/image/nafis2.jpeg";
import MeAbout from "@/public/image/nafis6.jpeg";
import Setup from "@/public/image/nafis4.jpeg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ScrollIndicator() {
	const { activeIndex } = useFullPage();
	const [dismissed, setDismissed] = useState(false);

	useEffect(() => {
		if (activeIndex !== 0) setDismissed(true);
	}, [activeIndex]);

	return (
		<AnimatePresence>
			{activeIndex === 0 && !dismissed && (
				<motion.div
					className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
					exit={{ opacity: 0, transition: { duration: 0.4 } }}>
					<span className="text-[10px] uppercase tracking-[4px] text-teal font-medium">
						Scroll
					</span>
					<motion.div
						className="w-[1.5px] h-14 bg-amber origin-top"
						animate={{
							scaleY: [0, 1, 1],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.5, 1],
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

const MyPage = () => {
	return (
		<FullPageWrapper>
			<Section>
				<div className="mx-auto w-[82%] max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
					<motion.div
						className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							type: "spring",
						}}>
						<div className="block md:hidden col-span-1 mx-auto my-10">
							<div className="relative w-72 h-[22rem] mx-auto">
								<div
									aria-hidden
									className="absolute -inset-3 translate-x-2 translate-y-2 rounded-[1.75rem] bg-gradient-to-br from-teal/35 to-amber/30"
								/>
								<div className="relative h-full w-full overflow-hidden rounded-[1.75rem] photo-frame">
									<Image
										src={Me}
										width={500}
										height={650}
										className="h-full w-full object-cover object-[center_15%]"
										alt="Nafis Mufadhal"
										placeholder="blur"
									/>
								</div>
							</div>
						</div>
						<motion.h3
							className="uppercase text-xl mb-3 font-normal tracking-[.5rem] text-teal"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							Nafis Mufadhal
						</motion.h3>
						<motion.h1
							className="text-ink text-4xl md:text-6xl lg:text-6xl 2xl:text-8xl font-bold my-2 md:my-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							Full Stack Developer
						</motion.h1>
						<motion.p
							className="title text-md 2xl:text-xl mt-4 tracking-wider text-ink-muted leading-[1.7rem]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.4,
								type: "spring",
							}}>
							Hi! I&rsquo;m Nafis Mufadhal — a Master&apos;s
							student in Information Systems at Universitas
							Diponegoro, focused on IT infrastructure, full stack
							development, and data analysis. I build and maintain
							systems that keep campus operations running, and I
							keep growing through cloud, research, and leadership
							work.
						</motion.p>
						<motion.div
							className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.5,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link
									href={"/docs/cv.pdf"}
									target="_blank"
									rel="noopener noreferrer"
									download>
									Download CV
								</Link>
							</Button>
							<Button variation="secondary">
								<a href="#contact">Contact Me</a>
							</Button>
						</motion.div>
					</motion.div>
					<motion.div
						className="hidden md:flex col-span-1 mx-auto justify-center items-center"
						initial={{ x: 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.7,
							type: "spring",
						}}>
						<div className="relative w-[min(32vw,420px)] aspect-[3/4]">
							<div
								aria-hidden
								className="absolute -inset-4 translate-x-3 translate-y-3 rounded-[2rem] bg-gradient-to-br from-teal/40 via-teal/15 to-amber/35"
							/>
							<div
								aria-hidden
								className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-amber/25 blur-2xl"
							/>
							<div className="relative h-full w-full overflow-hidden rounded-[2rem] photo-frame">
								<Image
									src={Me}
									width={520}
									height={700}
									placeholder="blur"
									alt="Nafis Mufadhal"
									className="h-full w-full object-cover object-[center_12%]"
									priority
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</Section>
			<Section>
				<div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute md:top-1/2  md:right-[10%] md:-translate-y-1/2">
						<motion.div
							className="relative bg-teal-soft rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] photo-frame overflow-hidden"
							initial={{
								x: 300,
								opacity: 0,
								z: -100,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
								z: 0,
							}}
							transition={{
								delay: 0.5,
								type: "spring",
								stiffness: 100,
								damping: 20,
							}}>
							<Image
								src={MeAbout}
								fill
								sizes="(max-width: 768px) 80vw, 30vw"
								className="object-cover"
								alt="Nafis Mufadhal"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
						<motion.h1
							className="bg-surface/70 lg:bg-transparent px-3 md-px-0 text-ink text-5xl md:text-8xl font-bold"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							About Me
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-xl mt-4 tracking-wider text-ink-muted leading-[1.7rem] mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							A brief introduction my journey as a software
							engineer.
						</motion.p>
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link href="/about">Learn More</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</Section>
			<Section>
				<div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute md:top-1/2  md:right-[10%] md:-translate-y-1/2">
						<motion.div
							className="relative bg-teal-soft rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] photo-frame overflow-hidden"
							initial={{
								x: 300,
								opacity: 0,
								z: -100,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
								z: 0,
							}}
							transition={{
								delay: 0.5,
								type: "spring",
								stiffness: 100,
								damping: 20,
							}}>
							<Image
								src={ProjectAll}
								fill
								sizes="(max-width: 768px) 80vw, 30vw"
								className="object-cover"
								alt="Nafis Mufadhal Setup"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
						<motion.h1
							className="bg-surface/70 lg:bg-transparent px-3 md-px-0 text-ink text-5xl md:text-8xl font-bold"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							My Projects
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-xl mt-4 tracking-wider text-ink-muted leading-[1.7rem] mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							Selected works that I&apos;ve built over the years.
							<span className="bg-transparent md:bg-teal-soft/60 xl:bg-transparent text-teal-dark">
								{" "}
								and currently working on.
							</span>
						</motion.p>
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link href="/projects">Learn More</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</Section>
			<Section>
				<div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute md:top-1/2  md:right-[10%] md:-translate-y-1/2">
						<motion.div
							className="relative bg-teal-soft rounded-sm h-[400px] md:h-[60vh] w-[80vw] md:w-[30vw] photo-frame overflow-hidden"
							initial={{
								x: 300,
								opacity: 0,
								z: -100,
							}}
							whileInView={{
								x: 0,
								opacity: 1,
								z: 0,
							}}
							transition={{
								delay: 0.5,
								type: "spring",
								stiffness: 100,
								damping: 20,
							}}>
							<Image
								src={Setup}
								fill
								sizes="(max-width: 768px) 80vw, 30vw"
								className="object-cover"
								alt="Nafis Mufadhal Setup"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
						<motion.h1
							className="bg-surface/70 lg:bg-transparent px-3 md-px-0 text-ink text-5xl md:text-8xl font-bold mb-3"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							Get In Touch
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-xl mt-4 tracking-wider text-ink-muted leading-[1.7rem] md:mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							Feel free to contact me if you have any{" "}
							<span className="bg-transparent md:bg-teal-soft/60 xl:bg-transparent text-teal-dark">
								questions or just want to say hi.
							</span>
						</motion.p>
						<motion.p
							className="title text-xl mt-4 tracking-wider text-teal leading-[1.7rem] mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<a
								href="https://www.linkedin.com/in/nafissmf"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-amber-deep transition-colors">
								linkedin.com/in/nafissmf
							</a>
						</motion.p>
						{/* icons */}
						<div className="flex justify-center items-center space-x-4">
							<motion.a
								href="https://github.com/nafissmf"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
								className="flex justify-center items-center bg-teal w-14 h-14 rounded-full text-white hover:bg-amber hover:text-ink transition-all ease-in-out duration-300"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									y: { delay: 0.2 },
									opacity: { delay: 0.3 },
								}}>
								<FontAwesomeIcon
									icon={faGithub}
									className="text-3xl"
								/>
							</motion.a>
							<motion.a
								href="https://www.linkedin.com/in/nafissmf"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="flex justify-center items-center bg-teal w-14 h-14 rounded-full text-white hover:bg-amber hover:text-ink transition-all ease-in-out duration-300"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									y: { delay: 0.4 },
									opacity: { delay: 0.5 },
								}}>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="text-3xl"
								/>
							</motion.a>
						</div>
					</div>
				</div>
			</Section>
			<ScrollIndicator />
		</FullPageWrapper>
	);
};

export default MyPage;
