import {
	DeleteObjectCommand,
	PutObjectCommand,
	S3Client,
} from '@aws-sdk/client-s3';

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

interface UploadFileFromUrlParams {
	url: string;
	name: string;
}

export const uploadFileFromUrl = async ({
	url,
	name,
}: UploadFileFromUrlParams) => {
	const arrayBuffer = await fetch(url).then(res => res.arrayBuffer());

	await uploadFile({
		name,
		body: Buffer.from(arrayBuffer),
	});
};

interface DeleteFileParams {
	name: string;
}

export const deleteFile = async ({ name }: DeleteFileParams) => {
	const command = new DeleteObjectCommand({
		Bucket: env.S3_BUCKET_NAME,
		Key: name,
	});

	await s3.send(command);
};
