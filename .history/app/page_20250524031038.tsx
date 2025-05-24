import { CompanionCard } from "@/components/companion-card";

const HomePage = () => {
	return (
		<main>
			<h1 className="text-2xl underline">Popular Companions</h1>
			<section className="home-section">
				<CompanionCard />
			</section>
		</main>
	);
};

export default HomePage;
