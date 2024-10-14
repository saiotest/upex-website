'use client';

import { useEffect } from 'react';
import Header from './header';
import Footer from './footer';

interface FormProps {
	pageId: string;
}

export function Form({ pageId }: FormProps) {
	useEffect(() => {
		// Cargar el script de Zapier
		const script = document.createElement('script');
		script.type = 'module';
		script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
		document.head.appendChild(script);

		// Limpiar el script cuando el componente se desmonte
		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header hidden />
			<main className="absolute top-0 left-0 w-full h-full">
				<zapier-interfaces-page-embed page-id={pageId} no-background="true" allow-query-params="true" style={{ width: '100%', height: '100%', overflow: 'auto' }}></zapier-interfaces-page-embed>
			</main>
			<Footer hidden />
		</div>
	);
}
