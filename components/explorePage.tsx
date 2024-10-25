'use client';

import React from 'react';
import './styles/explorepage.css';
import Main3ServicesCardsComponent from './mainServicesCards';
import Header from './header';
import Footer from './footer';
import WhatsAppButton from './whatsapp-button';

export function ExplorePageComponent() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white">
			<video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
				<source src="/galaxy-background.webm" type="video/webm" />
				Your browser does not support the video tag.
			</video>
			<Header hidden />
			<main className="relative z-10">
				<style>
					{`
						@keyframes glow {
						from {
							text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #8A2BE2, 0 0 20px #8A2BE2, 0 0 35px #8A2BE2, 0 0 40px #8A2BE2, 0 0 50px #8A2BE2;
						}
						to {
							text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #8A2BE2, 0 0 40px #8A2BE2, 0 0 50px #8A2BE2, 0 0 60px #8A2BE2, 0 0 70px #8A2BE2;
						}
						}
						.button:hover {
							background: linear-gradient(45deg, rgba(65, 105, 225, 0.7), rgba(128, 0, 128, 0.7)) !important;
							box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
							transform: scale(1.05);
						}
					`}
				</style>
				<section className="min-h-screen flex items-center justify-center py-20 px-4">
					<div className="text-center max-w-5xl mx-auto">
						<h1 className="title" style={{ animation: 'glow 2s ease-in-out infinite alternate' }}>
							¿Qué Necesitas?
						</h1>
						<Main3ServicesCardsComponent />
					</div>
				</section>
				<WhatsAppButton />
			</main>
			<Footer hidden />
		</div>
	);
}
