<script>
	import MDNLink from "$lib/components/MDNLink.svelte";
    import FormExamples from "./FormExamples.svelte";

</script>
<p>
    In this module, we'll be learning to design web forms, which are the most common way for users to interact with websites.
    All the text boxes, dropdowns, and checkboxes we see on a near daily basis all (or at least mostly) start with web forms.
    Here's the basic structure of a web form:
</p>
<pre>
    <code class="lang-html">
        &lt;form&gt;   
            &lt;label /&gt;   
            &lt;input /&gt;
        &lt;/form&gt;  
    </code>
</pre>


<p>
    The <MDNLink element="form" /> above has an <MDNLink element="input" /> for the user to enter data and 
    a <MDNLink element="label" /> to explain what the user is entering. 
    The <code>&lt;form&gt;</code> element can have
    the following attributes:
</p>

<pre>
    <p class="code-header">Form element attributes</p>
    <code class="lang-html">
        &lt;form 
            <span class="attr-code">id</span>="form-id" <span class="attr-desc">form identifier</span> 
            <span class="attr-code">action</span>="script.php" <span class="attr-desc">URL of the web server program that processes the form data</span>
            <span class="attr-code">method</span>="post" <span class="attr-desc">HTTP method used to send form data, either "post" or "get"</span>
            <span class="attr-code">enctype</span> <span class="attr-desc">encoding type of the form data when sent to the server</span>
            &gt;   
            &hellip;
        &lt;/form&gt;  
    </code>
</pre>

<p>
    The <MDNLink element="form" attribute="action" /> attribute specifies the URL of the server-side program that will handle the form data.
    The <MDNLink element="form" attribute="method" /> attribute specifies the HTTP method to use when sending the form data, either <code>POST</code> or <code>GET</code>.
    <code>POST</code> is considered more secure.
    The <MDNLink element="form" attribute="enctype" /> attribute specifies how the form data IS encoded when sent to the server.
    The default value is <code>application/x-www-form-urlencoded</code>.
</p>

<h2>Input Boxes</h2>

<p>
    Within a form, there could be lots of <MDNLink element="input" /> elements - when purchasing something online you'll usually enter your shipping address, payment details, and more. 
    There are different types of inputs depending on what kind of data you want the user to enter e.g. text box, checkbox, radio button, etc.
    Below is a list of common attributes for the <code>&lt;input&gt;</code> element:
</p>

<pre>
    <p class="code-header">Input element attributes</p>
    <code class="lang-html">
        &lt;input 
            <span class="attr-code">id</span>="input-id" <span class="attr-desc">input identifier</span> 
            <span class="attr-code">name</span>="fieldName" <span class="attr-desc">the name of the associated data field</span>
            <span class="attr-code">type</span>="text" <span class="attr-desc">The type of input, see examples below</span>
            <span class="attr-code">[value]</span>="default" <span class="attr-desc">a default value</span>
            <span class="attr-code">[placeholder]</span>="Type here" <span class="attr-desc">some text to display when the input is empty</span>
        /&gt;  
    </code>
</pre>

<p>
    The input type is specified conveniently with the <MDNLink element="input" attribute="type" /> attribute.
    The <MDNLink element="input" attribute="name" /> attribute associates the input with a corresponding data field.
    There are also attributes that apply to specific input types like <MDNLink element="input" attribute="value" /> for setting a default value, 
    <MDNLink element="input" attribute="placeholder" /> for showing placeholder text in a text box, and <MDNLink element="input" attribute="checked" /> for setting a checkbox or radio button to be selected by default.
    One thing to note about the <MDNLink element="input" attribute="placeholder" /> attribute is that they are not particularly consistent across browsers and 
</p>

<p>
    Here are some of the most common input types. You might recognize most of these from everyday web use:
</p>

<FormExamples />


            

<style>

    pre p.code-header {
        display: block;
        width: 100%;
        font-size: 1em;
        background-color: #f0f0f0;
        padding: 4px 8px;
        margin: 0;
    }

    span.attr-code {
        color: #ffcc00;
        font-weight: bold;
    }
    span.attr-desc {
        color: white;
        font-style: italic;
    }
    span.attr-desc::before {
        content: "("
    }
    span.attr-desc::after {
        content: ")"
    }

    
</style>