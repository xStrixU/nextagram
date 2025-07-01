import { PostAuthorAvatar } from './post-author-avatar';
import { PostAuthorTimestamp } from './post-author-timestamp';
import { PostAuthorUsername } from './post-author-username';

import type { UserDto } from '@nextagram/nextagram-shared-actions';

type PostAuthorProps = Readonly<{
	author: UserDto;
	postCreatedAt: Date;
}>;

export const PostAuthor = ({ author, postCreatedAt }: PostAuthorProps) => (
	<div className="flex items-center gap-1.5">
		<PostAuthorAvatar image={author.image} />
		<PostAuthorUsername username={author.username} />
		<PostAuthorTimestamp postCreatedAt={postCreatedAt} />
	</div>
);
