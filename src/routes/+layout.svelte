<script>
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
			: $page.url.pathname === '/' ? 'Intro to Web Development' : 'Woops! Page Not Found'
	);

</script>

<svelte:head>
	<title>{pageTitle}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page-layout">

	<Sidebar />

	<main>
		{@render children()}
	</main>

</div>

<style>
	.page-layout {
		display: flex;
		flex-flow: row nowrap;
		min-height: 100vh;
	}
	main {
		flex: 1 1 auto;
		padding: 16px;
	}
</style>