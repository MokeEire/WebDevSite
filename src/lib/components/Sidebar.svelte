<script>
	import { modules } from '$lib/data/modules.js';
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
		{#each modules as module}
			<li>
				<a
					href="/modules/{module.slug}"
					class:active={$page.url.pathname === `/modules/${module.slug}`}
					>{module.number}. {module.title}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		flex: 0 1 300px;
		align-self: flex-start;
	}
	nav ul {
		display: flex;
		flex-flow: column nowrap;
		list-style: none;
	}

	nav ul li a {
		display: block;
		padding: 4px 8px 4px 16px;
		text-decoration: none;
	}
	.active {
		font-weight: bold;
		background-color: blue;
		background-origin: padding-box;
		color: white;
		border-radius: 0 16px 16px 0;
	}

	@media screen and (min-width: 600px) {
		nav {
			position: sticky;
			top: 5vh;
		}
	}
</style>
