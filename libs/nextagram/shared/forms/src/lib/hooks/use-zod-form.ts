import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { UseFormProps } from 'react-hook-form';
import type { TypeOf, ZodType } from 'zod';

export const useZodForm = <T extends ZodType>(
	schema: T,
	options: UseFormProps<TypeOf<T>> = {},
) => {
	const form = useForm<TypeOf<T>>({
		resolver: zodResolver(schema),
		...options,
	});

	return form;
};
