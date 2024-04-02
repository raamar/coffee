<script lang="ts">
	export let item: Item;
</script>

<article class="rounded">
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

	.extra-text {
		position: absolute;
		top: 0;
		right: 0;
		width: 94px;
		aspect-ratio: 1;
		background-color: var(--active-color);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 64px;
		margin: 0;
	}

	footer {
		font-weight: 600;
	}

	footer p strong span {
		font-size: 64px;
		line-height: 71px;
	}
</style>
