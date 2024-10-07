'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';

export default function Header() {
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

	return (
		<header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-[#020B2D] shadow-lg' : 'bg-transparent'}`}>
			<div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
				<Link href="/" className="flex items-center">
					<Image src="/logo.png" alt="UPEX Logo" width={720} height={240} className="h-10 w-auto" />
					<span className="sr-only">UPEX</span>
				</Link>
				{/* <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2]">UPEX</div> */}
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
				<div className="flex items-center space-x-4">
					<Button onClick={handleLoginClick} variant="outline" className="hidden md:inline-flex bg-[#8A2BE2] text-white hover:bg-[#6A1B9A]">
						Login
					</Button>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Open menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#020B2D]">
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
								<Button onClick={handleLoginClick} className="mt-4 bg-[#8A2BE2] text-white hover:bg-[#6A1B9A]">
									Login
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
