'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { Book, Castle, PersonStanding, Rocket } from 'lucide-react';

export default function Main3ServicesCardsComponent() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
			<GlassCard reactIcon={Book} title="CURSOS" description="De UPEX BLACKHOLE:\n CURSOS PROFESIONALES DE TESTING DE INSERCIÓN LABORAL, Cursos Al Grano o Cursos Completos, con Certificación, y con Espacio de Trabajo Incluído!" buttonText="Ver Cursos" linkTo="/cursos" glowColor="from-cyan-300 to-blue-600" />
			<GlassCard reactIcon={Castle} title="EXPERIENCIA" description="De UPEX GALAXY:\n ESPACIO DE TRABAJO REALISTA DE INSERCIÓN LABORAL, Acceso 24/7 por Sprint Suscrito, para Ganar Experiencia Laboral con Asignaciones de Proyectos Open-Source!" buttonText="Ver Workspace" linkTo="/experiencia" glowColor="from-cyan-300 to-blue-600" />
			<GlassCard reactIcon={PersonStanding} title="TUTORÍAS" description="De UPEX SENPAI:\n TUTORÍAS PRIVADA 1:1 DE INSERCIÓN LABORAL, Asesorías con Profesionales Graduados en UPEX Galaxy, capacitados para GUIARTE en UPEX Galaxy o Asesorarte en tu Propio Trabajo!" buttonText="Ver Tutores" linkTo="https://upex.docu.upexgalaxy.com/wiki/external/MTZlNGRhYWFlNzI0NDVjZGE3ZDc5ZWY2OTkwNGI5YWE" glowColor="from-cyan-300 to-blue-600" />
			<GlassCard reactIcon={Rocket} title="PLAN COMETA" description="¡TODO EN UNO!\n ARMA TU PROPIO PLAN PERSONALIZADO! Combina Cursos, Experiencias y Tutorías para sacar el Máximo Provecho a la Galaxia del Testing. Tienes DESCUENTOS aquí!" buttonText="Personalizar" linkTo="https://upex.docu.upexgalaxy.com/wiki/external/YTBmNTdmNGI1YzRlNDc2OTg3NWVmMjU4NjJkYmQ3NzI" glowColor="from-cyan-300 to-blue-600" />
		</div>
	);
}
