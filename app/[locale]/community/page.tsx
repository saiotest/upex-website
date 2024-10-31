import CommunitySocialMedia from '@/components/communitySection';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Page() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-[#020B2D] via-[#1E0B4A] to-[#0A3A7E] text-white flex flex-col">
			<Header />
			<section className="relative flex-grow">
				<CommunitySocialMedia />
			</section>
			<Footer />
		</main>
	);
}
