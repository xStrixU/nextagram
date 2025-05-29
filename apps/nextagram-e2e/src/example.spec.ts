import { expect, test } from '@playwright/test';

import messages from '@nextagram/nextagram-shared-i18n/messages/en.json';

test('has title', async ({ page }) => {
	await page.goto('/en/sign-in');

	expect(await page.locator('h1').textContent()).toContain(
		messages['auth']['sign-in-page']['auth-box']['title'],
	);
});
