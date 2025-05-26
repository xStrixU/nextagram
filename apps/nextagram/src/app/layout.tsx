import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/assets/styles/globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nextagram',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en" className={inter.variable}>
		<body className="antialiased">{children}</body>
	</html>
);

export default RootLayout;
