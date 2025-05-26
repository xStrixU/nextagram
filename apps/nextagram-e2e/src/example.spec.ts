import { expect, test } from '@playwright/test';

import messages from '@nextagram/nextagram-shared-i18n/messages/en.json';

test('has title', async ({ page }) => {
	await page.goto('/en');

	expect(await page.locator('h1').textContent()).toContain(
		messages.IndexPage.title,
	);
});
