'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
	name: string;
	role: string;
	avatar: string;
	quote: string;
}

const testimonials: Testimonial[] = [
	{
		name: 'Carlos Gauto (CharlyAutomatiza)',
		role: 'Project Leader @ Mercado Libre',
		avatar: '/testimonios/charlyAutomatiza.jpeg',
		quote: 'El impacto positivo de UPEX en la comunidad es destacable, han logrado ayudar y acompañar en el aprendizaje a muchas personas. Tanto si estás dando tus primeros pasos en IT, si estás buscando re-convertir tu carrera o incluso si contás con experiencia pero buscás un salto de calidad, UPEX será el lugar que te permitirá exprimir tu potencial y llegar al siguiente nivel.'
	},
	{
		name: 'John Osorio (JohnPerformance)',
		role: 'Performance Test Manager',
		avatar: '/testimonios/performance360.jpeg',
		quote: 'Being part of this testing community is a truly transformative experience. You will find surrounded by professionals who not only shared their knowledge but also provide the chance to practice and work with trending tools that are essential in today’s market. Here, theory comes to life: in every real-world project.'
	}
	// Add more testimonials here...
];

export default function AnimatedTestimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
		}, 4000); // Change testimonial every 4 seconds

		return () => clearInterval(timer);
	}, []);

	const currentTestimonial = testimonials[currentIndex];
	const nextIndex = (currentIndex + 1) % testimonials.length;
	const nextTestimonial = testimonials[nextIndex];

	return (
		<AnimatePresence>
			<div className="relative w-full h-full">
				<div className="absolute flex flex-col items-center lg:items-stretch gap-12 lg:gap-16" style={{ opacity: 0.2, filter: 'blur(5px)', transform: 'translate(-50px, -50px)' }}>
					<motion.div key={`avatar-${nextIndex}`} animate={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: +50, x: +50 }} transition={{ duration: 0.5 }}>
						<div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
							<div className="flex flex-col items-center">
								<Avatar className="h-60 w-60 mb-5 border-4 border-[#00ffff] shadow-lg shadow-[#00ffff]/20">
									<AvatarImage src={nextTestimonial.avatar} alt={nextTestimonial.name} />
									<AvatarFallback>
										{nextTestimonial.name
											.split(' ')
											.map(n => n[0])
											.join('')}
									</AvatarFallback>
								</Avatar>
								<div className="text-center">
									<div className="text-2xl font-bold text-[#00ffff] mb-1">{nextTestimonial.name}</div>
									<div className="text-lg text-[#afd2ff]">{nextTestimonial.role}</div>
								</div>
							</div>

							<div className="flex relative bg-[#1E0B4A]/30 rounded-lg p-8 lg:p-10 backdrop-blur-sm border border-[#00ffff]/20 shadow-lg shadow-[#00ffff]/10">
								<svg className="absolute top-0 left-0 w-16 h-16 text-[#00FFFF] transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
									<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
								</svg>
								<div className="h-full flex items-center">
									<blockquote key={`quote-${nextIndex}`} className="relative">
										<p className="text-xl lg:text-2xl xl:text-1xl font-medium text-white leading-relaxed italic">
											<span>{nextTestimonial.quote}</span>
										</p>
									</blockquote>
								</div>
								<div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-[#00ffff] to-[#0A3A7E] opacity-20 rounded-full blur-xl" />
							</div>
						</div>
					</motion.div>
				</div>
				<div className="z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
					<motion.div key={`avatar-${currentIndex}`} initial={{ opacity: 0, y: -50, x: -50, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }} exit={{ opacity: 1, y: -700 }} transition={{ duration: 0.5 }}>
						<div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
							<div className="flex flex-col items-center">
								<Avatar className="h-60 w-60 mb-5 border-4 border-[#00ffff] shadow-lg shadow-[#00ffff]/20">
									<AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
									<AvatarFallback>
										{currentTestimonial.name
											.split(' ')
											.map(n => n[0])
											.join('')}
									</AvatarFallback>
								</Avatar>
								<div className="text-center">
									<div className="text-2xl font-bold text-[#00ffff] mb-1">{currentTestimonial.name}</div>
									<div className="text-lg text-[#afd2ff]">{currentTestimonial.role}</div>
								</div>
							</div>

							<div className="flex relative bg-[#1E0B4A]/30 rounded-lg p-8 lg:p-10 backdrop-blur-sm border border-[#00ffff]/20 shadow-lg shadow-[#00ffff]/10">
								<svg className="absolute top-0 left-0 w-16 h-16 text-[#00FFFF] transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
									<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
								</svg>
								<div className="h-full flex items-center">
									<blockquote key={`quote-${currentIndex}`} className="relative">
										<p className="text-xl lg:text-2xl xl:text-1xl font-medium text-white leading-relaxed italic">
											<span>{currentTestimonial.quote}</span>
										</p>
									</blockquote>
								</div>
								<div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-[#00ffff] to-[#0A3A7E] opacity-20 rounded-full blur-xl" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</AnimatePresence>
	);
}
