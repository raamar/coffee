// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	var emulator: {
		StartCashin: (cb: (amount: number) => void) => void;
		StopCashin: (cb: (status: boolean) => void) => void;

		BankCardPurchase: (
			amount: number,
			cb: (status: boolean) => void,
			display_cb: (status: string) => void
		) => void;
		BankCardCancel: () => void;

		Vend: (product_idx, cb: (status: boolean) => void) => void;
	};

	type Item_Size = {
		title: string;
		diff: number;
		size: 's' | 'm' | 'l';
	};
	type Item = {
		image: string;
		title: string;
		price: number;
		sizes: Item_Size[];
		extra_text?: string;
	};
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
