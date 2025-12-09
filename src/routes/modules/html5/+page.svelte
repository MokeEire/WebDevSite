<script>
    import MDNLink from "$lib/components/MDNLink.svelte";
    import ElementTable from "./ElementTable.svelte";
</script>

<p>
	This module introduces the concepts of HTML and gives a little bit of its history. I won't go into
	too much detail because there's plenty of good resources that cover this, but here are some of my
	favourites:
</p>
<ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#brief_history_of_the_web">A brief history of the Web</a> from Web standards portion of the <a href="https://developer.mozilla.org/en-US/curriculum/">MDN curriculum</a></li>
    <li><a href="https://en.wikipedia.org/wiki/HTML#History">HTML's History section</a> on Wikipedia</li>
    <li>A more literary account of the foundations of web design from <a href="https://resilientwebdesign.com/chapter1/">Resilient Web Design</a></li>
</ul>

<h1 id="basics">The Basics</h1>

<p>
    At its core, HTML provides the structure of your web page.
    The elements (also called tags) describe the type of content you're using, such as <MDNLink element="p" /> for paragraph,
    <MDNLink element="h1" /> to <MDNLink element="h6" /> for headings, or <MDNLink element="ul" /> for an <strong>u</strong>nordered <strong>l</strong>ist.
    Some are more intuitive than others: <MDNLink element="a" /> is used for links (an artifact of its use in the past).
    Elements can also have attributes that provide additional information about the element 
    and allow for assigning things like classes and IDs which are used for styling with CSS or interactivity with JavaScript.
    Here's a simple example of a HTML document:
</p>

<pre>
    <code class="language-html">
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
            &lt;head&gt;
                &lt;title&gt;My First HTML Document&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;h1&gt;Hello, World!&lt;/h1&gt;
                &lt;p&gt;This is my first HTML document.&lt;/p&gt;
            &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre>

<h1 id="doc-head">The Document Head</h1>

<p>
    The document <MDNLink element="head" /> contains metadata about the page.
    What you see in your browser's tab title comes from the <MDNLink element="title" /> element inside the head.
    The <MDNLink element="meta" /> element is less exciting, but still important: 
    it specifies things like character encoding, viewport properties (will come up in <a href="/modules/mobile-web">Designing for the Mobile Web</a>), 
    and SEO related things like page description and keywords.
    It's also usually where links to stylesheets (<MDNLink element="link" />) and scripts (<MDNLink element="script" />) are placed.
</p>

<p>
    I am still pretty new to HTML, so don't take my word for this, but it also seems like a great place to put comments.
    I'm not sure if comments are usually removed before deploying a website to reduce file size,
    but I know I always appreciate finding comments in code (written by others or myself).
    To add a comment in HTML, you use the following syntax:
</p>

<pre>
    <code class="language-html">
        &lt;!-- This is a comment in HTML --&gt;
    </code>
</pre>

<h1>The Page Body</h1>

<p>
    The page body is the main content of your web page.
    The elements used to <em>mark up</em> the content are broadly categorized into sectioning, grouping (or text content), and inline-text elements.
    Here's a quick overview of some of the most common ones, 
    but be sure to check out the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements">MDN's HTML elements reference</a> for the comprehensive list.
</p>

<ElementTable />
