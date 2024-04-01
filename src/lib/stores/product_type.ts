import type { product_types } from '$lib/config';
import { writable } from 'svelte/store';

const product_type = writable<keyof typeof product_types>('Кофе');

export default product_type;
