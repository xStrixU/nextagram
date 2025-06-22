import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import nx from '@nx/eslint-plugin';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gitignorePath = path.resolve(__dirname, '.gitignore');

export default tseslint.config(
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	eslintPluginUnicorn.configs.recommended,
	...pluginQuery.configs['flat/recommended'],
	includeIgnoreFile(gitignorePath),
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					allow: [String.raw`^.*/eslint(\.base)?\.config\.[cm]?js$`],
					depConstraints: [
						{
							sourceTag: 'scope:nextagram',
							onlyDependOnLibsWithTags: ['scope:nextagram'],
						},
						{
							sourceTag: 'scope:nextagram-auth',
							onlyDependOnLibsWithTags: [
								'scope:nextagram',
								'scope:nextagram-auth',
							],
						},
						{
							sourceTag: 'type:app',
							onlyDependOnLibsWithTags: ['type:feature', 'type:shared'],
						},
						{
							sourceTag: 'type:feature',
							onlyDependOnLibsWithTags: ['type:shared'],
						},
						{
							sourceTag: 'type:shared',
							onlyDependOnLibsWithTags: ['type:shared'],
						},
					],
				},
			],
		},
	},
	{
		files: [
			'**/*.ts',
			'**/*.tsx',
			'**/*.cts',
			'**/*.mts',
			'**/*.js',
			'**/*.jsx',
			'**/*.cjs',
			'**/*.mjs',
		],
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',
			'require-await': 'error',
			'unicorn/catch-error-name': 'off',
			'unicorn/no-array-callback-reference': 'off',
			'unicorn/no-array-for-each': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-await-expression-member': 'off',
			'unicorn/no-null': 'off',
			'unicorn/prefer-export-from': 'off',
			'unicorn/prefer-module': 'off',
			'unicorn/prevent-abbreviations': 'off',
		},
	},
);
