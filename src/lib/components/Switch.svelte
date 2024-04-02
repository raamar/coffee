<script lang="ts">
</script>

<label>
	<input type="checkbox" class="visually-hidden" />
	<span>Картой</span>
	<span>Наличными</span>
</label>

<style>
	label {
		position: relative;
		border-radius: 35px;
		padding: 55px 30px;
		font-size: 48px;
		line-height: 53px;
		cursor: pointer;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		background-color: #f3f3f3;
	}
	label::after {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		width: 50%;
		height: 100%;
		border-radius: 35px;
		background-color: var(--active-color);
		top: 0;
		left: 0;
		transition: left 0.25s ease;
		z-index: 0;
	}

	label span {
		z-index: 1;
	}
	label:has(input:checked)::after {
		left: 50%;
	}
</style>
