/** @type {import("prettier").Config} */
export default {
	singleQuote: true,
	useTabs: true,
	arrowParens: 'avoid',
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
	importOrder: [
		'^node:',
		'<THIRD_PARTY_MODULES>',
		'^@nextagram',
		'^@/',
		'^[./]',
		'<THIRD_PARTY_TS_TYPES>',
		'<TS_TYPES>^@nextagram/',
		'<TS_TYPES>^@/',
		'<TS_TYPES>^[./]',
	],
	importOrderSeparation: true,
	importOrderSideEffects: false,
	importOrderSortSpecifiers: true,
};
