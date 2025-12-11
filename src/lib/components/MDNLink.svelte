<script>
    let { element = '', property = '', attribute = '', children } = $props();
    
    // Determine MDN URL based on type
    let url = $derived(
        attribute 
            ? `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${encodeURIComponent(element)}#${encodeURIComponent(attribute)}`
            : element 
            ? `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${encodeURIComponent(element)}`
            : property
            ? `https://developer.mozilla.org/en-US/docs/Web/CSS/${encodeURIComponent(property)}`
            : '#'
    );
    
    // Display text: use children if provided, otherwise use element/property name
    let displayText = $derived(
        attribute ? `${attribute}` : element ? `<${element}>` : property ? property : ''
    );
</script>

<a href={url} target="_blank" rel="noopener noreferrer">
    <code>
        {#if children}
            {@render children()}
        {:else}
            {displayText}
        {/if}
    </code>
</a>

<style>
    a {
        color: #0a5dbd;
        text-decoration: none;
        transition: border ease 60ms;
    }
    
    a:hover {
        transform: translateY(2px);
        border-bottom-style: solid;
    }
    code:hover {
        transform: translateY(2px);
    }
    
    code {
        font-family: 'Geist Mono', monospace;
        background-color: #f4f4f4;
        padding: 2px 4px;
        border-radius: 3px;
    }
</style>