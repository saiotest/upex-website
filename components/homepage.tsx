/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassCard } from '@/components/ui/glass-card';
import { Search, Book, Briefcase, Award, Slack, MessageCircle, Rocket, Castle, Satellite, Code, GitBranch, CheckSquare, Database, Send, FileCode, TrendingUp, RocketIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n.config';
import PressStartButton from './pressStartButton';
import WhatsAppButton from './whatsapp-button';
import Quotes from './quotes';
import { YoutubeShort } from './ui/videoshort';
import CommunitySocialMedia from './communitySection';
import AnimatedTestimonials from './testimonialsSection';

export function Homepage() {
	const hero = useTranslations('hero');
	const serv = useTranslations('services');
	const imp = useTranslations('impact');
	const join = useTranslations('join');
	const gotoSection = (sectionId: string) => {
		return document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[##0A3A7E] to-[#0F5ABE] text-white">
			<Header />
			<main className="relative flex-grow">
				{/**---- SECTION: HERO BANNER ----*/}
				<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] py-20 px-4">
					<div className="text-center mx-auto">
						{/* ---- HERO TITLES ---- */}
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-20 md:whitespace-nowrap">
							<div className="md:whitespace-nowrap">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04f5f9] via-[#575fff] to-[#8c45ff]">{hero('title.part1')}</span>
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b171ff] via-[#e658ff] to-[#ff04f7]">{hero('title.part2')}</span> <br />
							</div>
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4ff7a] via-[#19fb09] to-[#07fd9f]">{hero('title.part3')}</span>
						</h1>
						<h2 className="text-2xl md:text-2xl text-[#00FFFF] mb-8 md:whitespace-nowrap">{hero('subtitle')}</h2>
						<p className="text-lg md:text-xl">{hero('description_1')}</p>
						<p className="text-lg md:text-xl font-bold text-[#00FFFF]">{hero('description_2')}</p>
						{/* <br /> */}
						<p className="text-lg md:text-xl mb-8">{hero('description_3')}</p>

						{/* ---- Search Bar (COMMING SOON) ---- */}
						{/* <div className="max-w-2xl mx-auto mb-12 relative">
							<Input type="text" placeholder={hero('searchPlaceholder')} className="w-full px-4 py-3 pl-12 rounded-lg bg-white text-[#020B2D] text-lg" />
							<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#020B2D]" size={24} />
						</div> */}

						{/**---- ICON TOOL TIPS ----*/}
						<TooltipProvider>
							<div className="flex justify-center gap-4 mb-12">
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<Image src="/slack_icon.svg" alt="Slack" title="UPEX Community Slack" width={32} height={32} className="w-14 h-14 mb-0" />
											<span className="text-xs">Slack</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.slack')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<Image src="/jira_icon.svg" alt="Jira" title="UPEX Jira" width={32} height={32} className="w-14 h-14 mb-0" />
											<span className="text-xs">Jira</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.jira')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											{/* <Database className="w-8 h-8 mb-2 text-[#00FFFF]" /> */}
											<Image src="/sql_icon.svg" alt="sql" title="MySQL" width={32} height={32} className="w-14 h-14 mb-0" />
											<span className="text-xs">MySQL</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.mysql')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											{/* <Send className="w-8 h-8 mb-2 text-[#00FFFF]" /> */}
											<Image src="/postman_icon.svg" alt="postman" title="Postman" width={32} height={32} className="w-14 h-14 mb-0" />
											<span className="text-xs">Postman</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.postman')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											{/* <FileCode className="w-8 h-8 mb-2 text-[#00FFFF]" /> */}
											<Image src="/vscode_icon.svg" alt="vscode" title="Visual Studio Code" width={32} height={32} className="w-14 h-14 mb-0" />
											<span className="text-xs">VSCode</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.vscode')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											{/* <GitBranch className="w-8 h-8 mb-2 text-[#00FFFF]" /> */}
											<Image src="/github_icon.svg" alt="Github" title="GitHub" width={32} height={32} className="w-14 h-14 mb-0" />
											<span className="text-xs">GitHub</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.github')}</p>
									</TooltipContent>
								</Tooltip>
							</div>
						</TooltipProvider>

						{/**---- CALL TO ACTIONS ----*/}
						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							{/* <Link href="https://forms.gle/ke4kadCJWRrDkDTXA" target="_blank" rel="noopener noreferrer" passHref>
								<Button className="bg-[#00FFFF] hover:bg-[#00D0D0] text-[#020B2D]" size="lg">
									{hero('tryWorkspaceFree')}
								</Button>
							</Link> */}
							<Link href="/start" target="_blank" rel="noopener noreferrer" passHref>
								<PressStartButton />
							</Link>
						</div>

						{/**---- METRICS ----*/}
						<div className="mb-20 mt-12">
							{/* <h3 className="text-2xl font-bold mb-6 text-white text-center">{imp("title")}</h3> */}
							<div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
								<div className="flex items-center justify-center">
									<CheckSquare className="w-8 h-8 mr-2 text-[#00FFFF]" />
									<div>
										<div className="text-3xl font-bold text-white">{imp('items.1.metric')}</div>
										<div className="text-sm text-white">{imp('items.1.unit')}</div>
									</div>
								</div>
								<div className="flex items-center justify-center">
									<Award className="w-8 h-8 mr-2 text-[#00FFFF]" />
									<div>
										<div className="text-3xl font-bold text-white">{imp('items.2.metric')}</div>
										<div className="text-sm text-white">{imp('items.2.unit')}</div>
									</div>
								</div>
								<div className="flex items-center justify-center">
									<Briefcase className="w-8 h-8 mr-2 text-[#00FFFF]" />
									<div>
										<div className="text-3xl font-bold text-white">{imp('items.3.metric')}</div>
										<div className="text-sm text-white">{imp('items.3.unit')}</div>
									</div>
								</div>
								<div className="flex items-center justify-center">
									<TrendingUp className="w-8 h-8 mr-2 text-[#00FFFF]" />
									<div>
										<div className="text-3xl font-bold text-white">{imp('items.4.metric')}</div>
										<div className="text-sm text-white">{imp('items.4.unit')}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/**---- SECTION: MAIN CONTENT ----*/}
				<section className="bg-gradient-to-b from-[#0A3A7E] via-[#1E0B4A] to-[#0F5ABE] py-20 px-4">
					{/* ---- ELY QUOTE SECTION (INTRO) ---- */}
					<div className="container mx-auto flex items-center justify-center">
						<div className="container max-w-6xl flex items-center justify-center mb-20">
							<div className="flex flex-col md:flex-row items-center">
								<div className="md:w-2/3 p-8">
									<Quotes />
								</div>
								<div className="md:w-1/3 p-8">
									<YoutubeShort videoSource="j_pRlktvAA0" title="El Propósito de UPEX" />
								</div>
							</div>
						</div>
					</div>
					{/* ---- CARDS (SERVICES) ---- */}
					<div className="container mx-auto mb-40">
						<h2 className="text-4xl md:text-6xl mb-8 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#04f5f9] via-[#cea4ff] to-[#da45ff]">{serv('title')}</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<GlassCard reactIcon={RocketIcon} title={serv('cards.sandbox.title')} description={serv('cards.sandbox.description')} buttonText={serv('cards.sandbox.link')} linkTo="https://forms.gle/ke4kadCJWRrDkDTXA" glowColor="from-cyan-300 to-blue-600" />
							<GlassCard reactIcon={Book} title={serv('cards.blackhole.title')} description={serv('cards.blackhole.description')} buttonText={serv('cards.blackhole.link')} linkTo="/cursos" glowColor="from-cyan-300 to-blue-600" />
							<GlassCard reactIcon={Castle} title={serv('cards.galaxy.title')} description={serv('cards.galaxy.description')} buttonText={serv('cards.galaxy.link')} linkTo="/experiencia" glowColor="from-cyan-300 to-blue-600" />
							<GlassCard reactIcon={Satellite} title={serv('cards.satellite.title')} description={serv('cards.satellite.description')} buttonText={serv('cards.satellite.link')} linkTo="#" glowColor="from-cyan-300 to-blue-600" />
						</div>
					</div>
					{/** SET OF SECTION: FEATURES */}
					<section className="mb-20 h-full rounded-2xl bg-gradient-to-br from-blue-900/80 to-purple-900/80 p-6 backdrop-blur-xl backdrop-filter flex flex-col">
						<div className="flex flex-col md:flex-row items-center justify-center">
							<div className="md:w-2/4 p-8 max-w-2xl w-full">
								<h2 className="relative overflow-hidden text-4xl font-bold mb-4 flex items-center justify-center text-[#00FFFF]">Descubre UPEX Galaxy</h2>
								<p className="mb-4 break-words text-sm md:text-base lg:text-lg">UPEX Galaxy es nuestra plataforma estrella, diseñada para proporcionar una experiencia de aprendizaje inmersiva y realista en el mundo del QA Testing. Con la versión Gratuita "Sandbox" puedes experimentar y probar qué se siente estar en Jira de Galaxy con algunas tareas</p>
								<ul className="list-disc list-inside mb-4">
									<li>Proyectos simulados basados en escenarios reales.</li>
									<li>Acceso a herramientas profesionales: Jira, GitHub, y más!</li>
									<li>Participación en sprints y ceremonias ágiles.</li>
									<li>Feedback personalizado de expertos en QA.</li>
								</ul>
								<Image src="/jira_galaxy.png" alt="UPEX Galaxy Dashboard" title="UPEX Galaxy Jira" width={1920} height={1080} className="object-cover w-full h-full" />
								<div className="mt-auto flex flex-col items-center justify-center w-full">
									<Link href="/start" target="_blank" rel="noopener noreferrer" passHref>
										<Button className="mt-4 bg-gradient-to-r from-[#9d00f8] to-[#ff00ff] hover:from-[#cc00cc] hover:to-[#ff86e1] text-white text-xl py-6 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg max-w-xs md:max-w-md">
											<span className="mr-2">UNIRSE A UPEX GALAXY!</span>
										</Button>
									</Link>
									<Link href="https://forms.gle/ke4kadCJWRrDkDTXA" target="_blank" rel="noopener noreferrer" passHref>
										<Button className="h-auto mt-2 text-white text-xl py-1 px-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg max-w-xs md:max-w-md break-words whitespace-normal">
											<span className="mr-2">PROBAR GRATIS versión SANDBOX</span>
										</Button>
									</Link>
								</div>
							</div>
							<div className="md:w-1/4 p-2 max-w-md">
								<YoutubeShort videoSource="U73IrRQ1-EU" title="Qué es UPEX Galaxy?" />
							</div>
							<div className="md:w-1/4 p-2 max-w-md">
								<YoutubeShort videoSource="Etv9HkHk4zE" title="Aprender con UPEX Galaxy be like:" />
							</div>
						</div>
					</section>
					<section className="mb-1 h-full rounded-2xl bg-gradient-to-br from-blue-900/80 to-purple-900/80 p-6 backdrop-blur-xl backdrop-filter flex flex-col">
						<div className="flex flex-col md:flex-row-reverse items-center justify-center">
							<div className="md:w-2/4 p-8 max-w-2xl w-full">
								<h2 className="text-4xl font-bold mb-4 flex items-center justify-center text-[#00FFFF]">CURSOS de Inserción Laboral</h2>
								<p className="mb-4">UPEX Blackhole ofrece Cursos Completos (asincrónicos) que cubren todos los aspectos del QA Testing, desde lo básico hasta lo más avanzado. Hoy en día, el Servicio Blackhole y Galaxy están unificados, lo cual significa que cada Curso adquirido viene incluído un Sprint de UPEX Galaxy! (es decir, Acceso 24/7 por 1 Mes en el Workspace de UPEX Galaxy).</p>
								<ul className="list-disc list-inside mb-4">
									<li>Cursos super-estructurados por niveles de experiencia.</li>
									<li>Contenido actualizado regularmente con las últimas tendencias.</li>
									<li>Ejercicios y proyectos (Galaxy) para aplicar lo aprendido.</li>
									<li>Certificaciones reconocidas por la industria.</li>
								</ul>
								<div className="mt-auto flex justify-center">
									<Link href="/cursos" rel="noopener noreferrer" passHref>
										<Button className="h-auto mt-4 bg-gradient-to-r from-[#9d00f8] to-[#ff00ff] hover:from-[#cc00cc] hover:to-[#ff86e1] text-white text-xl py-2 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg max-w-xs md:max-w-md break-words whitespace-normal">
											<span className="mr-2">VER CURSOS DE UPEX BLACKHOLE!</span>
										</Button>
									</Link>
								</div>
							</div>
							<div className="md:w-1/4 p-2 max-w-md">
								<YoutubeShort videoSource="AuChXkp6jR8" title="Cursos de Testing!" />
							</div>
							<div className="md:w-1/4 p-2 max-w-md">
								<Image src="/cursos-blackhole.png" alt="UPEX Blackhole Info" title="UPEX Blackhole Cursos" width={1080} height={1080} className="object-cover w-full h-full rounded-3xl border-4 border-white" />
							</div>
						</div>
					</section>

					{/** SECTION: TESTIMONIALS */}
					<div className="container mx-auto mt-20 flex flex-col items-center justify-center">
						<h2 className="text-4xl mt-20 mb-10 md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#04f5f9] via-[#cea4ff] to-[#da45ff]">TESTIMONIOS</h2>
						<div className="container max-w-7xl flex items-center justify-center">
							<div className="flex flex-col md:flex-row items-center">
								<div className="md:w-2/6 p-8">
									<YoutubeShort videoSource="aLkZ8MCLc3A" title="Lo que dicen de UPEX!" />
								</div>
								<div className="md:w-4/6 p-8">
									<AnimatedTestimonials />
								</div>
							</div>
						</div>
						<div className="mt-auto flex justify-center">
							<Link href="/testimonios" rel="noopener noreferrer" passHref>
								<Button className="h-auto mt-4 bg-gradient-to-r from-[#9d00f8] to-[#ff00ff] hover:from-[#cc00cc] hover:to-[#ff86e1] text-white text-xl py-2 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg max-w-xs md:max-w-md break-words whitespace-normal">
									<span className="mr-2">VER MÁS TESTIMONIOS!</span>
								</Button>
							</Link>
						</div>
					</div>
					<CommunitySocialMedia />
				</section>

				<motion.div className="bg-gradient-to-r from-[#020B2D] to-[#8f26e0] rounded-lg p-12 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
					<h2 className="text-4xl font-bold mb-4">{join('title')}</h2>
					<p className="text-xl mb-8">{join('description')}</p>
					<Link href="/start" target="_blank" rel="noopener noreferrer" passHref>
						<PressStartButton />
					</Link>
				</motion.div>
				<WhatsAppButton />
			</main>
			<Footer />
		</div>
	);
}
