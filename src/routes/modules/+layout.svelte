<script>
    import MDNLink from "$lib/components/MDNLink.svelte";
    let { children } = $props();

    import { page } from '$app/stores';
	
    const { currentModule } = $page.data;

    let pageTitle = $derived(
        currentModule?.title || 'Module Not Found'
    )
</script>

<h1>{pageTitle}</h1>

<div class="module">
    {@render children()}
</div>

<style>
    h1 {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 8px;
    }
</style>