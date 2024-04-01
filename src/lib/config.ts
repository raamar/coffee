import type_image_1 from '$lib/images/product_types/1.png';
import type_image_2 from '$lib/images/product_types/2.png';
import type_image_3 from '$lib/images/product_types/3.png';
import type_image_4 from '$lib/images/product_types/4.png';

import product_image_1 from '$lib/images/products/coffee/1-2.png';
import product_image_3 from '$lib/images/products/coffee/3.png';
import product_image_4 from '$lib/images/products/coffee/4.png';
import product_image_5 from '$lib/images/products/coffee/5.png';
import product_image_6 from '$lib/images/products/coffee/6.png';

const product_types = {
	Кофе: type_image_1,
	Чай: type_image_2,
	'Молочный коктейль': type_image_3,
	'Морсы и газ. напитки': type_image_4
} as const;

const default_sizes: Item_Size[] = [
	{ size: 's', title: '200 мл.', diff: 0 },
	{ size: 'm', title: '300 мл.', diff: 50 },
	{
		size: 'l',
		title: '400 мл.',
		diff: 100
	}
];

const default_items = [
	{
		title: 'Эспрессо',
		image: product_image_1,
		price: 79,
		sizes: default_sizes
	},
	{
		title: 'Эспрессо',
		image: product_image_1,
		price: 109,
		sizes: default_sizes,
		extra_text: '2x'
	},
	{
		title: 'Американо',
		image: product_image_3,
		price: 119,
		sizes: default_sizes
	},
	{
		title: 'Латте',
		image: product_image_4,
		price: 129,
		sizes: default_sizes
	},
	{
		title: 'Капучино',
		image: product_image_5,
		price: 129,
		sizes: default_sizes
	},
	{
		title: 'Макиато',
		image: product_image_6,
		price: 129,
		sizes: default_sizes
	}
];

const config = {
	Кофе: default_items,
	Чай: default_items,
	'Молочный коктейль': default_items,
	'Морсы и газ. напитки': default_items
} as const satisfies Record<keyof typeof product_types, Item[]>;

export default config;
export { product_types };
