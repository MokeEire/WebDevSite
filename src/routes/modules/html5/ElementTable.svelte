<script>
    import MDNLink from "$lib/components/MDNLink.svelte";
</script>

<table id="html-elements-overview">
    <caption>Overview of Common HTML Elements</caption>
    <colgroup>
        <col id="category-column" />
    </colgroup>
    <thead>
        <tr>
            <th>Category</th>
            <th>Element</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="5">Sectioning</th>
            <td><MDNLink element="h1" /> to <MDNLink element="h6" /></td>
            <td>Headings, with <MDNLink element="h1" /> being the highest level and <MDNLink element="h6" /> the lowest.</td>
        </tr>
        <tr>
            <td><MDNLink element="main" /></td>
            <td>Literally, the main content of the page.</td>
        </tr>
        <tr>
            <td><MDNLink element="nav" /></td>
            <td>A navigation list, usually a list of links around the site.</td>
        </tr>
        <tr>
            <td><MDNLink element="footer" /></td>
            <td>The footer section, usually information about the site, organization, etc. at the bottom of the page.</td>
        </tr>
        <tr>
            <td><MDNLink element="aside" /></td>
            <td>Some content that is indirectly related to the main content. e.g. "Did You Know?" sections of textbooks.</td>
        </tr>
        <tr>
            <th rowspan="4">Grouping / Text content</th>
            <td><MDNLink element="p" /></td>
            <td>Paragraphs of text.</td>
        </tr>
        <tr>
            <td><MDNLink element="blockquote" /></td>
            <td>A piece of text that is a quotation.</td>
        </tr>
        <tr>
            <td><MDNLink element="ul" />, <MDNLink element="ol" />, <MDNLink element="li" /></td>
            <td>Unordered and ordered lists, with list items.</td>
        </tr>
        <tr>
            <td><MDNLink element="div" /></td>
            <td>A generic container for grouping elements, often used for styling or layout purposes.</td>
        </tr>
        <tr>
            <th rowspan="4">Text-level / Inline-text</th>
            <td><MDNLink element="a" /></td>
            <td>Hyperlinks to other pages or resources.</td>
        </tr>
        <tr>
            <td><MDNLink element="code" /></td>
            <td>Indicates text is a code snippet.</td>
        </tr>
        <tr>
            <td><MDNLink element="em" /></td>
            <td>Marks text as <strong>em</strong>phasized. This usually means italicized.</td>
        </tr>
        <tr>
            <td><MDNLink element="strong" /></td>
            <td>Marks text that has <strong>strong</strong> importance. This usually means bolded.</td>
        </tr>
    </tbody>
</table>

<style>
    #html-elements-overview {
        width: 100%;
        border-collapse: collapse;
        margin-top: 16px;
        padding: 16px
    }

    #html-elements-overview caption {
        caption-side: top;
        text-align: left;
        font-weight: 600;
        margin-bottom: 8px;
    }

    #html-elements-overview th, #html-elements-overview td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #html-elements-overview th {
        background-color: #f2f2f2;
    }

    #html-elements-overview #category-column th {
        width: 15%;
        text-align: center;
    }
</style>