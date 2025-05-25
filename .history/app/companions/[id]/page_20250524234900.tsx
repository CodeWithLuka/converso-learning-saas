import { redirect } from "next/navigation";

import { currentUser } from "@clerk/nextjs/server";

import { getCompanion } from "@/lib/actions/companions.actions";

interface CompanionsSessionIdPageProps {
	params: Promise<{
		id: string;
	}>;
}

const CompanionsSessionIdPage = async ({
	params,
}: CompanionsSessionIdPageProps) => {
	const { id } = await params;

	const companion = await getCompanion(id);

	const user = await currentUser();

	if (!user) {
		redirect("/sign-in");
	}

	if (!companion) {
		redirect("/companions");
	}

	return (
		<div>
			<h1>CompanionsSessionIdPage</h1>
		</div>
	);
};

export default CompanionsSessionIdPage;
