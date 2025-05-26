import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import tseslint from 'typescript-eslint';

import baseConfig from '../../eslint.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});

export default tseslint.config(
	...fixupConfigRules(compat.extends('next')),
	...fixupConfigRules(compat.extends('next/core-web-vitals')),
	...baseConfig,
	...nx.configs['flat/react-typescript'],
);
