import { CompanionCard } from "@/components/companion-card";
import { CompanionsList } from "@/components/companions-list";
import { CTA } from "@/components/cta";
import { recentSessions } from "@/constants";

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
					color="#ffda6e"
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
					color="#bde7ff"
				/>
			</section>
			<section className="home-section">
				<CompanionsList
					title="Recently Competed Sessions"
					companions={recentSessions}
					classNames="w-2/3 max-lg:w-full"
				/>
				<CTA />
			</section>
		</main>
	);
};

export default HomePage;
