<script lang="ts">
	import { onMount } from 'svelte';

	// https://stackoverflow.com/a/69481301/10692682

	export let duration = 10;
	export let size = 100;
	let time = duration;

	onMount(() => {
		const update = () => {
			if (time <= 0) {
				return;
			}
			time--;
		};
		const interval = setInterval(update, 1000);

		update();
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="container" style="--duration: {duration};--size: {size};">
	<div class="circle"></div>
	<div class="timer">
		<div class="mask"></div>
	</div>
	<div class="info">
		<p class="info__time"><span>00</span>:<span>{time.toString().padStart(2, '0')}</span></p>
		<p><small>Приготовление напитка</small></p>
	</div>
</div>

<style>
	.info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.info p:has(small) {
		font-size: 40px;
		font-weight: 600;
		line-height: 56.6px;
		letter-spacing: 0.035em;
		text-align: center;
		color: #a7a7a7;
		margin-top: -120px;
	}
	.info__time {
		font-size: 200px;
		line-height: 0;
		font-weight: normal;
		display: flex;
	}

	.info__time span {
		min-width: 250px;
		display: inline-block;
		text-align: center;
	}
	.container {
		position: relative;
	}
	.circle {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 10;
		-webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) forwards;
	}

	.circle::before {
		content: '';
		aspect-ratio: 1;
		width: 47px;
		border-radius: 50%;
		background-color: var(--active-color);
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.timer {
		z-index: 9;
		background: -webkit-linear-gradient(left, #eee 50%, var(--active-color) 50%);
		border-radius: 100%;
		height: calc(var(--size) * 1px);
		width: calc(var(--size) * 1px);
		position: relative;
		-webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) forwards;
		-webkit-mask: radial-gradient(transparent 69.8%, #000 69.8%);
		mask: radial-gradient(transparent 69.8%, #000 69.8%);
		filter: blur(1px);
	}
	.mask {
		border-radius: 100% 0 0 100% / 50% 0 0 50%;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 50%;
		-webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) forwards;
		-webkit-transform-origin: 100% 50%;
	}
	@-webkit-keyframes time {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes mask {
		0% {
			background: var(--active-color);
			-webkit-transform: rotate(0deg);
		}
		50% {
			background: var(--active-color);
			-webkit-transform: rotate(-180deg);
		}
		50.01% {
			background: #eee;
			-webkit-transform: rotate(0deg);
		}
		100% {
			background: #eee;
			-webkit-transform: rotate(-180deg);
		}
	}
</style>
