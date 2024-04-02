<script lang="ts">
	import product_item from '$lib/stores/product_item';
	import { fade, fly } from 'svelte/transition';

	const handleCloseClick = () => {
		product_item.set(undefined);
	};

	const handleClick = (event: Event) => {
		if (!event.target) {
			return;
		}

		const target = event.target as HTMLElement;

		if (!target.closest('.checkout__wrapper')) {
			handleCloseClick();
		}
	};
</script>

{#if $product_item}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="checkout" on:click={handleClick} transition:fade={{ duration: 150 }}>
		<div class="checkout__wrapper rounded-top" transition:fly={{ y: '100%', duration: 250 }}>
			<button class="close" type="button" on:click={handleCloseClick}></button>
			<div class="preview">
				{#if $product_item.extra_text}
					<p class="extra-text">
						{$product_item.extra_text}
					</p>
				{/if}
				<img src={$product_item.image} alt={$product_item.title} />
			</div>
			<p class="title">{$product_item.title}</p>
			<div class="buttons-container">
				<button class="button"
					><span>Оплатить</span><span class="price">{$product_item.price}₽</span></button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.checkout {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(62, 62, 62, 0.62);
		z-index: 10;
		padding-top: 220px;
		text-align: center;
		cursor: pointer;
	}

	.checkout__wrapper {
		width: 100%;
		height: 100%;
		background-color: #fff;
		overflow: hidden;
		padding: 0 20px;
		cursor: default;
	}

	.checkout__wrapper > *:not(:first-child) {
		margin-top: 40px;
	}

	.close {
		background: #fafafa;
		width: 333px;
		height: 159px;
		border-radius: 0 0 50px 50px;
		border: 1px #d3d3d3 solid;
		margin: 0 auto;
		border-top: unset;
		position: relative;
		cursor: pointer;
		overflow: hidden;
	}

	.close::after {
		content: '';
		width: 100%;
		height: 100%;
		display: block;
		background: url('$lib/images/icons/plus-icon.svg') no-repeat center / 59px;
		opacity: 0.3;
		transform: rotate(45deg);
	}

	.preview {
		position: relative;
		width: max-content;
		margin: 0 auto;
	}

	.preview img {
		display: block;
		min-height: 500px;
		width: auto;
	}

	.title {
		font-size: 82px;
		line-height: 91px;
		margin: 0;
	}

	.buttons-container {
		width: 100%;
	}
</style>
