<script lang="ts">
	import { goto } from '$app/navigation';
	import product_item from '$lib/stores/product_item';
	import { onMount } from 'svelte';
	import card from '$lib/images/icons/card-icon.svg';
	import { browser } from '$app/environment';
	import paid_product from '$lib/stores/paid_product';

	let status: string = '...';

	const handleCancelClick = () => {
		emulator.BankCardCancel();
		goto('/select');
	};

	if (browser && !$product_item) {
		goto('/select');
	}

	onMount(() => {
		if (!$product_item) {
			return;
		}

		emulator.BankCardPurchase(
			$product_item.price,
			(ok) => {
				if (ok) {
					paid_product.set($product_item?.index);
					goto('/wait');
					return;
				}

				goto('/error?method=card');
			},
			(_status) => {
				status = _status;
			}
		);
	});
</script>

<section>
	<img src={card} alt="card" />
	<p>{status}</p>
	<button class="button button_alt" on:click={handleCancelClick}>Отмена</button>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		background-color: var(--active-color);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 0 20px;
	}

	p {
		font-size: 72px;
		line-height: 93px;
		width: 100%;
		text-align: center;
	}

	img {
		display: block;
		margin-top: auto;
	}

	button {
		margin: auto 0 60px 0;
	}
</style>
