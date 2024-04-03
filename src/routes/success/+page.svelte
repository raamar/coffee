<script lang="ts">
	import cup from '$lib/images/icons/cup-icon.svg';
</script>

<section>
	<img src={cup} alt="cup" />
	<h2>Напиток готов!</h2>
	<p>вы можете забрать его</p>
	<a href="/" class="button button_alt">На главную</a>
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

	img {
		margin-top: auto;
	}

	h2 {
		font-size: 96px;
		font-weight: 600;
		line-height: 123.36px;
		text-align: center;
		margin: 0;
		margin-top: 60px;
	}

	p {
		font-size: 48px;
		font-weight: 600;
		line-height: 61.68px;
		text-align: center;
		margin: 0;
	}

	.button {
		margin-top: auto;
		margin-bottom: 60px;
		text-decoration: none;
	}
</style>
