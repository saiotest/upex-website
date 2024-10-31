import Footer from '@/components/footer';
import Header from '@/components/header';
import CourseDetailComponent from '@/components/courseDetailPage';

export default function Page() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<main className="relative flex-grow flex items-center justify-center mb-20 mt-24">
				<section className="max-w-6xl mx-auto space-y-6">
					<CourseDetailComponent title="SQL: Data Testing (Database)" image="/cursos/SQL_card.png" description="Adquiere conocimientos en pruebas de bases de datos, comprendiendo el funcionamiento de sistemas de gestión de bases de datos y el lenguaje SQL. Aprende a diseñar y ejecutar pruebas que validen la integridad de los datos, la eficiencia de las consultas y el correcto funcionamiento de las transacciones en bases de datos como MySQL, asegurando que los datos se manejen correctamente en tu aplicación." subscribeLink="https://upexgalaxy.zapier.app/subscribe-courses?course=📊+SQL%3A+Database+Testing+%28MySQL%29" strategyLink="https://upex.docu.upexgalaxy.com/wiki/external/Y2NkN2FhMzdjNDI4NGQ5ZGJmZDU4YmNhMTY2YmQ1YTE" />
				</section>
			</main>
			<Footer />
		</div>
	);
}
