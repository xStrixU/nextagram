import fs from 'node:fs/promises';

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

import { env } from '@nextagram/nextagram-shared-env';

const s3 = new S3Client({
	region: env.S3_REGION,
	credentials: {
		accessKeyId: env.S3_ACCESS_KEY,
		secretAccessKey: env.S3_ACCESS_SECRET,
	},
});

interface UploadFileParams {
	name: string;
	body: Buffer;
}

export const uploadFile = async ({ name, body }: UploadFileParams) => {
	const command = new PutObjectCommand({
		Bucket: env.S3_BUCKET_NAME,
		Key: name,
		Body: body,
	});

	await s3.send(command);
};

interface UploadLocalFileParams {
	path: string;
	name: string;
}

export const uploadLocalFile = async ({
	path,
	name,
}: UploadLocalFileParams) => {
	const body = await fs.readFile(path);

	await uploadFile({ name, body });
};
