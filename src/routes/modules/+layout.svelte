<script>
    import MDNLink from "$lib/components/MDNLink.svelte";
    let { children } = $props();

    import { page } from '$app/stores';

    let currentModule = $derived(
        $page.data.currentModule
    );
	
    let pageTitle = $derived(
        `${currentModule.number}. ${currentModule?.title}` || 'Module Not Found'
    )

    let pageDesc = $derived(
        currentModule?.description || ''
    )

</script>

<h1>{pageTitle}</h1>

<p>
    {pageDesc}
</p>

<hr>

<article class="module">
    {@render children()}
</article>

<style>
    h1 {
        font-weight: 700;
        font-size: 2.5em;
        margin-bottom: 8px;
    }

    hr {
        margin: 16px 0;
        color: grey;
        opacity: 0.6;
    }
</style>