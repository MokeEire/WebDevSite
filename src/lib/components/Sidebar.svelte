<script>
	import { modules } from '$lib/data/modules.js';
	import { page } from '$app/stores'
</script>

<nav>
	<ul>
		<li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
		{#each modules as module}
			<li><a href="/modules/{module.slug}" class:active={$page.url.pathname === `/modules/${module.slug}`}>{module.number}. {module.title}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav ul li a {
		border-radius: 16px;
		padding: 4px 8px;
	}
	.active {
		font-weight: bold;
		background-color: blue;
		color: white;
	}
</style>