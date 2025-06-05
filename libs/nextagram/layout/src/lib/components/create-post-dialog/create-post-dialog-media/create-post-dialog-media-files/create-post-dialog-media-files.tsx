import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@nextagram/nextagram-shared-ui';

import { useCreatePostDialogStore } from '../../create-post-dialog.store';
import { CreatePostDialogMediaFilesItem } from './create-post-dialog-media-files-item/create-post-dialog-media-files-item';

export const CreatePostDialogMediaFiles = () => {
	const files = useCreatePostDialogStore(state => state.files);

	return (
		<Carousel>
			<CarouselContent>
				{files.map((file, i) => (
					<CarouselItem key={i} className="basis-auto">
						<CreatePostDialogMediaFilesItem index={i} file={file} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="-left-4" />
			<CarouselNext className="-right-4" />
		</Carousel>
	);
};
