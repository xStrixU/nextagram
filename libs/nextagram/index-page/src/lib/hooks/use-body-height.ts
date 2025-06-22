import { useSize } from 'ahooks';

export const useBodyHeight = () => {
	const { height } = useSize(() => document.body) ?? {};

	return height ?? 0;
};
