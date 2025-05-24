import { auth } from "@clerk/nextjs/server";

import { createSupabaseClient } from "../supabse";

export const createCompanion = async (formData: CreateCompanion) => {
	const { userId: author } = await auth();
	const supabase = createSupabaseClient();

	const { data, error } = await supabase
		.from("companions")
		.insert({ ...formData, author })
		.select();
};
