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
        margin-top: 8px;
    }

    nav ul {
        display: flex;
        flex-flow: column nowrap;
        list-style: none;
    }

    nav ul li a {
        display: block;
        padding: 4px 8px 4px 24px;
        text-decoration: none;
    }

    .active {
        font-weight: bold;
        background-color: blue;
        color: white;
        border-radius: 0 16px 16px 0;
    }

    /* Mobile: sidebar full width, scrolls with page */
    @media screen and (max-width: 599px) {
        nav {
            width: 100%;
        }
    }

    /* Desktop: sidebar fixed width, sticky */
    @media screen and (min-width: 600px) {
        nav {
            flex: 0 0 300px;
            position: sticky;
            top: var(--header-height); /* Height of header */
            align-self: flex-start;
            max-height: 90vh;
            overflow-y: auto;
        }
    }
</style>
