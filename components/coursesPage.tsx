'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import { Link } from '@/i18n.config';
import { Badge } from '@/components/ui/badge';

const courses = [
	{ id: 1, title: 'testing-qa-stlc', image: '/cursos/qa_testing_card.png', price: '$50 USD' },
	{ id: 2, title: 'db-testing-sql', image: '/cursos/SQL_card.png', price: '$50 USD' },
	{ id: 3, title: 'api-testing-postman', image: '/cursos/postman_card.png', price: '$50 USD' },
	{ id: 4, title: 'automation-cypress', image: '/cursos/cypress_card.png', price: '$50 USD' },
	{ id: 5, title: 'automation-playwright', image: '/cursos/playwright_card.png', price: '$50 USD' },
	{ id: 6, title: 'automation-selenium', image: '/cursos/selenium_card.png', price: '$50 USD' },
	{ id: 7, title: 'performance-k6', image: '/cursos/k6_card.png', price: '$50 USD' }
	// { id: 8, title: 'comming-soon', image: '', price: '$50 USD' }
];

export function CoursesPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow">
				<section>
					<div className="max-w-6xl mx-auto text-center space-y-6 mt-20 flex flex-col items-center">
						<h1 className="p-2 text-4xl md:text-5xl lg:text-7xl font-bold mb-1 mt-12 bg-clip-text text-transparent bg-gradient-to-r from-[#eaff00] via-[#01fff2] to-[#ff79eb]">Elige el Curso que Deseas</h1>
						<Link href="https://upex.docu.upexgalaxy.com/wiki/external/MzQ3M2I0ODcwYzgxNDI1MGE5NzUzYTNjZTk0NDQ1NDM" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
							<Badge variant="outline" className="text-xl justify-center bg-[#7611d4] hover:bg-[#059315] hover:text-white">
								Políticas sobre los CURSOS BLACKHOLE de UPEX GALAXY
							</Badge>
						</Link>
					</div>
					<div className="max-w-7xl mx-auto space-y-12 p-6 md:p-12">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{courses.map(course => (
								<CourseCard key={course.id} {...course} />
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
interface CourseCardProps {
	title: string;
	image: string;
	price: string;
}

function CourseCard({ title, image, price }: CourseCardProps) {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

	interface MouseEventWithCurrentTarget extends React.MouseEvent<HTMLDivElement> {
		currentTarget: HTMLDivElement;
	}

	const handleMouseMove = (e: MouseEventWithCurrentTarget) => {
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
		<motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} style={{ perspective: 1000 }}>
			<motion.div
				className="relative w-full pb-[145%] rounded-2xl overflow-hidden shadow-lg"
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					rotateX,
					rotateY,
					transition: 'all 0.1s ease'
				}}>
				<div className="absolute inset-0 flex flex-col justify-end p-4">
					<h2 className="text-xl font-bold text-white mb-2 sr-only">{title}</h2>
					<p className="text-[#00ffff] font-bold sr-only">{price}</p>
				</div>
				<div className="absolute inset-0">
					<Link href={`/cursos/${title}`}>
						<Image src={image} alt={title} title={title} layout="fill" objectFit="contain" className="absolute inset-0" />
					</Link>
				</div>
			</motion.div>
		</motion.div>
	);
}
