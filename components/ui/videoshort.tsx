import React from 'react';
import { cn } from '@/lib/utils';
import { Rocket } from 'lucide-react';

interface YoutubeShortProps {
	videoSource: string;
	width?: number;
	height?: number;
	className?: string;
	title?: string;
	desc?: string;
}

export function YoutubeShort({ videoSource, width = 315, height = 560, className, title, desc }: YoutubeShortProps) {
	const isFullIframe = videoSource.includes('<iframe');
	let videoId = '';
	let iframeSrc = '';

	if (isFullIframe) {
		const srcMatch = videoSource.match(/src="([^"]+)"/);
		iframeSrc = srcMatch ? srcMatch[1] : '';
		const idMatch = iframeSrc.match(/\/embed\/([^?]+)/);
		videoId = idMatch ? idMatch[1] : '';
	} else {
		videoId = videoSource;
		iframeSrc = `https://www.youtube.com/embed/${videoId}`;
	}

	return (
		<div className={cn('relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 p-[2px]', className)}>
			<div className="container z-10 bg-gradient-to-br from-[#1E0B4A] to-[#0A3A7E] rounded-3xl p-4 h-full">
				<div className="flex items-center mb-2">
					<Rocket className="w-6 h-6 text-blue-400 mr-2" />
					<h3 className="text-lg font-semibold text-white">{title}</h3>
				</div>
				<div className="relative aspect-[9/16] w-full mx-auto overflow-hidden rounded-lg shadow-lg">
					<div
						className="absolute inset-0 bg-cover bg-center animate-pulse"
						style={{
							backgroundImage: `url('https://img.youtube.com/vi/${videoId}/0.jpg')`,
							filter: 'blur(10px)',
							transform: 'scale(1.1)'
						}}
					/>
					{isFullIframe ? <div dangerouslySetInnerHTML={{ __html: videoSource.replace(/width="[^"]+"/, `width="${width}"`).replace(/height="[^"]+"/, `height="${height}"`) }} /> : <iframe width={width} height={height} src={iframeSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute top-0 left-0 w-full h-full" />}
				</div>
				{desc ? (
					<div className="mt-4 text-white text-sm">
						<p className="truncate">{desc}</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
