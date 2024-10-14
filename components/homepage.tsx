/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassCard } from '@/components/ui/glass-card';
import { Search, Book, Briefcase, Award, Slack, MessageCircle, Rocket, Castle, Satellite, Code, GitBranch, CheckSquare, Database, Send, FileCode, TrendingUp } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n.config';

export function Homepage() {
	const hero = useTranslations('hero');
	const serv = useTranslations('services');
	const ben = useTranslations('benefits');
	const com = useTranslations('community');
	const imp = useTranslations('impact');

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white">
			<Header />
			<main>
				{/**---- SECTION: HERO BANNER ----*/}
				<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] py-20 px-4">
					<div className="text-center max-w-5xl mx-auto">
						{/* ---- HERO TITLES ---- */}
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-20 md:whitespace-nowrap">
							<div className="md:whitespace-nowrap">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04f5f9] via-[#575fff] to-[#8c45ff]">{hero('title.part1')}</span>
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b171ff] via-[#e658ff] to-[#ff04f7]">{hero('title.part2')}</span> <br />
							</div>
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f4ff7a] via-[#19fb09] to-[#07fd9f]">{hero('title.part3')}</span>
						</h1>
						<h2 className="text-2xl md:text-2xl text-[#00FFFF] mb-8 md:whitespace-nowrap">{hero('subtitle')}</h2>
						<p className="text-lg md:text-xl mb-8">{hero('description')}</p>

						{/* ---- Search Bar (COMMING SOON) ---- */}
						{/* <div className="max-w-2xl mx-auto mb-12 relative">
								<Input 
									type="text" 
									placeholder={hero("searchPlaceholder")} 
									className="w-full px-4 py-3 pl-12 rounded-lg bg-white text-[#020B2D] text-lg"
								/>
								<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#020B2D]" size={24} />
							</div> */}

						{/**---- ICON TOOL TIPS ----*/}
						<TooltipProvider>
							<div className="flex justify-center gap-4 mb-12">
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											{/* <Slack className="w-8 h-8 mb-2 text-[#00FFFF]" /> */}
											<Image src="/slack_icon.svg" alt="Slack" width={32} height={32} className="w-14 h-14 mb-0" />
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
											{/* <CheckSquare className="w-8 h-8 mb-2 text-[#00FFFF]" /> */}
											<Image src="/jira_icon.svg" alt="Jira" width={32} height={32} className="w-14 h-14 mb-0" />
											<span className="text-xs">Jira</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.jira')}</p>
									</TooltipContent>
								</Tooltip>
								{/* <Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<Code className="w-8 h-8 mb-2 text-[#00FFFF]" />
											<span className="text-xs">XRay</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.xray')}</p>
									</TooltipContent>
								</Tooltip> */}
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											{/* <Database className="w-8 h-8 mb-2 text-[#00FFFF]" /> */}
											<Image src="/sql_icon.svg" alt="sql" width={32} height={32} className="w-14 h-14 mb-0" />
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
											<Image src="/postman_icon.svg" alt="postman" width={32} height={32} className="w-14 h-14 mb-0" />
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
											<Image src="/vscode_icon.svg" alt="vscode" width={32} height={32} className="w-14 h-14 mb-0" />
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
											<Image src="/github_icon.svg" alt="Github" width={32} height={32} className="w-14 h-14 mb-0" />
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
							<Link href="https://forms.gle/ke4kadCJWRrDkDTXA" target="_blank" rel="noopener noreferrer" passHref>
								<Button className="bg-[#00FFFF] hover:bg-[#00D0D0] text-[#020B2D]" size="lg">
									{hero('tryWorkspaceFree')}
								</Button>
							</Link>
							<Link href="/explore" target="_blank" rel="noopener noreferrer" passHref>
								<Button variant="outline" className="bg-transparent border-white text-white hover:bg-[#8A2BE2] hover:text-white hover:border-[#8A2BE2]" size="lg">
									{hero('exploreGalaxy')}
								</Button>
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
					<div className="container mx-auto">
						{/* ---- CARDS (SERVICES) ---- */}
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{serv('title')}</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
							<GlassCard icon="/cohete_icon.svg" title={serv('cards.sandbox.title')} description={serv('cards.sandbox.description')} buttonText={serv('cards.sandbox.link')} linkTo="https://forms.gle/ke4kadCJWRrDkDTXA" glowColor="from-cyan-300 to-blue-600" />
							<GlassCard reactIcon={Book} title={serv('cards.blackhole.title')} description={serv('cards.blackhole.description')} buttonText={serv('cards.blackhole.link')} linkTo="https://upex.docu.upexgalaxy.com/wiki/x/A4AFAQ" glowColor="from-cyan-300 to-blue-600" />
							<GlassCard reactIcon={Castle} title={serv('cards.galaxy.title')} description={serv('cards.galaxy.description')} buttonText={serv('cards.galaxy.link')} linkTo="https://upex.docu.upexgalaxy.com/wiki/x/L4YF" glowColor="from-cyan-300 to-blue-600" />
							<GlassCard reactIcon={Satellite} title={serv('cards.satellite.title')} description={serv('cards.satellite.description')} buttonText={serv('cards.satellite.link')} linkTo="#" glowColor="from-cyan-300 to-blue-600" />
						</div>

						<div className="bg-[#1A2C5A] p-6 md:p-8 rounded-lg mb-20">
							<h3 className="text-2xl font-bold mb-4 text-white text-center">{ben('title')}</h3>
							<ul className="text-left list-disc list-inside space-y-2 text-white">
								<li>{ben('items.realistic')}</li>
								<li>{ben('items.community')}</li>
								<li>{ben('items.true-to-life')}</li>
								<li>{ben('items.integrated')}</li>
								<li>{ben('items.structured')}</li>
								<li>{ben('items.educational')}</li>
							</ul>
						</div>

						<div className="bg-[#1A2C5A] p-6 md:p-8 rounded-lg mb-20">
							<h3 className="text-2xl font-bold mb-4 text-white text-center">{com('title')}</h3>
							<p className="mb-6 text-white text-center">{com('description')}</p>
							<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
								<a href="https://join.slack.com/t/upexqa/shared_invite/zt-2p2lxo03o-DeBuiJNRqlSKAID~XdxE2Q" target="_blank" rel="noopener noreferrer">
									<Button className="bg-[#4A154B] hover:bg-[#3A0F3B]">
										<Slack className="mr-2" />
										{com('join-slack')}
									</Button>
								</a>
								<a href="https://discord.gg/aCC6t4Ut9k" target="_blank" rel="noopener noreferrer">
									<Button className="bg-[#7289DA] hover:bg-[#5269BA]">
										<MessageCircle className="mr-2" />
										{com('join-discord')}
									</Button>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
