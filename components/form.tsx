'use client';

import { useEffect } from 'react';
import Header from './header';
import Footer from './footer';

export function Form() {
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
			<Header />
			<main className="flex-grow flex items-center justify-center p-4 mt-20">
				<div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-7xl" style={{ height: '80vh' }}>
					<zapier-interfaces-page-embed page-id="cm1hg8his000im75wez0ch5cq" no-background="true" style={{ width: '100%', height: '100%' }}></zapier-interfaces-page-embed>
				</div>
			</main>
			<Footer />
		</div>
	);
}
