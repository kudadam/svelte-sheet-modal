import adapter from '@sveltejs/adapter-static';

const mode = process.env.NODE_ENV
/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		adapter: adapter({
			pages: "public",
			assets: "public",
			fallback: "index.html"
		}),

		paths: {
			base: mode === "production" ? "/svelte-sheet-modal" : ""
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
