'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/com-dialog';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import Footer from './footer';
import Header from './header';
import { testimonialsDB } from '@/lib/testimonials';

type Testimonial = {
	id: number;
	image: string;
};

const testimonials: Testimonial[] = testimonialsDB;

export default function TestimonialWall() {
	const [openDialog, setOpenDialog] = useState<number | null>(null);

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow">
				<section>
					<div className="max-w-6xl mx-auto text-center space-y-6 mt-20 flex flex-col items-center">
						<h1 className="p-2 text-4xl md:text-5xl lg:text-7xl font-bold mb-1 mt-12 bg-clip-text text-transparent bg-gradient-to-r from-[#eaff00] via-[#01fff2] to-[#ff79eb]">Personas que Consiguieron el Éxito con UPEX</h1>
					</div>
					<div className="mt-10 mb-20">
						<div className="flex flex-wrap justify-center gap-2">
							{testimonials.map(testimonial => (
								<Dialog key={testimonial.id} open={openDialog === testimonial.id} onOpenChange={open => setOpenDialog(open ? testimonial.id : null)}>
									<DialogTrigger asChild>
										<div className="w-full md:w-[calc(50%-1rem)] max-w-[600px] cursor-pointer">
											<div className="relative w-full aspect-[16/9]">
												<Image src={testimonial.image} alt="Testimonio de estudiante UPEX" fill className="rounded-lg object-contain" />
											</div>
										</div>
									</DialogTrigger>
									<DialogContent className="max-w-[95vw] h-[95vh] p-0 border-none">
										<Image src={testimonial.image} alt="Testimonio ampliado de estudiante UPEX" fill className="object-contain" quality={100} />
										<Button onClick={() => setOpenDialog(null)} className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors">
											<X size={50} />
										</Button>
									</DialogContent>
								</Dialog>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
