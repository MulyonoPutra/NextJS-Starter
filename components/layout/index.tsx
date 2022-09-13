import React, { ReactNode } from 'react';
import Header from '../header';
import Footer from './../footer/index';
import Head  from 'next/head';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = (props: LayoutProps) => {
	const { children, pageTitle } = props;
	return (
		<>
			<Head>
				<title>Next JS Basic | {pageTitle}</title>
				<meta name="description" content="NextJS basic" />
			</Head>
			<div>
				<Header />
				<div>{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
