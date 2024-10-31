import Footer from '@/components/footer';
import Header from '@/components/header';
import CourseDetailComponent from '@/components/courseDetailPage';

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow flex items-center justify-center mb-20 mt-24">
				<section className="max-w-6xl mx-auto space-y-6">
					<CourseDetailComponent title="Playwright: Web Test Automation (E2E)" image="/cursos/playwright_card.png" description="Descubre Playwright, el framework de automatización web de última generación desarrollado por Microsoft. Este curso te guiará en la creación de pruebas End-to-End (E2E) utilizando TypeScript y Python, permitiéndote interactuar con aplicaciones web de manera rápida y confiable en múltiples navegadores y plataformas." subscribeLink="https://upexgalaxy.zapier.app/subscribe-courses?course=⚡%EF%B8%8F+Playwright%3A+Web+Test+Automation+%28E2E%29" strategyLink="https://upex.docu.upexgalaxy.com/wiki/external/MDNlNDA5NDA5Mjk1NDRjNGE3MjdlOTNkYTAyMTQ2ODg" />
				</section>
			</main>
			<Footer />
		</div>
	);
}
