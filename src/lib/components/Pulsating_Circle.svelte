<span class="circle">
	<span></span>
	<span></span>
	<span></span>
</span>

<style>
	.circle,
	.circle span {
		position: absolute;
		left: 50%;
		top: 50%;
		aspect-ratio: 1;
		width: 992px;
		background-color: #fff;
		border-radius: 50%;
		transform: translate(-50%, -20%);
		z-index: -1;
	}

	.circle span {
		background-color: transparent;
		z-index: 2;
		top: 0;
		left: 0;
		transform: translate(0%, 0%);
		border: 1.5px #fff solid;
		animation: pulse 2.5s ease infinite;
	}

	.circle span:nth-child(2) {
		animation-delay: 0.25s;
	}

	.circle span:nth-child(3) {
		animation-delay: 0.6s;
	}

	.circle span:nth-child(4) {
		animation-delay: 0.9s;
	}

	@keyframes pulse {
		from {
			transform: translate(0%, 0%) scale(0);
		}

		30% {
			opacity: 100;
		}

		to {
			transform: translate(0%, 0%) scale(1.45);
			opacity: 0;
		}
	}
</style>
