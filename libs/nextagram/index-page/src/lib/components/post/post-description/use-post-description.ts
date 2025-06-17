import { useSize } from 'ahooks';
import { useRef, useState } from 'react';

export const usePostDescription = () => {
	const ref = useRef<HTMLParagraphElement>(null);
	const [isExpanded, setIsExpanded] = useState(false);
	const { height = 0 } = useSize(ref) ?? {};

	const handleContentExpand = () => {
		setIsExpanded(true);
	};

	return { ref, isExpanded, height, handleContentExpand };
};
