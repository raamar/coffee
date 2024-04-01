<script>
	import { goto } from '$app/navigation';
	import bg from '$lib/images/tmp/Промо_3.png';
	const transition = 250;

	let blured = false;

	const handleClick = () => {
		blured = !blured;

		setTimeout(() => {
			goto('/select');
		}, transition);
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
	style="background-image: url('{bg}'); --transition-ms: {transition}ms"
	on:click={handleClick}
	class:blured
>
	<h1>Это<br />твой<br />кофе</h1>

	<p>Коснитесь <br />экрана</p>
</section>

<style>
	section {
		min-height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
		transition: filter var(--transition-ms) ease;
		cursor: pointer;
		padding: 0 20px;
	}

	section.blured {
		filter: blur(50px);
	}

	h1 {
		text-transform: uppercase;
		text-align: left;
		font-size: 207px;
		margin-top: -25%;
		line-height: 229px;
	}
	p {
		justify-self: end;
		align-self: flex-end;
		font-size: 64px;
		line-height: 71px;
		text-align: center;
	}
</style>
