const createEmulator = () => {
	window.emulator = (() => {
		const abortControllers: Partial<Record<keyof typeof emulator, AbortController>> = {};

		document.addEventListener('keydown', (event) => {
			document.dispatchEvent(new CustomEvent(`keydown_${event.key}`));
		});

		return {
			BankCardCancel: () => {
				if (abortControllers.BankCardPurchase) {
					abortControllers.BankCardPurchase.abort();
				}
			},
			BankCardPurchase(amount, cb, display_cb) {
				abortControllers.BankCardPurchase = new AbortController();

				document.addEventListener(
					'keydown_z',
					() => {
						cb(false);
						this.BankCardCancel();
					},
					{
						signal: abortControllers.BankCardPurchase.signal
					}
				);

				document.addEventListener(
					'keydown_x',
					() => {
						cb(true);
						this.BankCardCancel();
					},
					{
						signal: abortControllers.BankCardPurchase.signal
					}
				);

				document.addEventListener(
					'keydown_c',
					() => {
						display_cb(Math.random() * 1000 + '');
					},
					{
						signal: abortControllers.BankCardPurchase.signal
					}
				);
			},
			StartCashin(cb) {
				abortControllers.StartCashin = new AbortController();

				document.addEventListener(
					'keydown_1',
					() => {
						cb(10);
					},
					{
						signal: abortControllers.StartCashin?.signal
					}
				);

				document.addEventListener(
					'keydown_2',
					() => {
						cb(1);
					},
					{
						signal: abortControllers.StartCashin?.signal
					}
				);
			},
			StopCashin(cb) {
				cb(true);
				abortControllers?.StartCashin?.abort();
			},
			Vend(product_idx, cb) {
				abortControllers.Vend = new AbortController();
				document.addEventListener(
					'keydown_v',
					() => {
						cb(true);
						abortControllers?.Vend?.abort();
					},
					{
						signal: abortControllers?.Vend?.signal
					}
				);

				document.addEventListener(
					'keydown_b',
					() => {
						cb(false);
						abortControllers?.Vend?.abort();
					},
					{
						signal: abortControllers?.Vend?.signal
					}
				);
			}
		};
	})();
};

export default createEmulator;
