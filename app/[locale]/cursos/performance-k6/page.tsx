import Footer from '@/components/footer';
import Header from '@/components/header';
import CourseDetailComponent from '@/components/courseDetailPage';

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow flex items-center justify-center mb-20 mt-24">
				<section className="max-w-6xl mx-auto space-y-6">
					<CourseDetailComponent title="K6: Performance Testing" image="/cursos/k6_card.png" description="Aprende a realizar pruebas de rendimiento y carga utilizando k6, una moderna y potente herramienta de código abierto diseñada para simular cargas de trabajo realistas en aplicaciones web y APIs. Este curso te guiará a través de los conceptos esenciales de las pruebas de rendimiento, enseñándote a diseñar, ejecutar y analizar pruebas que evalúen la escalabilidad y estabilidad de tus aplicaciones bajo diversas condiciones de carga." subscribeLink="#" strategyLink="https://upex.docu.upexgalaxy.com/wiki/external/MDNlNDA5NDA5Mjk1NDRjNGE3MjdlOTNkYTAyMTQ2ODg" commingSoon="PRÓXIMAMENTE. SOLO EN UPEX." />
				</section>
			</main>
			<Footer />
		</div>
	);
}
