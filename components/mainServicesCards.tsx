'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { Book, Castle, PersonStanding } from 'lucide-react';

export default function Main3ServicesCardsComponent() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
			<GlassCard reactIcon={Book} title="CURSOS" description="Aprende con Cursos Al Grano o Completos" buttonText="Ver Cursos" linkTo="/cursos" glowColor="from-cyan-300 to-blue-600" />
			<GlassCard reactIcon={Castle} title="EXPERIENCIA" description="Gana Experiencia Laboral con Asignaciones" buttonText="Ver Workspace" linkTo="/experiencia" glowColor="from-cyan-300 to-blue-600" />
			<GlassCard reactIcon={PersonStanding} title="TUTORÍAS" description="Ayudate con Tutores Personales 1:1" buttonText="Ver Tutores" linkTo="/tutores" glowColor="from-cyan-300 to-blue-600" />
		</div>
	);
}
