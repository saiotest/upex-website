'use client';

// import { Rocket, Book, Castle, Satellite } from 'lucide-react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n.config';
import React from 'react';

export function GlassCards() {
	return (
		<div className="min-h-screen bg-[#000a2c] p-8">
			<h1 className="text-4xl font-bold text-white mb-8 text-center">Revolucionando la Educación y Experiencia en QA</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<GlassCard title="UPEX Sandbox" description="Espacio de trabajo gratuito de Jira para práctica de QA. Perfecto para probar el Workspace de UPEX Galaxy antes de su verdadero uso." icon="" buttonText="Prueba Gratis" glowColor="from-purple-400 to-blue-400" />
				<GlassCard title="UPEX Blackhole" description="Cursos en línea completos que cubren habilidades de QA desde lo fundamental de Testing Manual hasta lo avanzado como Automation." icon="" buttonText="Explorar Cursos" glowColor="from-cyan-400 to-blue-500" />
				<GlassCard title="UPEX Galaxy" description="Nuestro producto estrella: Un espacio de trabajo de QA inmersivo y realista que simula (y supera) los entornos del mundo real." icon="" buttonText="Comenzar" glowColor="from-blue-400 to-purple-500" />
				<GlassCard title="UPEX Satellite (Nuevo)" description="Conectando a graduados calificados de UPEX Galaxy con empresas de software que buscan talento en QA. (Próximamente)" icon="" buttonText="Más Información" glowColor="from-cyan-300 to-blue-600" />
			</div>
		</div>
	);
}

interface CustomImageProps {
	icon?: string | StaticImport;
	ReactIcon?: React.ElementType;
}
const CustomImage: React.FC<CustomImageProps> = ({ icon, ReactIcon }) => {
	if (icon) {
		return <Image src={icon} alt={icon.toString().replaceAll('/', '')} width={32} height={32} className="w-14 h-14 mb-0 mx-auto" />;
	} else if (ReactIcon) {
		return <ReactIcon className="w-12 h-12 mb-4 mx-auto text-[#00FFFF]" />;
	}
};
interface WithLinkProps {
	linkTo?: string;
	buttonText?: string;
}
const WithLink: React.FC<WithLinkProps> = ({ linkTo, buttonText }) => {
	if (!linkTo) return null;
	if (!buttonText) buttonText = 'Ver más';
	return (
		<Link href={linkTo}>
			<Button className="text-center mt-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-800 px-4 py-2 font-medium text-white transition-all hover:from-cyan-500 hover:to-blue-600">{buttonText}</Button>
		</Link>
	);
};

interface GlassCardProps {
	title: string;
	description: string;
	icon?: string | StaticImport;
	buttonText: string;
	glowColor: string;
	linkTo?: string;
	reactIcon?: React.ElementType;
}
export function GlassCard({ glowColor, title, description, icon, reactIcon, buttonText, linkTo }: GlassCardProps) {
	return (
		<div className={'relative overflow-hidden rounded-2xl p-[2px] transition-all duration-300 hover:scale-105 group'}>
			<div className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-75 group-hover:opacity-100 blur-md transition-opacity duration-300`}></div>
			<div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-gradient"></div>
			<div className="relative h-full rounded-2xl bg-gradient-to-br from-blue-900/80 to-purple-900/80 p-6 backdrop-blur-xl backdrop-filter flex flex-col">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
				<div className="relative z-10 flex-grow">
					<CustomImage icon={icon} ReactIcon={reactIcon} />
					<h2 className="mt-4 text-2xl font-semibold text-white text-center">{title}</h2>
					<p className="mt-2 text-sm text-blue-200 text-left">
						{description.split('\\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</p>
				</div>
				<div className="relative z-10 flex-grow">
					<div className="mt-auto flex justify-center">
						<WithLink linkTo={linkTo} buttonText={buttonText} />
					</div>
				</div>
			</div>
		</div>
	);
}
