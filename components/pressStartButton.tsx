/* eslint-disable react/no-unknown-property */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PressStartButton() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div>
			<style jsx>{`
				@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
				.press-start-font {
					font-family: 'Press Start 2P', cursive;
				}
			`}</style>
			<motion.button
				className="relative px-8 py-4 text-1xl font-bold text-white bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#8A2BE2] rounded-full overflow-hidden"
				style={{
					boxShadow: isHovered ? '0 0 25px #00FFFF, 0 0 50px #00FFFF, 0 0 75px #00FFFF' : '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
					transition: 'box-shadow 0.3s ease-in-out'
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}>
				<span className="relative z-10 press-start-font">PRESS START</span>
				<motion.div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] via-[#8A2BE2] to-[#00FFFF]" initial={{ x: '100%' }} animate={isHovered ? { x: '0%' } : { x: '100%' }} transition={{ duration: 0.5 }} />
			</motion.button>
		</div>
	);
}
