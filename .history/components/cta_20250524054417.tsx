import Image from "next/image";

export const CTA = () => {
	return (
		<section className="cta-section">
			<div className="cta-badge">Start Learning Your Way</div>
			<h2 className="text-3xl font-bold">
				Build A Personalized Learning Companion
			</h2>
			<p>
				Pick a name, subject, voice & personality - and start learning
				through voice conversations that feel natural and fun.
			</p>
			<Image src="images/cta.svg" alt="CTA" height={232} width={362} />
		</section>
	);
};
