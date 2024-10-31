import Footer from '@/components/footer';
import Header from '@/components/header';
import CourseDetailComponent from '@/components/courseDetailPage';

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow flex items-center justify-center mb-20 mt-24">
				<section className="max-w-6xl mx-auto space-y-6">
					<CourseDetailComponent title="QA: Software Testing Life Cycle (STLC) (Jira-Xray)" image="/cursos/qa_testing_card.png" description="Aprende los fundamentos del Ciclo de Vida de las Pruebas de Software (STLC) y cómo aplicarlos en entornos ágiles utilizando herramientas como Jira y Xray. Este curso te guiará a través de todas las etapas del testing, desde la planificación hasta la ejecución y el reporte de pruebas End-to-End (E2E), asegurando la calidad del software desde la perspectiva del usuario final." subscribeLink="https://upexgalaxy.zapier.app/subscribe-courses?course=%F0%9F%A7%AA+QA%3A+Software+Testing+Life+Cycle+%28STLC%29+%28Jira-Xray%29" strategyLink="https://upex.docu.upexgalaxy.com/wiki/external/MGQyOWRjZmI1N2RiNGU0NjhiZmFhN2EzYTA1MGMyN2E" />
				</section>
			</main>
			<Footer />
		</div>
	);
}
