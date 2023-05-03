import '../styles/globals.css';
import { useEffect } from "react";
import TagManager from 'react-gtm-module';
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		TagManager.initialize({ gtmId: 'GTM-MXJM8H2' });
	}, []);
	
	return (
		<NextUIProvider> 
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
