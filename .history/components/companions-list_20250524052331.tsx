import Image from "next/image";
import Link from "next/link";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";

interface CompanionsListProps {
	title: string;
	companions?: Companion[];
	classNames?: string;
}

export const CompanionsList = ({
	title,
	companions,
	classNames,
}: CompanionsListProps) => {
	return (
		<article className={cn("companion-list", classNames)}>
			<h2 className="font-bold text-3xl">Recent Sessions</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="text-lg w-2/3">Lessons</TableHead>
						<TableHead className="text-lg">Subject</TableHead>
						<TableHead className="text-lg text-right">
							Duration
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{companions?.map(
						({ id, subject, name, topic, suration }) => (
							<TableRow key={id}>
								<TableCell>
									<Link href={`/companions/${id}`}>
										<div className="flex items-center gap-2">
											<div
												className="size-[72px] flex items-center justify-center rounded-lg  max-md:hidden"
												style={{
													backgroundColor:
														getSubjectColor(
															subject,
														),
												}}
											>
												<Image
													src={`/icons/${subject}.svg`}
													alt={subject}
													height={35}
													width={35}
												/>
											</div>
											<div className="flex flex-col gap-2">
												<p className="font-bold text-2xl">
													{name}
												</p>
												<p className="text-lg">
													{topic}
												</p>
											</div>
										</div>
									</Link>
								</TableCell>
								<TableCell>
									<div className="subject-badge w-fit max-md:hidden">
										{subject}
									</div>
									<div
										className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
										style={{
											backgroundColor:
												getSubjectColor(subject),
										}}
									>
										<Image
											src={`/icons/${subject}.svg`}
											alt={subject}
											height={18}
											width={18}
										/>
									</div>
								</TableCell>
							</TableRow>
						),
					)}
				</TableBody>
			</Table>
		</article>
	);
};
