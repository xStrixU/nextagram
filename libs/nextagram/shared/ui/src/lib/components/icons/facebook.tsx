import type { ComponentProps } from 'react';

export const Facebook = (props: ComponentProps<'svg'>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<g clipPath="url(#clip0_23_295)">
			<path
				d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
				fill="#1977F3"
			/>
			<path
				d="M16.6711 15.4696L17.2026 12H13.8748V9.74884C13.8748 8.80045 14.3389 7.87399 15.8307 7.87399H17.3444V4.92082C17.3444 4.92082 15.9707 4.68626 14.6579 4.68626C11.9173 4.68626 10.1252 6.34678 10.1252 9.35564V12H7.07748V15.4696H10.1252V23.8549C10.736 23.9511 11.3621 24 12 24C12.6379 24 13.264 23.9494 13.8748 23.8549V15.4696H16.6711Z"
				fill="white"
			/>
		</g>
		<defs>
			<clipPath id="clip0_23_295">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
