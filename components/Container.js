import Head from 'next/head';
import Navigation from './Navigation';
import Index from '../pages';

const Container = (props) => (
	<div>
		<Head>
			<title>Next.js Project</title>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
			></link>
		</Head>
		<Navigation />
		<div className="container p-4">{props.children}</div>
	</div>
);

export default Container;
