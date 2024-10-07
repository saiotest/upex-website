/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, Book, Briefcase, Award, Slack, MessageCircle, Rocket, Castle, Satellite, Code, GitBranch, CheckSquare, Database, Send, FileCode, TrendingUp } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';

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
				<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] py-20 px-4">
					<div className="text-center max-w-5xl mx-auto">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-20">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#80D8FF] via-[#B388FF] to-[#8C9EFF]">{hero('title.part1')}</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF00FF]">{hero('title.part2')}</span> <br />
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C0C0C0] via-[#E5E4E2] to-[#D3D3D3]">{hero('title.part3')}</span>
						</h1>
						<h2 className="text-2xl md:text-3xl text-[#00FFFF] mb-8">{hero('subtitle')}</h2>

						<p className="text-lg md:text-xl mb-8">{hero('description')}</p>

						{/* ---- Search Bar ---- */}
						{/* <div className="max-w-2xl mx-auto mb-12 relative">
              <Input 
                type="text" 
                placeholder={hero("searchPlaceholder")} 
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white text-[#020B2D] text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#020B2D]" size={24} />
            </div> */}
						{/* ---- ---------- ---- */}

						<TooltipProvider>
							<div className="flex flex-wrap justify-center gap-6 mb-12">
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<Slack className="w-8 h-8 mb-2 text-[#00FFFF]" />
											<span className="text-sm">Slack</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.slack')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<CheckSquare className="w-8 h-8 mb-2 text-[#00FFFF]" />
											<span className="text-sm">Jira</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.jira')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<Code className="w-8 h-8 mb-2 text-[#00FFFF]" />
											<span className="text-sm">XRay</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.xray')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<Database className="w-8 h-8 mb-2 text-[#00FFFF]" />
											<span className="text-sm">MySQL</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.mysql')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<Send className="w-8 h-8 mb-2 text-[#00FFFF]" />
											<span className="text-sm">Postman</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.postman')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<FileCode className="w-8 h-8 mb-2 text-[#00FFFF]" />
											<span className="text-sm">VSCode</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.vscode')}</p>
									</TooltipContent>
								</Tooltip>
								<Tooltip>
									<TooltipTrigger>
										<div className="flex flex-col items-center">
											<GitBranch className="w-8 h-8 mb-2 text-[#00FFFF]" />
											<span className="text-sm">GitHub</span>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{hero('tooltips.github')}</p>
									</TooltipContent>
								</Tooltip>
							</div>
						</TooltipProvider>

						<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
							<a href="https://forms.gle/ke4kadCJWRrDkDTXA" target="_blank" rel="noopener noreferrer">
								<Button className="bg-[#00FFFF] hover:bg-[#00D0D0] text-[#020B2D]" size="lg">
									{hero('tryWorkspaceFree')}
								</Button>
							</a>
							<a href="https://upexdocu.atlassian.net/wiki/spaces/GX/overview" target="_blank" rel="noopener noreferrer">
								<Button variant="outline" className="bg-transparent border-white text-white hover:bg-[#8A2BE2] hover:text-white hover:border-[#8A2BE2]" size="lg">
									{hero('exploreGalaxy')}
								</Button>
							</a>
						</div>
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

				<section className="bg-gradient-to-b from-[#0A3A7E] via-[#1E0B4A] to-[#0F5ABE] py-20 px-4">
					<div className="container mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{serv('title')}</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
							<Card className="p-6 bg-[#1A2C5A] border-[#3D4E7A]">
								<Rocket className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />
								<h3 className="text-xl font-semibold mb-2 text-white">{serv('cards.sandbox.title')}</h3>
								<p className="text-white">{serv('cards.sandbox.description')}</p>
								<a href="https://forms.gle/ke4kadCJWRrDkDTXA" target="_blank" rel="noopener noreferrer">
									<Button variant="link" className="mt-4 text-[#00FFFF]">
										{serv('cards.sandbox.link')}
									</Button>
								</a>
							</Card>
							<Card className="p-6 bg-[#1A2C5A] border-[#3D4E7A]">
								<Book className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />
								<h3 className="text-xl font-semibold mb-2 text-white">{serv('cards.blackhole.title')}</h3>
								<p className="text-white">{serv('cards.blackhole.description')}</p>
								<a href="https://upex.docu.upexgalaxy.com/wiki/x/A4AFAQ" target="_blank" rel="noopener noreferrer">
									<Button variant="link" className="mt-4 text-[#00FFFF]">
										{serv('cards.blackhole.link')}
									</Button>
								</a>
							</Card>
							<Card className="p-6 bg-[#1A2C5A] border-[#3D4E7A]">
								<Castle className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />
								<h3 className="text-xl font-semibold mb-2 text-white">{serv('cards.galaxy.title')}</h3>
								<p className="text-white">{serv('cards.galaxy.description')}</p>
								<a href="https://upex.docu.upexgalaxy.com/wiki/x/L4YF" target="_blank" rel="noopener noreferrer">
									<Button variant="link" className="mt-4 text-[#00FFFF]">
										{serv('cards.galaxy.link')}
									</Button>
								</a>
							</Card>
							<Card className="p-6 bg-[#1A2C5A] border-[#3D4E7A]">
								<Satellite className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />
								<h3 className="text-xl font-semibold mb-2 text-white">{serv('cards.satellite.title')}</h3>
								<p className="text-white">{serv('cards.satellite.description')}</p>
								<Button variant="link" className="mt-4 text-[#00FFFF]" disabled>
									{serv('cards.satellite.link')}
								</Button>
							</Card>
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
