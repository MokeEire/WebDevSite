<script>
	import MDNLink from '$lib/components/MDNLink.svelte';
	import ExampleTable from './ExampleTable.svelte'
</script>

<p>
	In this module, I'm learning how to use the <MDNLink element="table" /> HTML structure to display information
	in a tabular format.
	Any good table has rows, and that's our starting point in HTML. 
	In the textbook, the table structure is built out by adding rows to the table with <MDNLink element="tr" />, 
	then adding cells to the rows with <MDNLink	element="td"/>,
	and later getting to row groups using <MDNLink element="thead" />,
	<MDNLink element="tbody" />, and <MDNLink element="tfoot" />. 
	As I learned while writing this, you can't just put rows directly into a table - they need to be in one of the row groups.
	(check the <MDNLink	element="tr"/> element page to see why). 
	So I can't just do this:
</p>
<pre>
    <code class="language-html">
        &lt;table&gt;
            &lt;tr&gt; table cells &lt;/tr&gt;
            &lt;tr&gt; table cells &lt;/tr&gt;
            ...
        &lt;/table&gt;
    </code>
</pre>

<p>
	Instead, I need to put the text into cells, and the cells into the rows, and then group the rows
	in a <MDNLink element="tbody" /> element. 
	Here's the more complete code for a simple table with two rows:
</p>

<pre>
    <code class="language-html">
        &lt;table&gt;
            &lt;tbody&gt;
                &lt;tr&gt;
                    &lt;td&gt;table cells&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;table cells&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/tbody&gt;
        &lt;/table&gt;
    </code>
</pre>

<p>Which looks like this:</p>

<div class="code-example">
	<table>
		<tbody>
			<tr>
				<td>table cells</td>
			</tr>
			<tr>
				<td>table cells</td>
			</tr>
		</tbody>
	</table>
</div>

<p>
	But I will try to break down the example in the same way the textbook does.
	The textbook uses a radio station schedule, so I will use my <a href="https://laist.com/program-schedule">local NPR
	station's schedule as an example. (I'm only going to do a portion of the schedule for simplicity)
	Below is the table we'll be building towards:
</p>

<ExampleTable />



<h2>Borders</h2>

<h2>Spanning Rows and Columns</h2>

<h2>Adding a Caption</h2>

<h2>Row groups</h2>

<h2>Column groups</h2>



<p>
	Next we'll add borders and get into spanning rows and columns. But it will be helpful to have some
	data to work with. 
</p>

<p>This table uses:</p>
<ul>
	<li>a <MDNLink element="thead" /> element for header groups</li>
	<li><MDNLink element="th" /> elements for header cells</li>
	<li><code>colspan</code> and <code>rowspan</code> attributes of the <MDNLink element="td" /> element to span cells across multiple columns</li>
</ul>

<style>
	
</style>
