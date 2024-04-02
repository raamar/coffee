import { writable } from 'svelte/store';

const product_item = writable<Item | undefined>();

export default product_item;
