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
const geistMono = localFont({
	src: '../fonts/CascadiaCodeItalic.woff2',
	variable: '--font-geist-mono',
	weight: '100 900'
});

export const metadata: Metadata = {
	title: 'UPEX - The Perfect QA Workspace',
	description: 'UPEX is a revolutionary platform for QA testing'
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
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
			</html>
		</NextIntlClientProvider>
	);
}
