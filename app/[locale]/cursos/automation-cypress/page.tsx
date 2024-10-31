import Footer from '@/components/footer';
import Header from '@/components/header';
import CourseDetailComponent from '@/components/courseDetailPage';

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow flex items-center justify-center mb-20 mt-24">
				<section className="max-w-6xl mx-auto space-y-6">
					<CourseDetailComponent title="Cypress: Web Test Automation (E2E)" image="/cursos/cypress_card.png" description="Sumérgete en el mundo de la automatización de pruebas web con Cypress, un framework moderno y potente diseñado para facilitar el testing de aplicaciones web. En este curso, aprenderás a utilizar JavaScript y TypeScript para escribir y ejecutar pruebas automatizadas End-to-End (E2E) eficientes y confiables." subscribeLink="https://upexgalaxy.zapier.app/subscribe-courses?course=⚡%EF%B8%8F+Cypress%3A+Web+Test+Automation+%28E2E%29" strategyLink="https://upex.docu.upexgalaxy.com/wiki/external/MDNlNDA5NDA5Mjk1NDRjNGE3MjdlOTNkYTAyMTQ2ODg" />
				</section>
			</main>
			<Footer />
		</div>
	);
}
