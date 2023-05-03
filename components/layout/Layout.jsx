import Head from 'next/head';
import { Button } from '@nextui-org/react';
import Footer from './Footer';


const Layout = ({ children, title }) => {
	return (
		<>
			<Head>
				<title> {title || 'Capital Votes'}</title>
				<meta
					name="description"
					content="Create your contests and cast votes from anywhere around the world and from the comfort of your home with our state-of-the-art social media platform."
				/>
			</Head>

			
			{children}

			<Footer/>
		</>
	);
};

export default Layout;
