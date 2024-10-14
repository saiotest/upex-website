'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link, type Locale } from '@/i18n.config';
import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcher from './localSwitcher';

export default function Header({ hidden }: { hidden?: boolean }) {
	const locale = useLocale() as Locale;
	const header = useTranslations('header');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleLoginClick = () => {
		window.open('https://upexgalaxy47.atlassian.net/jira/', '_blank', 'noopener,noreferrer');
	};

	const Header = (
		<header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-[#020B2D] shadow-lg' : 'bg-transparent'}`}>
			<div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
				{/** LOGO */}
				<Link href="/" className="flex items-center">
					<Image src="/logo.png" alt="UPEX Logo" width={720} height={240} className="h-10 w-auto" />
					<span className="sr-only">UPEX</span>
				</Link>

				{/** NAVIGATION BAR */}
				<nav className="hidden md:block">
					<ul className="flex space-x-4 md:space-x-6">
						<li>
							<Link target="_blank" href="https://upexgalaxy47.atlassian.net/jira/software/c/projects/BOX/boards/24" className="hover:text-[#00FFFF]">
								{header('workspace')}
							</Link>
						</li>
						<li>
							<Link target="_blank" href="https://upex.docu.upexgalaxy.com/wiki/x/A4AFAQ" className="hover:text-[#00FFFF]">
								{header('courses')}
							</Link>
						</li>
						<li>
							<Link target="_blank" href="https://upex.docu.upexgalaxy.com/wiki/x/CACCAQ" className="hover:text-[#00FFFF]">
								{header('plans')}
							</Link>
						</li>
						<li>
							<Link target="_blank" href="https://wa.me/5491156633437" className="hover:text-[#00FFFF]">
								{header('assistance')}
							</Link>
						</li>
						<li>
							<Link target="_blank" href="https://upexqa.slack.com" className="hover:text-[#00FFFF]">
								{header('community')}
							</Link>
						</li>
					</ul>
				</nav>

				{/** SEARCH BAR, LOCAL-SWITCHER, LOGIN BUTTON AND MOBILE MENU */}
				<div className="flex items-center space-x-2">
					<div className="hidden md:block flex items-center space-x-2">
						{/** SEARCH BAR IN THE HEADER (COMMING SOON) */}
						{/* <div className="relative">
							<input type="search" placeholder="Buscar..." className="bg-[#1a1a4a] text-white rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#00ffff]" />
							<Button title="D" className="absolute right-3 top-1/2 transform -translate-y-1/2">
								<svg className="w-5 h-5 text-[#00ffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
								</svg>
							</Button>
						</div> */}
						<LocaleSwitcher locale={locale} isMobile={false} />
					</div>
					<Button onClick={handleLoginClick} variant="outline" className="hidden md:inline-flex bg-[#8A2BE2] text-white hover:bg-[#6A1B9A]">
						Login
					</Button>
					{/** ----- MOBILE MENU ----- */}
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Open menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#020B2D]">
							<SheetHeader>
								<SheetTitle className="text-[#00ffff]">Menu</SheetTitle>
							</SheetHeader>
							<nav className="flex flex-col space-y-4 mt-8">
								<Link href="https://upexgalaxy47.atlassian.net/jira/software/c/projects/BOX/boards/24" className="text-lg hover:text-[#00FFFF]">
									{header('workspace')}
								</Link>
								<Link href="https://upex.docu.upexgalaxy.com/wiki/x/A4AFAQ" className="text-lg hover:text-[#00FFFF]">
									{header('courses')}
								</Link>
								<Link href="https://upex.docu.upexgalaxy.com/wiki/x/CACCAQ" className="text-lg hover:text-[#00FFFF]">
									{header('plans')}
								</Link>
								<Link href="https://wa.me/5491156633437" className="text-lg hover:text-[#00FFFF]">
									{header('assistance')}
								</Link>
								<Link href="https://upexqa.slack.com" className="text-lg hover:text-[#00FFFF]">
									{header('community')}
								</Link>
							</nav>
							<div className="mt-4">
								<h3 className="text-[#00ffff] mb-2">Idioma</h3>
								<LocaleSwitcher locale={locale} isMobile={true} />
							</div>
							<Button onClick={handleLoginClick} className="mt-4 bg-[#8A2BE2] text-white hover:bg-[#6A1B9A]">
								Login
							</Button>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
	return hidden ? null : Header;
}
