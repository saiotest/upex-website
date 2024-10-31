import Image from 'next/image';

export default function WhatsAppButton() {
	return (
		<a href="https://wa.me/5491156633437" title="UPEX Admin Whatsapp" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-[#25d366] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300 z-50 glow-effect" aria-label="Chat on WhatsApp">
			{/** Add a Whatsapp svg from /icon-whatsapp.png */}
			<Image src="/icon-whatsapp.svg" alt="WhatsApp" title="UPEX Admin Whatsapp" width={32} height={32} />
		</a>
	);
}
