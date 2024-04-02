<script lang="ts">
	import { product_types } from '$lib/config';
	import product_type from '$lib/stores/product_type';

	const handleClick = (title: string) => {
		//@ts-expect-error
		product_type.set(title);
	};
</script>

<section class="rounded-top">
	<nav>
		<ul>
			{#each Object.entries(product_types) as [title, icon]}
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class:active={title === $product_type} on:click={handleClick.bind(null, title)}>
					<img src={icon} alt={title} />
					<p>{title}</p>
				</li>
			{/each}
		</ul>
	</nav>
</section>

<style>
	section {
		background-color: #f3f3f3;
		overflow: hidden;
	}
	ul {
		list-style-type: none;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding: 0;
		margin: 0;
	}

	li {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: column;
		position: relative;
		cursor: pointer;
		transition: background-color 0.15s ease;
		padding-bottom: 80px;
	}

	li:not(:first-child) {
		border-left: 1px solid #dcdcdc;
	}

	li p {
		min-height: 82px;
		font-size: 32px;
		line-height: 41px;
		text-align: center;
		margin: 0;
		margin: 23px 0;
		z-index: 1;
	}

	li img {
		display: block;
		max-width: 259px;
		height: auto;
		z-index: 1;
	}

	li::before {
		content: '';
		width: 161px;
		aspect-ratio: 1;
		background-color: var(--theme-bg);
		position: absolute;
		border-radius: 50%;
		top: calc(50% - 40px);
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		z-index: 0;
		transition: transform 0.25s ease;
	}

	li.active::before {
		transform: translate(-50%, -50%) scale(1);
	}

	li.active {
		background-color: #fff;
	}
</style>
