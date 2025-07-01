import Image from 'next/image';

import { useTranslations } from '@nextagram/nextagram-shared-i18n';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@nextagram/nextagram-shared-ui';

import type { PostDto } from '@nextagram/nextagram-shared-actions';

type PostFilesCarouselProps = Readonly<{
	post: PostDto;
}>;

export const PostFilesCarousel = ({ post }: PostFilesCarouselProps) => {
	const t = useTranslations('index-page.post');

	return (
		<Carousel>
			<CarouselContent>
				{post.files.map(file => (
					<CarouselItem key={file}>
						<div className="h-post-height relative">
							<Image
								src={file}
								alt={t('imageDescription', { username: post.author.username })}
								fill
								className="rounded-md bg-black object-contain"
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="left-2" />
			<CarouselNext className="right-2" />
		</Carousel>
	);
};
