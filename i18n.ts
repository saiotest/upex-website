import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'es'];

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale)) {
		return notFound();
	}

	return {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		messages: (await import(`./messages/${locale}.json`)).default
	};
});
