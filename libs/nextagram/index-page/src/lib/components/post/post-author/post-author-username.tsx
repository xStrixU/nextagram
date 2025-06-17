type PostAuthorUsernameProps = Readonly<{
	username: string;
}>;

export const PostAuthorUsername = ({ username }: PostAuthorUsernameProps) => (
	<p className="text-sm font-semibold">{username}</p>
);
