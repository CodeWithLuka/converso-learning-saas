"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const query = searchParams.get("topic") || "";

	const [searchQuery, setSearchQuery] = useState<string>("");

	return (
		<div className="relative border border-black rounded-lg flex gap-2 px-2 py-1 h-fit">
			<Image
				src="/icons/search.svg"
				alt="Search"
				height={15}
				width={15}
			/>
			<input
				placeholder="Search Companions. . ."
				className="outline-none"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</div>
	);
};
