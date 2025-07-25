import { redirect } from "next/navigation";

import { currentUser } from "@clerk/nextjs/server";

import { getCompanion } from "@/lib/actions/companions.actions";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";

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
					<div
						className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
						style={{
							backgroundColor: getSubjectColor(companion.subject),
						}}
					>
						<Image
							src={`/icons/${companion.subject}.svg`}
							alt="Companion"
							height={35}
							width={35}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<p className="font-bold text-2xl">
								{companion.name}
							</p>
							<div className="subject-badge max-sm:hidden">
								{companion.subject}
							</div>
						</div>
						<p className="text-lg">{companion.topic}</p>
					</div>
				</div>
			</article>
		</main>
	);
};

export default CompanionsSessionIdPage;
