<script lang="ts">
	import product_type from '$lib/stores/product_type';
	import './themes.css';
	import './styles.css';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import createEmulator from '$lib/createEmulator';

	if (browser && !window?.emulator) {
		console.warn('Эмулятор не найден. Создаю свой.');
		createEmulator();
	}

	onNavigate(() => {
		if (!('startViewTransition' in document)) {
			return;
		}

		//@ts-expect-error
		return new Promise((resolve) => document.startViewTransition(() => new Promise(resolve)));
	});
</script>

<svelte:head>
	<title>Coffee Shop</title>
	<meta name="description" content="Coffee Shop" />
</svelte:head>

<div class="app" data-product_type={$product_type}>
	<slot />
</div>

<style>
</style>
