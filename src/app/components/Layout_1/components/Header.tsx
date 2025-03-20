import Link from "next/link";

const Header = () => {
	return (
		<header className="bg-red-900 text-white p-4">
			<img src="/logo.png" alt="Logo" className="h-8 inline-block mr-4" />
			<Link href="/">Home</Link>
		</header>
	);
}
export default Header;