<script lang="ts">
	import product_item from '$lib/stores/product_item';

	export let item: Item;

	const handleClick = () => {
		product_item.set(item);
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article class="rounded" on:click={handleClick}>
	<main>
		{#if item.extra_text}
			<p class="extra-text">
				{item.extra_text}
			</p>
		{/if}
		<img src={item.image} alt={item.title} />
	</main>
	<footer>
		<p>{item.title}</p>
		<p><strong>от <span>{item.price}₽</span></strong></p>
	</footer>
</article>

<style>
	article {
		border: 1px solid #d8d8d8;
		overflow: hidden;
		padding: 25px;
		text-align: center;
		cursor: pointer;
		transition: border-color 0.25s ease;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	article:active {
		border-color: var(--active-color);
	}

	@media (hover: hover) {
		article:hover {
			border-color: var(--active-color);
		}
	}

	p {
		margin: 0;
	}

	main {
		position: relative;
	}

	img {
		width: 100%;
		display: block;
	}

	footer {
		font-weight: 600;
	}

	footer p strong span {
		font-size: 64px;
		line-height: 71px;
	}
</style>
