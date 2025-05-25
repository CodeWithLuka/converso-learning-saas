import { CompanionCard } from "@/components/companion-card";
import { getAllCompanions } from "@/lib/actions/companions.actions";
import { getSubjectColor } from "@/lib/utils";

type SearchParams = {
	searchParams: Promise<{
		subject?: string | string[];
		topic?: string | string[];
	}>;
};

const CompanionsPage = async ({ searchParams }: SearchParams) => {
	const params = await searchParams;

	// Narrow `subject`
	let subject: string | undefined;
	if (Array.isArray(params.subject)) {
		subject = params.subject[0]; // pick first if array
	} else {
		subject = params.subject; // string or undefined
	}

	// Narrow `topic`
	let topic: string | undefined;
	if (Array.isArray(params.topic)) {
		topic = params.topic[0];
	} else {
		topic = params.topic;
	}

	// Optionally default to empty string:
	// subject = subject ?? "";
	// topic   = topic   ?? "";

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
						{...companion}
						color={getSubjectColor(companion.subject)}
					/>
				))}
			</section>
		</main>
	);
};

export default CompanionsPage;
