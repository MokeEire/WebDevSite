<script>
	import '../reset.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';

	import { page } from '$app/stores';
	import { modules } from '$lib/data/modules.js';

	let { children } = $props();

	// Find the current module based on the URL
	let currentModule = $derived(
		modules.find((module) => $page.url.pathname === `/modules/${module.slug}`)
	);

	// Create the page title
	let pageTitle = $derived(
		currentModule
			? `${currentModule.number}. ${currentModule.title}`
			: $page.url.pathname === '/'
				? 'Intro to Web Development'
				: 'Woops! Page Not Found'
	);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<link rel="icon" href={favicon} />
	<!-- Can't use this link because files in src need to be imported in JS?
	<link rel="stylesheet" href="../reset.css"> -->
</svelte:head>

<section class="header">Intro to Web Development</section>

<div class="page-layout">
	<Sidebar />

	<main>
		{@render children()}
	</main>

	
</div>

<footer>
		<p>© 2024 Intro to Web Development</p>
	</footer>

<style>
	.page-layout {
		display: flex;
		flex-flow: column nowrap;
		min-height: calc(100vh - var(--header-height) - var(--footer-height));
	}

	section.header {
		width: 100%;
		padding: 8px 16px;
		font-size: 24px;
		background-color: whitesmoke;
		height: var(--header-height);
	}

	footer {
		width: 100%;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: center;
		background-color: whitesmoke;
		height: var(--footer-height);
		margin-top: auto;
	}

	main {
		padding: 16px;
	}

	/* Mobile: everything scrolls naturally, sidebar above content */
	@media screen and (max-width: 599px) {
		.page-layout {
			flex-direction: column;
		}
	}

	/* Desktop: sticky header/sidebar/footer, side-by-side layout */
	@media screen and (min-width: 600px) {
		.page-layout {
			flex-direction: row;
			flex-wrap: wrap;
		}

		section.header {
			position: sticky;
			top: 0;
			z-index: 10;
		}


		main {
			flex: 1 1 300px;
		}
	}
</style>
