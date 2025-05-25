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
		<main>
			<article className="flex rounded-border justify-between p-6 max-md:flex-col">
				<div className="flex items-center gap-2">
					<div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"></div>
				</div>
			</article>
		</main>
	);
};

export default CompanionsSessionIdPage;
