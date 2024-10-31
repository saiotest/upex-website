'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n.config';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CourseDetailsProps {
	title: string;
	image: string;
	description: string;
	subscribeLink: string;
	strategyLink: string;
	commingSoon?: string;
}

export default function CourseDetailComponent({ title = 'Curso de Ejemplo', image = '/placeholder.svg?height=400&width=600', description = 'Este es un curso de ejemplo. Aquí puedes agregar una descripción detallada del curso, sus objetivos, y lo que los estudiantes aprenderán.', subscribeLink = 'https://example.com/subscribe', strategyLink = 'https://example.com/strategy', commingSoon }: CourseDetailsProps) {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const mouseX = e.clientX - centerX;
		const mouseY = e.clientY - centerY;
		const rotateX = (mouseY / (rect.height / 2)) * 10;
		const rotateY = (mouseX / (rect.width / 2)) * 10;
		setRotateX(-rotateX);
		setRotateY(rotateY);
	};

	const handleMouseLeave = () => {
		setRotateX(0);
		setRotateY(0);
	};

	return (
		<Card className="mx-auto overflow-hidden bg-transparent border-none shadow-none">
			<div className="md:flex">
				<div className="md:w-1/2 p-6">
					<motion.div className="cursor-pointer w-full" whileHover={{ scale: 1.05 }} style={{ perspective: 1000 }}>
						<motion.div
							className="relative w-full pb-[145%] rounded-2xl overflow-hidden shadow-lg"
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
							style={{
								rotateX,
								rotateY,
								transition: 'all 0.1s ease'
							}}>
							<Image src={image} alt={title} title={title} layout="fill" objectFit="cover" className="absolute inset-0" />
						</motion.div>
					</motion.div>
				</div>
				<div className="md:w-1/2 p-6">
					<CardHeader>
						<CardTitle className="text-3xl font-bold text-white text-[#00ffff]">{title}</CardTitle>
						<CardDescription className="text-6xl font-semibold text-primary text-[#fffb00] text-center">$50 USD</CardDescription>
						<Badge variant="secondary" className="text-xl justify-center bg-[#d53dff]">
							1 Sprint Gratis Incluido
						</Badge>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h3 className="text-2xl font-semibold mb-2 text-[#00ffff]">Descripción del Curso</h3>
							<p className="text-muted-foreground text-white">{description}</p>
						</div>
						<div>
							<h3 className="text-2xl font-semibold mb-2 text-[#00ffff]">Lo que obtienes</h3>
							<ul className="list-disc list-inside text-muted-foreground text-white">
								<li>Acceso completo al curso</li>
								<li>1 Sprint Gratis en el Espacio de Trabajo UPEX Galaxy</li>
								<li>Experiencia laboral práctica en un entorno realista</li>
								<li>Participación en ceremonias SCRUM</li>
								<li>Simulacros de entrevistas y pruebas técnicas</li>
							</ul>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col sm:flex-row justify-start space-y-2 sm:space-y-0 sm:space-x-4">
						{commingSoon ? (
							<Badge variant="outline" className="w-full text-xl text-center justify-center bg-[#ff0000]">
								{commingSoon}
							</Badge>
						) : (
							<>
								<Button asChild className="w-full sm:w-auto font-bold bg-gradient-to-r from-[#9d00f8] to-[#ff00ff] hover:from-[#cc00cc] hover:to-[#ff86e1] text-white rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
									<Link href={subscribeLink} target="_blank" rel="noopener noreferrer">
										Suscribirse al Curso
									</Link>
								</Button>
								<Button variant="outline" asChild className="w-full sm:w-auto text-white bg-transparent border-2 border-[#ffffff50] hover:text-white  rounded-full hover:bg-[#ffffff20] transform hover:scale-105 transition-all duration-300">
									<Link href={strategyLink} target="_blank" rel="noopener noreferrer">
										Ver Estrategia del Curso
									</Link>
								</Button>
							</>
						)}
					</CardFooter>
				</div>
			</div>
		</Card>
	);
}
