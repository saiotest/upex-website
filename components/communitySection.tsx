/* eslint-disable react/no-unknown-property */
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/com-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/com-card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/com-dialog';
import Image from 'next/image';

type PlanetInfo = {
	name: string;
	icon: React.ReactNode;
	description: string;
	link: string;
	linkText: string;
	bgImage: string;
};

const planets: PlanetInfo[] = [
	{
		name: 'Slack',
		icon: <Image src="/icon-slack.png" alt="icon-slack" title="UPEX Community Slack" width={300} height={300} className="w-12 h-12 mb-0" />,
		description: 'Fuente de la Comunidad Principal integrado con Jira. Espacio privado para notificaciones, consultas y noticias.',
		link: 'https://join.slack.com/t/upexqa/shared_invite/zt-2p2lxo03o-DeBuiJNRqlSKAID~XdxE2Q',
		linkText: 'Unirse a Slack',
		bgImage: '/planet-slack.png'
	},
	{
		name: 'Discord',
		icon: <Image src="/icon-discord.png" alt="icon-discord" title="UPEX Community Discord" width={300} height={300} className="w-12 h-12 mb-0" />,
		description: 'Comunidad Abierta para conversar, eventos en vivo, clases de inglés y más.',
		link: 'https://discord.gg/aCC6t4Ut9k',
		linkText: 'Unirse a Discord',
		bgImage: '/planet-discord.png'
	},
	{
		name: 'YouTube',
		icon: <Image src="/icon-youtube.png" alt="icon-youtube" title="UPEX YouTube Channel Saitest" width={300} height={300} className="w-12 h-12 mb-0" />,
		description: 'Canal oficial "Saitest" con más de 22k seguidores. Fuente principal de contenido para la comunidad UPEX.',
		link: 'https://www.youtube.com/@Saitest',
		linkText: 'Ver Canal de YouTube',
		bgImage: '/planet-youtube.png'
	},
	{
		name: 'LinkedIn',
		icon: <Image src="/icon-linkedin.png" alt="icon-linkedin" title="Elyer Maldonado Linkedin" width={300} height={300} className="w-12 h-12 mb-0" />,
		description: 'Perfiles de Elyer Maldonado y UPEX. Fuente principal de noticias y actualizaciones.',
		link: 'https://www.linkedin.com/in/elyermad/',
		linkText: 'Seguir en LinkedIn',
		bgImage: '/planet-linkedin.png'
	},
	{
		name: 'Instagram',
		icon: <Image src="/icon-instagram.png" alt="icon-instagram" title="UPEX Instagram" width={300} height={300} className="w-12 h-12 mb-0" />,
		description: 'Cuenta "upex_official" con contenido de valor, noticias, promociones e infografías.',
		link: 'https://www.instagram.com/upex_official/',
		linkText: 'Seguir en Instagram',
		bgImage: '/planet-instagram.png'
	},
	{
		name: 'WhatsApp',
		icon: <Image src="/icon-whatsapp.png" alt="icon-whatsapp" title="UPEX Community Whatsapp" width={300} height={300} className="w-12 h-12 mb-0" />,
		description: 'Comunidad abierta con múltiples chats por especialidades. Fácil acceso para consultas, noticias de empleo y discusiones sobre testing.',
		link: 'https://chat.whatsapp.com/H1kpOKazMj0CVLXuZTOnud',
		linkText: 'Unirse a WhatsApp',
		bgImage: '/planet-whatsapp.png'
	}
];

export default function CommunitySocialMedia() {
	const [, setSelectedPlanet] = useState<PlanetInfo | null>(null);

	return (
		<section id="community-section" className="relative w-full overflow-hidden flex flex-col justify-center items-center py-12 px-4 mb-8">
			<Card className="relative mt-20 z-1 w-full max-w-4xl mx-auto bg-transparent border-none shadow-none">
				<CardHeader>
					<CardTitle className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#04f5f9] via-[#cea4ff] to-[#da45ff]">Únete a la Comunidad UPEX</CardTitle>
					<CardDescription className="text-center text-gray-300 text-sm md:text-base">Conéctate con otros profesionales de QA, comparte conocimientos y mantente actualizado con lo último en pruebas de software.</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-center items-center relative">
					<div className="absolute inset-0">
						<Image src="/universe_wallpaper.jpg" alt="UPEX" title="UPEX Community Universe" layout="fill" objectFit="cover" className="z-0 rounded-full border-4 border-white" />
					</div>

					<div className="w-full h-[300px] md:h-[400px] relative">
						<div className="absolute inset-0 flex justify-center items-center">
							<h3 className="text-center sm:text-lg md:text-2xl lg:text-3xl font-bold text-border italic">Elige un planeta</h3>
						</div>
						{planets.map((planet, index) => (
							<Dialog key={planet.name}>
								<DialogTrigger asChild>
									<Button
										variant="outline"
										className={`absolute rounded-full p-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden hover:scale-110 transition-all duration-300 planet-float-${index + 1}`}
										style={{
											top: `${45 + 40 * Math.sin((index * 2 * Math.PI) / planets.length)}%`,
											left: `${43 + 40 * Math.cos((index * 2 * Math.PI) / planets.length)}%`
										}}
										onClick={() => setSelectedPlanet(planet)}>
										<Image src={planet.bgImage} alt={planet.name} title={planet.name} layout="fill" objectFit="cover" className="rounded-full" />
										<div className="absolute inset-0 flex items-center justify-center rounded-full">{planet.icon}</div>
									</Button>
								</DialogTrigger>
								<DialogContent className="sm:max-w-[425px] bg-purple-200">
									<DialogHeader>
										<DialogTitle className="text-black">{planet.name}</DialogTitle>
										<DialogDescription className="text-black">{planet.description}</DialogDescription>
									</DialogHeader>
									<div className="mt-4">
										<Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
											<a href={planet.link} title={planet.linkText} target="_blank" rel="noopener noreferrer">
												{planet.linkText}
											</a>
										</Button>
									</div>
								</DialogContent>
							</Dialog>
						))}
					</div>
				</CardContent>
			</Card>
			<style jsx global>{`
				.space-background {
					background: linear-gradient(to bottom, #0f5abe, #2a0e61);
				}
				.text-border {
					text-shadow:
						2px 2px 0 #000,
						-2px -2px 0 #000,
						-2px 2px 0 #000,
						2px -2px 0 #000,
						2px 2px 2px #000;
				}
				@media (max-width: 640px) {
					.text-border {
						text-shadow:
							1px 1px 0 #000,
							-1px -1px 0 #000,
							-1px 1px 0 #000,
							1px -1px 0 #000,
							1px 1px 1px #000;
					}
				}

				@keyframes move-twink-back {
					from {
						background-position: 0 0;
					}
					to {
						background-position: -10000px 5000px;
					}
				}

				@keyframes float {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-20px);
					}
				}

				.planet-float-1 {
					animation: float 6s ease-in-out infinite;
				}
				.planet-float-2 {
					animation: float 7s ease-in-out infinite;
				}
				.planet-float-3 {
					animation: float 8s ease-in-out infinite;
				}
				.planet-float-4 {
					animation: float 9s ease-in-out infinite;
				}
				.planet-float-5 {
					animation: float 10s ease-in-out infinite;
				}
				.planet-float-6 {
					animation: float 11s ease-in-out infinite;
				}
			`}</style>
		</section>
	);
}
