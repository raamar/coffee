<script lang="ts">
	import ProductCard from '$lib/components/Product_Card.svelte';
	import config from '$lib/config';
	import product_type from '$lib/stores/product_type';
</script>

<section class="rounded-top">
	<p class="title">{$product_type}</p>

	<ul>
		{#each config[$product_type] as item}
			<ProductCard {item} />
		{/each}
	</ul>
</section>

<style>
	section {
		background-color: #fff;
		padding: 120px 20px;
		margin-top: -80px;
		filter: drop-shadow(0px -10px 75px rgba(0, 0, 0, 0.09));
		z-index: 3;
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
