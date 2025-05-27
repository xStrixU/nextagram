type AuthBoxTitleProps = Readonly<{
	content: string;
}>;

export const AuthBoxTitle = ({ content }: AuthBoxTitleProps) => (
	<h1 className="text-center text-2xl font-bold sm:text-left">{content}</h1>
);
