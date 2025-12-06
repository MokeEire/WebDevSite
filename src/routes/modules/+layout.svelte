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

<div class="module">
    {@render children()}
</div>

<style>
    h1 {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 8px;
    }

    hr {
        margin: 16px 0;
        color: grey;
        opacity: 0.6;
    }
</style>