import { Item } from '~/models';

export * from './composeTweet';
export * from './getURL';
export * from './paths';
export * from './sendRequest';
export * from './serializeItem';

export const itemEquals = (p: Item, q: Item): boolean => {
	return JSON.stringify(p) === JSON.stringify(q);
};
