<script lang="ts">
	import ProductCard from '$lib/components/Product_Card.svelte';
	import config from '$lib/config';
	import product_type from '$lib/stores/product_type';
	import { product_types } from '$lib/config';
	import { fly, scale } from 'svelte/transition';

	let prev_index: number = -1;
	let dir = false;

	const get_offset_by_dir = (dir: boolean) => (dir ? '100%' : '-100%');

	$: {
		const current = Object.keys(product_types).indexOf($product_type);

		dir = prev_index < current;
		prev_index = current;
	}
</script>

<section class="rounded-top">
	{#key $product_type}
		<div
			class="item"
			in:fly={{ x: get_offset_by_dir(dir) }}
			out:fly={{ x: get_offset_by_dir(!dir) }}
		>
			<p class="title">{$product_type}</p>

			<ul>
				{#each config[$product_type] as item, index (`${$product_type}_${index}`)}
					<div transition:scale|global={{ delay: index * 100 }}>
						<ProductCard {item} />
					</div>
				{/each}
			</ul>
		</div>
	{/key}
</section>

<style>
	section {
		background-color: #fff;
		padding: 120px 20px;
		margin-top: -80px;
		filter: drop-shadow(0px -10px 75px rgba(0, 0, 0, 0.09));
		z-index: 3;
		display: grid;
	}

	.item {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 2;
	}
	.title {
		font-size: 83px;
		line-height: 92px;
		position: relative;
		z-index: 1;
		margin: 0;
	}

	.title::before {
		content: '';
		width: 147px;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: var(--theme-bg);
		display: block;
		position: absolute;
		top: 50%;
		left: 33px;
		transform: translate(-50%, -50%);
		z-index: -1;

		transition: background-color 0.25s ease;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 491px;
		gap: 20px;
		padding-left: 0;
		margin-top: 60px;
	}
</style>
