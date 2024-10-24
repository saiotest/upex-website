import React from 'react';
import { YoutubeShort } from '@/components/ui/videoshort';

export default function DemoPage() {
	const embeddedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/YcZvkiGcRF4?si=ZhSupUReMfJc-T_y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] p-8">
			<h1 className="text-4xl font-bold text-center text-white mb-8">UPEX Galaxy: Shorts Destacados</h1>
			<div className="flex flex-wrap justify-center gap-8">
				<YoutubeShort videoSource="emQBjBFRTLg" title="Cómo entrar en UPEX Galaxy?" />
				<YoutubeShort videoSource="dQw4w9WgXcQ" title="Introducción a QA Testing" />
				<YoutubeShort videoSource="JGwWNGJdvx8" title="Experiencias en UPEX Galaxy" />
			</div>
		</div>
	);
}
