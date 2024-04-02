<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const handleBackClick = () => {
		const method = $page.url.searchParams.get('method');

		if (!method) {
			goto('/select');
		}

		goto('/' + method);
	};

	const handleCancelClick = () => {
		goto('/select');
	};
</script>

<section>
	<div class="icon">
		<svg width="31" height="31" viewBox="0 0 31 31" fill="#fff" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M31 13.8004V16.8596H17.1533V31H13.8467V16.8596H0V13.8004H13.8467V0H17.1533V13.8004H31Z"
			/>
		</svg>
	</div>
	<p>Оплата не прошла</p>
	<button class="button button_alt" on:click={handleBackClick}>Попробовать ещё раз</button>
	<button class="button button_alt" on:click={handleCancelClick}>Отмена</button>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		background-color: var(--error-color);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 0 20px;
		color: #fff;
	}

	.icon {
		margin-top: auto;
		aspect-ratio: 1;
		width: 334px;
		border-radius: 50%;
		border: 7px #fff solid;
		position: relative;
	}

	.icon svg {
		width: 109px;
		height: 109px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		position: absolute;
	}

	p {
		font-size: 72px;
		line-height: 93px;
		width: 100%;
		text-align: center;
	}
	button:not(:last-child) {
		margin: auto 0 30px 0;
	}

	button:last-child {
		margin-bottom: 60px;
	}
</style>
