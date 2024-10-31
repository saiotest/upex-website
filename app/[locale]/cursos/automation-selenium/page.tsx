import Footer from '@/components/footer';
import Header from '@/components/header';
import CourseDetailComponent from '@/components/courseDetailPage';

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow flex items-center justify-center mb-20 mt-24">
				<section className="max-w-6xl mx-auto space-y-6">
					<CourseDetailComponent title="Selenium: Web Test Automation (E2E)" image="/cursos/selenium_card.png" description="Adéntrate en el mundo de la automatización de pruebas con Selenium, el estándar de la industria para testing web. En este curso, aprenderás a utilizar Java y Python para desarrollar pruebas automatizadas End-to-End (E2E) robustas, capaces de interactuar con una amplia variedad de navegadores y plataformas." subscribeLink="#" strategyLink="https://upex.docu.upexgalaxy.com/wiki/external/MDNlNDA5NDA5Mjk1NDRjNGE3MjdlOTNkYTAyMTQ2ODg" commingSoon="CURSO EN MANTENIMIENTO" />
				</section>
			</main>
			<Footer />
		</div>
	);
}
