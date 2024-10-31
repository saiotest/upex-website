import Footer from '@/components/footer';
import Header from '@/components/header';
import CourseDetailComponent from '@/components/courseDetailPage';

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow flex items-center justify-center mb-20 mt-24">
				<section className="max-w-6xl mx-auto space-y-6">
					<CourseDetailComponent title="Postman: API Testing (REST)" image="/cursos/postman_card.png" description="Aprende a realizar pruebas de APIs utilizando Postman, una de las herramientas más populares en la industria. Este curso te enseñará los fundamentos de las APIs RESTful, cómo diseñar y ejecutar pruebas de endpoints, validar respuestas y automatizar pruebas para asegurar la correcta comunicación y funcionalidad entre servicios en tu aplicación." subscribeLink="https://upexgalaxy.zapier.app/subscribe-courses?course=🚀+Postman%3A+API+Testing" strategyLink="https://upex.docu.upexgalaxy.com/wiki/external/NTc3M2JlYmE5MDU1NDJjOTlmMmRkNjRkOGNhYmE2NGE" />
				</section>
			</main>
			<Footer />
		</div>
	);
}
