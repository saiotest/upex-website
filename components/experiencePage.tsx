'use client';

import { ArrowUpDown, Book, Users, ChevronLeft, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './header';
import Footer from '@/components/footer';
import { Link } from '@/i18n.config';
import WhatsAppButton from './whatsapp-button';

export function ExperiencePageComponent() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white">
			<Header />
			<HeroBanner />
			<main id="suscripcion-upex-galaxy" className="max-w-4xl mx-auto space-y-12 p-6 md:p-12">
				<section className="text-center space-y-4">
					<h1 className="text-4xl  md:text-6xl font-bold bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#8a2be2] text-transparent bg-clip-text mt-20 mb-15 p-2 md:whitespace-nowrap">Suscripción Galaxy</h1>
				</section>

				<section className="space-y-6">
					<p className="text-lg md:text-xl text-center text-[#ffa3ed]">Una "Suscripción en UPEX Galaxy" significa realmente:</p>
					<p className="text-lg md:text-xl text-center text-[#00fffb]">Suscribirse a un "Sprint"</p>
					<p className="text-lg md:text-xl text-center text-[#ffa3ed]">Pero, ¿qué es exactamente un Sprint?</p>
				</section>

				<section className="bg-[#1a1a4a] rounded-xl p-6 space-y-6 border border-[#3a3a6a]">
					<h2 className="text-3xl font-bold text-center text-[#00ffff]">¿Qué es un SPRINT?</h2>
					<div className="flex items-center justify-center space-x-4">
						<ArrowUpDown className="w-12 h-12 text-[#ff00ff]" />
						<p className="text-lg md:text-xl text-center">Un sprint es el ciclo laboral de un proyecto de software en metodologías ágiles. Una terminología muy usada día a día.</p>
					</div>
				</section>

				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-center text-[#00ffff]">¿Cómo es un SPRINT en UPEX GALAXY?</h2>
					<p className="text-lg md:text-xl text-center text-[#afd2ff]">Estarás en un entorno práctico, trabajando con proyectos realistas, exclusivos para testers QA. Asistirás a ceremonias SCRUM; además podrás participar en simulacros de entrevistas, pruebas técnicas y revisión de CV.</p>
				</section>

				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-center text-[#ffd549]">¿Es tu PRIMERA SUBSCRIPCIÓN?</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<SubscriptionCard emoji="🥹" title="¡Sí! primera vez" description="Si es tu primera vez, tienes REGISTRO GRATIS a la Galaxia! 🚀" buttonText="REGISTRARSE y SUSCRIBIRSE →" linkTo="https://upexgalaxy.zapier.app/register" />
						<SubscriptionCard emoji="😎" title="Ya estoy en UPEX Galaxy" description="Si ya eres parte de la Galaxia, Bienvenido de vuelta, Crack!⭐" buttonText="SUSCRIBIRSE DE VUELTA →" linkTo="https://upexgalaxy.zapier.app/subscribe-sprints" />
					</div>
				</section>

				<div className="my-24 flex flex-col items-center">
					<Image
						src="/cat_hello.jpg"
						alt="Cat says hello"
						width={375} // Ajusta el ancho según sea necesario
						height={225} // Ajusta la altura según sea necesario
						className="mt-40 rounded-xl mb-1"
					/>
					<h2 className="text-3xl font-bold text-center text-[#00ffff]">¡TAMBIÉN TENEMOS CURSOS Y TUTORÍA PRIVADA!</h2>
				</div>
				<section className="space-y-6">
					<p className="text-lg text-center text-[#afd2ff] italic">¡Prepárate para despegar hacia el conocimiento! 🚀 Haz clic en los siguientes servicios estelares y serás teletransportado a formularios intergalácticos. ¡No te preocupes, no necesitas traje espacial!</p>
					<div className="grid md:grid-cols-2 gap-6">
						<OtherServiceCard icon={<Book className="w-12 h-12 text-[#00ffff]" />} title="CURSOS BLACKHOLE" description="Cursos QA COMPLETOS y listos para ti, desde lo básico hasta lo avanzado. Aprende a tu ritmo." buttonText="Explorar Cursos →" linkTo="#" />
						<OtherServiceCard icon={<Users className="w-12 h-12 text-[#00ffff]" />} title="TUTOR PRIVADO" description="Mentoría o Asesoría QA EXCLUSIVA 1:1 para guiarte y ayudarte en tus asignaciones en el Sprint." buttonText="Consigue tu tutor personal →" linkTo="#" />
					</div>
				</section>

				<Button className="w-full bg-[#1a1a4a] hover:bg-[#2a2a5a] text-[#00ffff] border border-[#00ffff]">
					<ChevronLeft className="mr-2 h-4 w-4" />
					<Link href="#">Volver al Inicio</Link>
				</Button>
				<WhatsAppButton />
			</main>
			<Footer />
		</div>
	);
}

function HeroBanner() {
	const benefits = [
		{ icon: Users, title: 'Comunidad Privada', description: 'Acceso permanente a Slack' },
		{ icon: Book, title: 'Guías Exclusivas', description: 'Guías únicas en Confluence' }
	];
	const gotoSection = (sectionId: string) => {
		return document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div className="bg-gradient-to-r from-[#0a0a2a] to-[#1a1a4a] py-16 px-6 md:px-12">
			<video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
				<source src="/galaxy-background.webm" type="video/webm" />
				Your browser does not support the video tag.
			</video>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-1"></div>
			<main className="relative">
				<div className="max-w-4xl mx-auto text-center space-y-6 mt-20">
					<Rocket className="w-16 h-16 text-[#00ffff] mx-auto animate-bounce" />
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-20 bg-clip-text text-transparent bg-gradient-to-r from-[#eaff00] via-[#01fff2] to-[#ff79eb]">
						<span>¡Las puertas de</span>
						<br />
						<span>UPEX Galaxy</span>
						<br />
						<span>están abiertas!</span>
					</h1>
					<p className="text-xl md:text-2xl text-[#ededff] md:whitespace-nowrap">Ya no tienes que pagar una matrícula para entrar en nuestra galaxia.</p>
					<motion.div className="bg-[#ffffff15] backdrop-blur-md rounded-2xl p-8 mb-12 shadow-xl" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
						<h2 className="text-3xl font-semibold mb-6 text-[#f879ff]">CON TU PRIMERA SUSCRIPCIÓN TE REGALAMOS:</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{benefits.map((benefit, index) => (
								<motion.div key={index} className="flex flex-col items-center" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}>
									<benefit.icon size={48} className="text-[#ffc800] mb-4" />
									<h3 className="text-2xl font-bold text-[#00ffff] mb-2">{benefit.title}</h3>
									<p className="text-lg text-[#afd2ff]">{benefit.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
					<motion.div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.1 }}>
						<Button onClick={() => gotoSection('suscripcion-upex-galaxy')} className="bg-gradient-to-r from-[#9d00f8] to-[#ff00ff] hover:from-[#cc00cc] hover:to-[#ff86e1] text-white text-xl py-6 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
							<span className="mr-2">¡ÚNETE A LA GALAXIA AHORA!</span>
						</Button>
						<Button onClick={() => gotoSection('suscripcion-upex-galaxy')} variant="outline" className="bg-transparent border-2 border-[#ffffff50] hover:text-white text-xl py-6 px-10 rounded-full hover:bg-[#ffffff20] transform hover:scale-105 transition-all duration-300">
							¿Quieres Probarlo Gratis?
						</Button>
					</motion.div>
				</div>
			</main>
		</div>
	);
}

interface SubscriptionCardProps {
	emoji: string;
	title: string;
	description: string;
	buttonText: string;
	linkTo: string;
	newTab?: boolean;
}
function SubscriptionCard({ emoji, title, description, buttonText, linkTo, newTab }: SubscriptionCardProps) {
	const newTabProps = newTab ? { target: '_blank', rel: 'noopener,noreferrer' } : {};
	return (
		<Card className="bg-[#1a1a4a] border-[#3a3a6a]">
			<CardContent className="p-6 space-y-4">
				<div className="text-4xl text-center">{emoji}</div>
				<h3 className="text-xl font-semibold text-center text-[#00ffff]">{title}</h3>
				<p className="text-center text-[#b0b0ff]">{description}</p>
				<Button className="w-full font-bold bg-[#9d00f8] hover:bg-[#cc00cc] text-white">
					<Link href={linkTo} {...newTabProps}>
						{buttonText}
					</Link>
					{/* {buttonText} */}
				</Button>
			</CardContent>
		</Card>
	);
}

interface OtherServiceCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	buttonText: string;
	linkTo: string;
	newTab?: boolean;
}
function OtherServiceCard({ icon, title, description, buttonText, linkTo, newTab }: OtherServiceCardProps) {
	const newTabProps = newTab ? { target: '_blank', rel: 'noopener,noreferrer' } : {};
	return (
		<Card className="bg-[#1a1a4a] border-[#3a3a6a]">
			<CardContent className="p-6 space-y-4">
				<div className="flex justify-center">{icon}</div>
				<h3 className="text-xl font-semibold text-center text-[#00ffff]">{title}</h3>
				<p className="text-center text-[#b0b0ff]">{description}</p>
				<Button className="w-full bg-[#8a2be2] hover:bg-[#cc00cc] text-white">
					<Link href={linkTo} {...newTabProps}>
						{buttonText}
					</Link>
					{/* <span>{buttonText}</span> */}
				</Button>
			</CardContent>
		</Card>
	);
}
