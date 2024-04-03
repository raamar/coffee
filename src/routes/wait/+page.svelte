<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Timer from '$lib/components/Timer.svelte';
	import paid_product from '$lib/stores/paid_product';
	import product_item from '$lib/stores/product_item';
	import { onMount } from 'svelte';

	if (browser && ($paid_product === undefined || $paid_product !== $product_item?.index)) {
		goto('/select');
	}

	onMount(() => {
		paid_product.set(undefined);
	});
</script>

<section>
	<div class="circle">
		<Timer size={800} duration={30} />
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 0 20px;
	}
</style>
