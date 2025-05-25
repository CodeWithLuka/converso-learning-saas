import { CompanionCard } from "@/components/companion-card";
import { getAllCompanions } from "@/lib/actions/companions.actions";

const CompanionsPage = async ({ searchParams }: SearchParams) => {
	const filters = await searchParams;

	const subject = filters.subject ? filters.subject : " ";

	const topic = filters.topic ? filters.topic : " ";

	const companions = await getAllCompanions({ subject, topic });

	return (
		<main>
			<section className="flex justify-between gap-4 max-sm:flex-col">
				<h1>Companion Library</h1>
				<div className="flex gap-4">Filters</div>
			</section>
			<section className="companions-grid">
				{companions.map((companion) => (
					<CompanionCard
						key={companion.id}
						id={companion.id}
						name={companion.name}
						topic={companion.topic}
						duration={companion.duration}
						subject={companion.subject}
						color={companion.color}
					/>
				))}
			</section>
		</main>
	);
};

export default CompanionsPage;
