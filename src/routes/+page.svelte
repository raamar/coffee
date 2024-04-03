<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import bg from '$lib/images/promo/1/bg.png';
	import cup from '$lib/images/promo/1/cup.png';
	import zerno_1 from '$lib/images/promo/1/1.png';
	import zerno_2 from '$lib/images/promo/1/2.png';
	import zerno_3 from '$lib/images/promo/1/3.png';
	import zerno_4 from '$lib/images/promo/1/4-6.png';
	import zerno_5 from '$lib/images/promo/1/5.png';
	import { onMount } from 'svelte';
	import PulsatingCircle from '$lib/components/Pulsating_Circle.svelte';
	import product_item from '$lib/stores/product_item';
	const transition = 800;

	let blured = false;

	const handleClick = () => {
		blured = !blured;

		setTimeout(() => {
			goto('/select');
		}, transition / 1.1);
	};

	onMount(() => {
		preloadData('/select');
		product_item.set(undefined);
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
	style="background: url('{bg}') no-repeat center / cover; --transition-ms: {transition}ms"
	on:click={handleClick}
	class:blured
>
	<div class="coffee">
		<div style="background-image: url('{zerno_1}')"></div>
		<div style="background-image: url('{zerno_2}')"></div>
		<div style="background-image: url('{zerno_3}')"></div>
		<div style="background-image: url('{zerno_4}')"></div>
		<div style="background-image: url('{zerno_5}')"></div>
		<div style="background-image: url('{zerno_4}')"></div>
	</div>
	<h1>Это<br />твой<br />кофе</h1>

	<p><PulsatingCircle /><span>Коснитесь <br />экрана</span></p>

	<div class="cup" style="background: url('{cup}') no-repeat 0 100%"></div>
</section>

<style>
	section {
		min-height: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 0 20px;
	}

	.cup {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}

	.coffee {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 3;
	}

	.coffee > div {
		position: absolute;
		display: block;
		width: 300px;
		aspect-ratio: 1;
		display: block;
		background-repeat: no-repeat;
		background-position: 0 0;
		transform-origin: center center;
		transition:
			scale var(--transition-ms) ease-in,
			filter var(--transition-ms) ease-in;
	}

	.coffee > div:nth-child(1) {
		left: 194px;
		top: 109px;
		animation: anim_1 20s ease infinite alternate-reverse;
	}

	.coffee > div:nth-child(2) {
		left: 460px;
		top: 109px;

		animation: anim_1 30s ease infinite alternate;
	}

	.coffee > div:nth-child(3) {
		left: 738px;
		top: 20px;
		animation: anim_2 20s ease infinite alternate;
	}

	.coffee > div:nth-child(4) {
		left: 856px;
		top: 226px;
		animation: anim_2 20s ease infinite alternate-reverse;
	}

	.coffee > div:nth-child(5) {
		left: 75px;
		top: 1168px;
		animation: anim_3 25s ease infinite alternate-reverse;
	}

	.coffee > div:nth-child(6) {
		left: 880px;
		top: 1364px;
		animation: anim_3 20s ease infinite alternate;
	}

	@keyframes anim_1 {
		0% {
			transform: translate(0px, 0px) rotate(0);
		}

		50% {
			transform: translate(30px, -20px) rotate(3deg);
			filter: blur(10px);
		}
		100% {
			transform: translate(-80px, 30px) rotate(-2deg);
		}
	}

	@keyframes anim_2 {
		0% {
			transform: translate(0px, 0px) rotate(0);
		}

		50% {
			transform: translate(-33px, -33px) rotate(3deg);
			filter: blur(2px);
		}
		100% {
			transform: translate(5px, 28px) rotate(2deg);
		}
	}
	@keyframes anim_3 {
		0% {
			transform: translate(0px, 0px) rotate(0);
		}

		50% {
			transform: translate(22px, -31px);
		}
		100% {
			transform: translate(28px, 25px);
		}
	}

	section.blured .coffee > div {
		scale: 8;
		filter: blur(20px);
	}

	h1 {
		text-transform: uppercase;
		text-align: left;
		font-size: 207px;
		margin-top: -10%;
		line-height: 229px;
	}
	p {
		justify-self: end;
		align-self: flex-end;
		font-size: 64px;
		line-height: 71px;
		text-align: center;
		position: relative;
		z-index: 1;
	}
</style>
