import { CompanionCard } from "@/components/companion-card";
import { CompanionsList } from "@/components/companions-list";
import { CTA } from "@/components/cta";

const HomePage = () => {
	return (
		<main>
			<h1 className="text-2xl underline">Popular Companions</h1>
			<section className="home-section">
				<CompanionCard />
				<CompanionCard />
				<CompanionCard />
			</section>
			<section className="home-section">
				<CompanionsList />
				<CTA />
			</section>
		</main>
	);
};

export default HomePage;
