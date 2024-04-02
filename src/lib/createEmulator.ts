const createEmulator = () => {
	window.emulator = (() => {
		document.addEventListener('keydown', (event) => {
			document.dispatchEvent(new CustomEvent(`keydown_${event.key}`));
		});
		return {
			BankCardCancel: () => {},
			BankCardPurchase(amount, cb, display_cb) {
				document.addEventListener('keydown_z', () => {
					cb(false);
				});

				document.addEventListener('keydown_x', () => {
					cb(true);
				});

				document.addEventListener('keydown_c', () => {
					display_cb(Math.random() * 1000 + '');
				});
			},
			StartCashin(cb) {
				document.addEventListener('keydown_0', () => {
					cb(10);
				});

				document.addEventListener('keydown_1', () => {
					cb(1);
				});
			},
			StopCashin(cb) {},
			Vend(product_idx, cb) {}
		};
	})();
};

export default createEmulator;
