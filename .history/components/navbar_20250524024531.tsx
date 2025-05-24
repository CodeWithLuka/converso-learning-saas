import Image from "next/image";
import Link from "next/link";

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
		</nav>
	);
};
