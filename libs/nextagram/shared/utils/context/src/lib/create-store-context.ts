import { createContext, useContext, useRef } from 'react';
import { createStore, useStore } from 'zustand';

import type { StateCreator, StoreApi, StoreMutatorIdentifier } from 'zustand';

type StateFactory<
	TState,
	Mos extends [StoreMutatorIdentifier, unknown][] = [],
> = (input: {
	initialProps: Partial<TState>;
	set: Parameters<StateCreator<TState, [], Mos>>[0];
	get: Parameters<StateCreator<TState, [], Mos>>[1];
	store: Parameters<StateCreator<TState, [], Mos>>[2];
}) => TState;

export const createStoreContext = <TState>(
	createState: StateFactory<TState>,
) => {
	const context = createContext<StoreApi<TState> | undefined>(undefined);

	const useCreateStore = (initialProps: Partial<TState> = {}) => {
		const storeRef = useRef<StoreApi<TState>>(null);

		if (!storeRef.current) {
			storeRef.current = createStore<TState>()((set, get, store) =>
				createState({ initialProps, set, get, store }),
			);
		}

		return storeRef.current;
	};

	const useStoreContext = <T>(selector: (state: TState) => T) => {
		const store = useContext(context);

		if (!store) {
			throw new Error('Store useContext must be use inside Provider!');
		}

		return useStore(store, selector);
	};

	return [useCreateStore, context, useStoreContext] as const;
};
