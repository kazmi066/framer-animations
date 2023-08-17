import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import Styles from './maskImageCursorAnimation.module.css';

export const MaskImageCursorAnimation = () => {
	const { x, y } = useMousePosition();
	const [isHovered, setIsHovered] = useState(false);
	const size = isHovered ? 400 : 40;

	return (
		<section className={Styles.container}>
			<motion.div
				className={Styles.mask}
				animate={{
					WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
					WebkitMaskSize: `${size}px`,
				}}
				transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}>
				<h1
					onMouseEnter={() => { setIsHovered(true); }}
					onMouseLeave={() => { setIsHovered(false); }}>
					People who have no hold over their process of thinking are likely to
					be ruined by liberty of thought. If thought is immature, liberty of
					thought becomes a method of converting men into animals.
				</h1>
			</motion.div>
			<div className={Styles.section}>
				<h1>
					Destiny is the prison and chain of the ignorant. Understand that
					destiny like the water of the Nile: Water before the faithful, blood
					before the unbeliever.
				</h1>
			</div>
		</section>
	)
}
