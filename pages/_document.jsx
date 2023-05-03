import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class CapitalVoteDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: <>{initialProps.styles}</>,
		};
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content="#EC2D35" />
					<link rel="icon" href="/cvlogo.ico" sizes="any"></link>
					<link rel="apple-touch-icon" href="/icon-512.png"></link>
					<link rel="manifest" href="/manifest.webmanifest"></link>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>

					{CssBaseline.flush()}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CapitalVoteDocument;
