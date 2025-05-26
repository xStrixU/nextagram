/** @type {import('lint-staged').Configuration} */
export default {
	'*': 'nx format:write --files',
	'{apps,libs}/**/*.{ts,tsx}': 'nx affected --target=typecheck --files',
	'{apps,libs}/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,tsx}':
		'nx affected:lint --fix --files',
};
