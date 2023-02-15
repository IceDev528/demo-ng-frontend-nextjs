import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default function NGDocument() {
	return (
		<Html lang='en'>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Lato&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

NGDocument.getInitialProps = async (ctx: DocumentContext) => {
	const sheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
			});

		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>
			)
		};
	} finally {
		sheet.seal();
	}
};
