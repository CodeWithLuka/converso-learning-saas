import Image from "next/image";

interface CompanionCardProps {
	id: string;
	name: string;
	topic: string;
	subject: string;
	duration: number;
	color: string;
}

export const CompanionCard = ({
	id,
	name,
	topic,
	subject,
	duration,
	color,
}: CompanionCardProps) => {
	return (
		<article
			className="companion-card"
			style={{
				backgroundColor: color,
			}}
		>
			<div className="flex justify-between items-center">
				<div className="subject-badge">{subject}</div>
				<button className="companion-bookmark">
					<Image
						src="/icons/bookmark.svg"
						alt="Bookmark"
						height={15}
						width={12.5}
					/>
				</button>
			</div>
		</article>
	);
};
