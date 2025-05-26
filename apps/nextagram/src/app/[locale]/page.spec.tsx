import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Page from './page';

describe('Page', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<Page params={Promise.resolve({ locale: 'en' })} />,
		);
		expect(baseElement).toBeTruthy();
	});
});
