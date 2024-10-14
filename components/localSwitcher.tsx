'use client';

import { localeNames, locales, usePathname, useRouter, type Locale } from '@/i18n.config';
import { Globe, ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button-select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function LocaleSwitcher({ locale, isMobile }: { locale: Locale; isMobile: boolean }) {
	// `pathname` will contain the current
	// route without the locale e.g. `/about`...
	const pathname = usePathname();
	const router = useRouter();

	const changeLocale = (value: string) => {
		const newLocale = value as Locale;

		// ...if the user chose Español ("es"),
		// router.replace() will prefix the pathname
		// with this `newLocale`, effectively changing
		// languages by navigating to `/es/about`.
		router.replace(pathname, { locale: newLocale });
	};

	const onDesktop = (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center justify-center px-2 py-1 bg-[#1a1a4a] text-white border border-[#00ffff] rounded-md hover:bg-[#2a2a6a] hover:text-[#00ffff] transition-colors duration-200 cursor-pointer text-sm">
					<Globe className="mr-2 h-4 w-4 text-[#00ffff]" />
					{localeNames[locale].toUpperCase()}
					<ChevronDown className="ml-2 h-4 w-4 text-[#00ffff]" />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-[#1a1a4a] border-[#00ffff] text-sm">
				{locales.map(lang => (
					<DropdownMenuItem key={lang} onSelect={() => changeLocale(lang)} className="text-white hover:bg-[#2a2a6a] hover:text-[#00ffff] focus:bg-[#2a2a6a] focus:text-[#00ffff] transition-colors duration-200">
						{localeNames[lang]}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);

	const onMobile = (
		<>
			{locales.map(lang => (
				<div key={lang} onClick={() => changeLocale(lang)} className="py-2 px-4 text-white hover:bg-[#2a2a6a] hover:text-[#00ffff] transition-colors duration-200 cursor-pointer">
					{localeNames[lang]}
				</div>
			))}
		</>
	);
	return isMobile ? onMobile : onDesktop;
}
