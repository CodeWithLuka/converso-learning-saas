import Image from "next/image";
import Link from "next/link";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { NavItems } from "./nav-items";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link href="/">
				<div className="flex items-center gap-2.5 cursor-pointer">
					<Image
						src="/images/logo.svg"
						alt="Logo"
						height={44}
						width={46}
					/>
				</div>
			</Link>
			<div className="flex items-center gap-8">
				<NavItems />
				<SignedOut>
					<SignInButton mode="modal">
						<button className="btn-signin">Sign In</button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
};
