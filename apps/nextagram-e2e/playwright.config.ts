import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env['BASE_URL'] ?? 'http://localhost:3000';

export default defineConfig({
	...nxE2EPreset(__filename, { testDir: './src' }),
	use: {
		baseURL,
		trace: 'on-first-retry',
	},
	webServer: {
		command: 'yarn nx run @nextagram/nextagram:start',
		url: 'http://localhost:3000',
		reuseExistingServer: true,
		cwd: workspaceRoot,
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] },
		},
	],
});
