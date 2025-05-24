import { CompanionCard } from "@/components/companion-card";
import { CompanionsList } from "@/components/companions-list";
import { CTA } from "@/components/cta";

const HomePage = () => {
	return (
		<main>
			<h1 className="text-2xl underline">Popular Companions</h1>
			<section className="home-section">
				<CompanionCard
					id="123"
					name="Neura the Brainy Explorer"
					topic="Neural Network of the Brain"
					subject="Science"
					duration={45}
					color="#bde7ff"
				/>
				<CompanionCard
					id="456"
					name="Countsy the Number Wizard"
					topic="Derivatives & Integrals"
					subject="Math"
					duration={30}
					color="#e5d0ff"
				/>
				<CompanionCard
					id="789"
					name="Verba the Vocabulary Builder"
					topic="English Literature"
					subject="Language"
					duration={30}
					color="#ffda6e"
				/>
			</section>
			<section className="home-section">
				<CompanionsList />
				<CTA />
			</section>
		</main>
	);
};

export default HomePage;
