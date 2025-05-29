import Vapi from "@vapi-ai/web";

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
// Check if token exists
console.log("VAPI TOKEN:", process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN);

if (!process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN) {
	throw new Error("Missing VAPI web token environment variable");
}
