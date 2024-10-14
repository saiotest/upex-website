import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
	en: 'English',
	es: 'Español'
};

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

export function useGotoLink() {
	const router = useRouter();

	return (endpoint: string) => {
		router.push(endpoint);
	};
}
