import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: '../fonts/CascadiaCode.woff2',
	variable: '--font-geist-sans',
	weight: '100 900'
});
const codeFont = localFont({
	src: '../fonts/CascadiaCodeItalic.woff2',
	variable: '--font-geist-mono',
	weight: '100 900'
});

export const metadata: Metadata = {
	title: 'UPEX - El Espacio de Trabajo Perfecto para Software Testing (QA)',
	description: 'Descubre UPEX, la plataforma integral para el aprendizaje y práctica de Testers QA (Manuales y Automatización de Pruebas) en un entorno real y simulado. Accede a Cursos, Experiencia laboral práctica y Tutoría personalizada para convertirte en el tester que buscan las empresas. Únete a miles de testers ya capacitados en UPEX.'
};

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const messages = await getMessages();
	return (
		<NextIntlClientProvider messages={messages}>
			<html lang="en">
				<body className={`${geistSans.variable} ${codeFont.variable} antialiased`}>{children}</body>
			</html>
		</NextIntlClientProvider>
	);
}
