<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import product_item from '$lib/stores/product_item';
	import { onMount } from 'svelte';

	let sum: number = 0;

	const handleCancelClick = () => {
		emulator.StopCashin(() => {
			goto('/select');
		});
	};

	if (browser && !$product_item) {
		goto('/select');
	}

	onMount(() => {
		if (!$product_item) {
			return;
		}

		emulator.StartCashin((amount) => {
			sum += amount;
			if ($product_item && sum >= $product_item.price) {
				emulator.StopCashin(() => {
					goto('/success');
				});
			}
		});
	});
</script>

<section>
	<div class="icon">
		<svg
			width="94"
			height="126"
			viewBox="0 0 94 126"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.58203 42.2029V78.9817H1H0.5V79.4817V83.4054V83.9054H1H9.58203V103.703H1H0.5V104.203V108.126V108.626H1H9.58203V125V125.5H10.082H14.0301H14.5301V125V108.626H35.747H36.247V108.126V104.203V103.703H35.747H14.5301L14.5314 83.9068H51.5412H52.5286H53.516H53.5294L53.5429 83.9061C75.7145 82.7138 93.5 64.4507 93.5 42.2039V41.9349L93.4976 41.9333C93.3517 19.0184 74.6233 0.5 51.5402 0.5C28.3659 0.5 9.58203 19.1645 9.58203 42.2029ZM88.55 42.2029C88.55 62.1329 72.3904 78.397 52.52 78.9817H14.5304V42.2029C14.5304 21.8801 31.085 5.42409 51.5402 5.42409C71.9964 5.42409 88.55 21.8812 88.55 42.2029Z"
				fill="black"
				stroke="black"
			/>
		</svg>
	</div>
	<p><span>Внесите деньги</span><br /><span>Сумма: {sum}₽</span></p>
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
		color: #000;
	}

	.icon {
		margin-top: auto;
		width: 441px;
		height: 283px;
		border-radius: 26px;
		border: 8px #000 solid;
		position: relative;
	}

	.icon svg {
		width: 109px;
		height: 109px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
	}

	p {
		font-size: 72px;
		line-height: 93px;
		width: 100%;
		text-align: center;
		margin-bottom: auto;
	}
	button:not(:last-child) {
		margin: auto 0 30px 0;
	}

	button:last-child {
		margin-bottom: 60px;
	}
</style>
