import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslations } from 'next-intl';

export default function Quotes() {
	const quote = useTranslations('quote');
	return (
		<div className="z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
			<div className="flex flex-col items-center">
				<Avatar className="h-60 w-60 mb-5 border-4 border-[#00ffff] shadow-lg shadow-[#00ffff]/20">
					<AvatarImage src="/saitest_profile.png" alt="Elyer Maldonado" />
					<AvatarFallback>EM</AvatarFallback>
				</Avatar>
				<div className="text-center">
					<div className="text-2xl font-bold text-[#00ffff] mb-1">Elyer Maldonado</div>
					<div className="text-lg text-[#afd2ff]">UPEX's CEO/Founder</div>
				</div>
			</div>
			<div className="flex-1 relative bg-[#1E0B4A]/30 rounded-lg p-8 lg:p-10 backdrop-blur-sm border border-[#00ffff]/20 shadow-lg shadow-[#00ffff]/10">
				<svg className="absolute top-0 left-0 w-16 h-16 text-[#00FFFF] transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
					<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
				</svg>
				<div className="h-full flex items-center">
					<blockquote className="relative">
						<p className="text-xl lg:text-2xl xl:text-1xl font-medium text-white leading-relaxed italic">
							<span>{quote('p1')}</span>
							<br />
							<span>{quote('p2')}</span>
						</p>
					</blockquote>
				</div>
				<div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-[#00ffff] to-[#0A3A7E] opacity-20 rounded-full blur-xl" />
			</div>
		</div>
	);
}
