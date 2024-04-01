// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
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
