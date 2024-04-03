import { writable } from 'svelte/store';

const product_item = writable<(Item & { index: number }) | undefined>();

export default product_item;
