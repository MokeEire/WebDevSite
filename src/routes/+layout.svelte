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

<div class="page-layout">

	<section class="header">Intro to Web Development</section>

	<Sidebar />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>© 2024 Intro to Web Development</p>
	</footer>
</div>

<style>
	.page-layout {
		display: flex;
		flex-flow: row wrap;
		min-height: 100vh;
		align-content: flex-start;
	}

	section.header {
		width: 100%;
		height: 5vh;
		display: flex;
		align-items: center;
		font-size: 24px;
		padding: 8px 16px
	}

	footer {
		width: 100%;
		height: 5vh;
		align-self: flex-end;
		align-content: center;
		text-align: center;
	}
	main {
		flex: 3 1 480px;
		padding: 16px;
	}
</style>
