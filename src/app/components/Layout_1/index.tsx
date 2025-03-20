import { ReactNode } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";

interface LayoutProps {
	children: ReactNode;
}

const Layout_1 = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
export default Layout_1;