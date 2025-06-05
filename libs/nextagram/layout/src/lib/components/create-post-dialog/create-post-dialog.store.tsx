'use client';

import { createStoreContext } from '@nextagram/nextagram-shared-utils-context';

import type { ReactNode } from 'react';

interface CreatePostDialogState {
	files: File[];
	setFiles: (files: File[]) => void;
	removeFile: (index: number) => void;
}

const [
	useCreateStore,
	CreatePostDialogStoreContextProvider,
	useCreatePostDialogStore,
] = createStoreContext<CreatePostDialogState>(({ set }) => ({
	files: [],
	setFiles: files => set({ files }),
	removeFile: index => {
		set(state => ({
			files: state.files.filter((_, i) => i !== index),
		}));
	},
}));

type CreatePostDialogStoreProviderProps = Readonly<{
	children: ReactNode;
}>;

const CreatePostDialogStoreProvider = ({
	children,
}: CreatePostDialogStoreProviderProps) => {
	const store = useCreateStore();

	return (
		<CreatePostDialogStoreContextProvider value={store}>
			{children}
		</CreatePostDialogStoreContextProvider>
	);
};

export { CreatePostDialogStoreProvider, useCreatePostDialogStore };
