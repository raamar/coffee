import { writable } from 'svelte/store';
const paid_product = writable<number | undefined>();

export default paid_product;
