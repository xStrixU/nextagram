import { format } from 'date-fns';

export const getExpiresQueryParam = (date: Date) =>
	format(date, "yyyyMMdd'T'HHmmss'Z'");
