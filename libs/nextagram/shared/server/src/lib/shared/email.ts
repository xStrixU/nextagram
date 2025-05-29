import { createTransport } from 'nodemailer';

import { env } from '@nextagram/nextagram-shared-env';

const transporter = createTransport({
	service: env.EMAIL_SERVICE,
	auth: {
		user: env.EMAIL_USERNAME,
		pass: env.EMAIL_PASSWORD,
	},
});

type SendEmailParams = Omit<Parameters<typeof transporter.sendMail>[0], 'from'>;

export const sendEmail = (params: SendEmailParams) =>
	transporter.sendMail({
		from: env.EMAIL_USERNAME,
		...params,
	});
