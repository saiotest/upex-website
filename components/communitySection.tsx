'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/com-button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/com-card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/com-dialog';
import { Youtube, Linkedin, Instagram, Slack, MessageCircle, Phone } from 'lucide-react';
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
		icon: <Slack className="h-6 w-6 text-white" />,
		description: 'Fuente de la Comunidad Principal integrado con Jira. Espacio privado para notificaciones, consultas y noticias.',
		link: 'https://join.slack.com/t/upexqa/shared_invite/zt-2p2lxo03o-DeBuiJNRqlSKAID~XdxE2Q',
		linkText: 'Unirse a Slack',
		bgImage: '/placeholder.svg?height=100&width=100'
	},
	{
		name: 'Discord',
		icon: <MessageCircle className="h-6 w-6 text-white" />,
		description: 'Comunidad Abierta para conversar, eventos en vivo, clases de inglés y más.',
		link: 'https://discord.gg/aCC6t4Ut9k',
		linkText: 'Unirse a Discord',
		bgImage: '/placeholder.svg?height=100&width=100'
	},
	{
		name: 'YouTube',
		icon: <Youtube className="h-6 w-6 text-white" />,
		description: 'Canal oficial "Saitest" con más de 22k seguidores. Fuente principal de contenido para la comunidad UPEX.',
		link: 'https://www.youtube.com/@Saitest',
		linkText: 'Ver Canal de YouTube',
		bgImage: '/placeholder.svg?height=100&width=100'
	},
	{
		name: 'LinkedIn',
		icon: <Linkedin className="h-6 w-6 text-white" />,
		description: 'Perfiles de Elyer Maldonado y UPEX. Fuente principal de noticias y actualizaciones.',
		link: 'https://www.linkedin.com/in/elyermaldonado/',
		linkText: 'Seguir en LinkedIn',
		bgImage: '/placeholder.svg?height=100&width=100'
	},
	{
		name: 'Instagram',
		icon: <Instagram className="h-6 w-6 text-white" />,
		description: 'Cuenta "upex_official" con contenido de valor, noticias, promociones e infografías.',
		link: 'https://www.instagram.com/upex_official/',
		linkText: 'Seguir en Instagram',
		bgImage: '/placeholder.svg?height=100&width=100'
	},
	{
		name: 'WhatsApp',
		icon: <Phone className="h-6 w-6 text-white" />,
		description: 'Comunidad abierta con múltiples chats por especialidades. Fácil acceso para consultas, noticias de empleo y discusiones sobre testing.',
		link: '#', // Replace with actual WhatsApp group invite link
		linkText: 'Unirse a WhatsApp',
		bgImage: '/placeholder.svg?height=100&width=100'
	}
];

export default function CommunitySocialMedia() {
	const [selectedPlanet, setSelectedPlanet] = useState<PlanetInfo | null>(null);

	return (
		<div className="relative w-full h-screen overflow-hidden bg-[#020B2D]">
			<div className="absolute inset-0 overflow-hidden">
				<div className="stars"></div>
				<div className="twinkling"></div>
			</div>
			<Card className="relative z-10 w-full max-w-4xl mx-auto mt-20 bg-transparent border-none shadow-none">
				<CardHeader>
					<CardTitle className="text-4xl font-bold text-center text-white">Únete a la Comunidad UPEX</CardTitle>
					<CardDescription className="text-center text-gray-300">Conéctate con otros profesionales de QA, comparte conocimientos y mantente actualizado con lo último en pruebas de software.</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-center items-center min-h-[400px] relative">
					{planets.map((planet, index) => (
						<Dialog key={planet.name}>
							<DialogTrigger asChild>
								<Button
									variant="outline"
									className={`absolute rounded-full p-0 w-20 h-20 overflow-hidden hover:scale-110 transition-all duration-300 animate-float-${index + 1}`}
									style={{
										top: `${50 + 40 * Math.sin((index * 2 * Math.PI) / planets.length)}%`,
										left: `${50 + 40 * Math.cos((index * 2 * Math.PI) / planets.length)}%`
									}}
									onClick={() => setSelectedPlanet(planet)}>
									<Image src={planet.bgImage} alt={planet.name} layout="fill" objectFit="cover" className="rounded-full" />
									<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">{planet.icon}</div>
								</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle>{planet.name}</DialogTitle>
									<DialogDescription>{planet.description}</DialogDescription>
								</DialogHeader>
								<div className="mt-4">
									<Button asChild className="w-full">
										<a href={planet.link} target="_blank" rel="noopener noreferrer">
											{planet.linkText}
										</a>
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</CardContent>
				<CardFooter className="flex justify-center">
					<p className="text-sm text-gray-400">Haz clic en un planeta para más información</p>
				</CardFooter>
			</Card>
			<style jsx>{`
				.stars,
				.twinkling {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
					display: block;
				}

				.stars {
					background: #000 url(/stars.png) repeat top center;
					z-index: 0;
				}

				.twinkling {
					background: transparent url(/twinkling.png) repeat top center;
					z-index: 1;
					animation: move-twink-back 200s linear infinite;
				}

				@keyframes move-twink-back {
					from {
						background-position: 0 0;
					}
					to {
						background-position: -10000px 5000px;
					}
				}

				@keyframes float-1 {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-20px);
					}
				}

				@keyframes float-2 {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-15px);
					}
				}

				@keyframes float-3 {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-25px);
					}
				}

				@keyframes float-4 {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-18px);
					}
				}

				@keyframes float-5 {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-22px);
					}
				}

				@keyframes float-6 {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-19px);
					}
				}

				.animate-float-1 {
					animation: float-1 6s ease-in-out infinite;
				}
				.animate-float-2 {
					animation: float-2 7s ease-in-out infinite;
				}
				.animate-float-3 {
					animation: float-3 8s ease-in-out infinite;
				}
				.animate-float-4 {
					animation: float-4 9s ease-in-out infinite;
				}
				.animate-float-5 {
					animation: float-5 10s ease-in-out infinite;
				}
				.animate-float-6 {
					animation: float-6 11s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}
