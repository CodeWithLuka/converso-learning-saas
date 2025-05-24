"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
	name: z.string().min(1, { message: "Companion Is Required" }),
	subject: z.string().min(1, { message: "Subject Is Required" }),
	topic: z.string().min(1, { message: "Topic Is Required" }),
	voice: z.string().min(1, { message: "Voice Is Required" }),
	style: z.string().min(1, { message: "Style Is Required" }),
	duration: z.coerce.number().min(1, { message: "Duration Is Required" }),
});

export const CompanionForm = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			subject: "",
			topic: "",
			voice: "",
			style: "",
			duration: 15,
		},
	});

	// 2. Define a submit handler.
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{/* Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Companion Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter the companion name"
									{...field}
									className="input"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Subject */}
				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subject</FormLabel>
							<FormControl>
								<Select>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Theme" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">
											Light
										</SelectItem>
										<SelectItem value="dark">
											Dark
										</SelectItem>
										<SelectItem value="system">
											System
										</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Topic */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Companion Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter the companion name"
									{...field}
									className="input"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Voice */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Companion Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter the companion name"
									{...field}
									className="input"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Style */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Companion Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter the companion name"
									{...field}
									className="input"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Duration */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Companion Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter the companion name"
									{...field}
									className="input"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};
