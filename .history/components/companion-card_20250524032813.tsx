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
	return <div>CompanionCard</div>;
};
