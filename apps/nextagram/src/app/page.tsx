import { Button, Input } from '@nextagram/nextagram-shared-ui';
import { cn } from '@nextagram/nextagram-shared-utils-styling';

const IndexPage = () => (
	<main className="flex h-screen flex-col items-center justify-center gap-6">
		<h1 className="text-4xl font-bold text-blue-500">Welcome in Nextagram!</h1>
		<Button>Lorem Ipsum</Button>
		<Input placeholder="Lorem ipsum" className="max-w-xl" />
		<p className={cn('text-red-300')}>Foo</p>
	</main>
);

export default IndexPage;
