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
		flex-flow: row wrap;
		min-height: 90vh;
		align-content: flex-start;
	}

	section.header {
		width: 100%;
		height: 5vh;
		display: flex;
		align-items: center;
		font-size: 24px;
		padding: 8px 16px;
		background-color: whitesmoke;
	}

	@media screen and (min-width: 600px) {
		section.header {
			position: sticky;
			top: 0;
		}

		footer {
			position: sticky;
			bottom: 0;
		}
	}

	footer {
		width: 100%;
		height: 5vh;
		align-self: flex-end;
		align-content: center;
		text-align: center;
		background-color: snow;
	}
	main {
		flex: 1 1 300px;
		padding: 16px;
	}
</style>
