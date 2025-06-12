import type { HookCallbacks, HookSafeActionFn } from 'next-safe-action/hooks';

export type InferHookCallbacks<T> =
	T extends HookSafeActionFn<infer ServerError, infer S, infer CVE, infer Data>
		? HookCallbacks<ServerError, S, CVE, Data>
		: never;
