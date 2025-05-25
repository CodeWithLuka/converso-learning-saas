interface CompanionsSessionIdPageProps {
	params: Promise<{
		id: string;
	}>;
}

const CompanionsSessionIdPage = ({ params }: CompanionsSessionIdPageProps) => {
	return (
		<div>
			<h1>CompanionsSessionIdPage</h1>
		</div>
	);
};

export default CompanionsSessionIdPage;
