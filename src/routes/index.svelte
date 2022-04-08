<script>
    import SheetModal from "$lib";
    import { onMount } from "svelte";
    let firstDemoOpen = false;
    let dialogOpen = false;
    let content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores quaerat facere amet, quia culpa dolore sit quos eligendi doloribus";
    let dialogBackground = "linear-gradient(red,blue)";
    let dialogColor = "white";
    let dialogPadding = "5px";
    let dialogPosition = "bottom";
    let showBackdrop = false;


    onMount(()=>{
        let p = document.createElement("script");
        p.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/prism.min.js";
        p.integrity = "sha512-/Swpp6aCQ0smuZ+zpklJqMClcUlvxhpLf9aAcM7JjJrj2waCU4dikm3biOtMVAflOOeniW9qzaNXNrbOAOWFCw==";
        p.crossOrigin = "anonymous";
        document.querySelector("head").appendChild(p);
        let c = document.createElement("link");
        c.rel = "stylesheet";
        c.href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-okaidia.min.css";
        document.querySelector("head").appendChild(c);
    })
</script>
<main>
    <div class="center">
        <h1>Svelte Sheet Dialog<small>@0.0.1</small></h1>
        <p><i>Simple, light weight, customizable, sheet dialog made in Svelte</i></p>
        <img src="{new URL("/logo.jpeg",import.meta.url).href}" height="200" width="200" alt="Logo"><br/>
        <small>by <a href="https://www.kudadam.com"><i>@kudadam</i></a></small>
    </div>

    <section>
        <h2>Install</h2>
        <p>
            Open your terminal and type in <code>npm install -D svelte-sheet-dialog</code><br/>
            You can also install it with whatever package manager you use
        </p>
    </section>

    <section>
        <h2>Usage</h2>
        <p>
            In order to use it, you need to first import it.
        </p>
        <pre class="language-html"><code class="langugage-html">&lt;script&gt;
    import SheetModal from "svelte-sheet-modal";
    let open = true;
&lt;/script&gt;

&lt;SheetModal &#123;open&#125;&gt;
    Your content goes here
&lt;/SheetModal&gt;
</code></pre>
<i>It's very easy to use</i><br/><br/>
<button on:click={()=>{firstDemoOpen = !firstDemoOpen}}>Demo</button>


<SheetModal open={firstDemoOpen}>
    Hey, do you like my component?<br/><br/>
    <button on:click={()=>{firstDemoOpen = false}}>Yes</button>
</SheetModal>
</section>

<section>
    <h2>Customizing</h2> 
    <p>
        This component is very customizable, you can modify it how you want.
    </p>
    <pre class="language-html">&lt;<span class="token tag">script</span>&gt;
    <span class="token keyword">import</span> SheetModal from <span class="token string">"svelte-sheet-modal"</span>;
    <span class="token keyword">let</span> dialogOpen = <span class="token boolean">{dialogOpen}</span>
&lt;/<span class="token tag">script</span>&gt;
    
&lt;<span class="token tag">SheetModal</span> 
<span class="token attr-name"><span class="token namespace">on:</span>close</span>=<span class="token attr-value">&#123;()=>&#123;dialogOpen = <span class="token boolean">false</span>&#125;&#125;</span>
<span class="token string">&#123;open&#125;</span>=<span class="token boolean">{dialogOpen}</span>
<span class="token string">position</span>="<span class="token attr-value">{dialogPosition}</span>"
<span class="token string">showBackdrop</span>=<span class="token boolean">{showBackdrop}</span>
<span class="token string">--sheet-dialog-background</span>=<span class="token attr-value">{dialogBackground}</span>
<span class="token string">--sheet-dialog-color</span>=<span class="token attr-value">{dialogColor}</span>
<span class="token string">--sheet-dialog-padding</span>=<span class="token attr-value">{dialogPadding}</span>
&gt;{content}
&lt;/<span class="token string">SheetModal</span>&gt;
</pre>

    <div>
        <h3>Try customizing it</h3>
        <div class="field">
            <label for="content">Content</label>
            <textarea name="" id="content" cols="30" rows="2" bind:value={content}></textarea>
        </div>
        <div class="field">
            <label for="dialog-background">Dialog Background</label>
            <input type="text" id="dialog-background" bind:value={dialogBackground}>
            <small>any valid CSS background property</small>
        </div>
        <div class="field">
            <label for="dialog-color">Dialog Color</label>
            <input type="text" id="dialog-color" bind:value={dialogColor}>
        </div>
        <div class="field">
            <label for="dialog-padding">Dialog Padding</label>
            <input type="text" id="dialog-padding" bind:value={dialogPadding}>
        </div>
        <div class="field">
            <label for="dialog-position">Dialog Position</label>
            <input type="radio" name="top" value="top" bind:group={dialogPosition}><span>Top</span><br/>
            <input type="radio" name="bottom"  value="bottom" bind:group={dialogPosition}><span>Bottom</span>
        </div>
        <div class="field">
            <label for="show-backdrop">Show Backdrop</label>
            <input type="radio" name="true" id="dialog-position" value={true
            
            } bind:group={showBackdrop} ><span>True</span><br/>
            <input type="radio" name="false" id="dialog-position" value={false} bind:group={showBackdrop} ><span>False</span>
        </div>
    </div>
<SheetModal open={dialogOpen}
position={dialogPosition}
showBackdrop = {showBackdrop}
--sheet-dialog-background={dialogBackground}
--sheet-dialog-color={dialogColor}
--sheet-dialog-padding = {dialogPadding}
on:close={()=>{dialogOpen=false}}
>{content}</SheetModal>

<button on:click={()=>{dialogOpen = !dialogOpen}}>Try it</button>
</section>


<section>
    <h2>Documentation</h2>
    <article>
        <h3>Events</h3>
        <p>These are the events emitted by the component, you can listen to them by using the <code>on:</code> directive</p>
        <ul>
            <li>
                <p>close</p>
                <p>This is called when the modal is closed</p>
            </li>
        </ul>
    </article>
    <article>
        <h3>Props</h3>
    <p>These are the attributes which the component</p>
    <div style:overflow="auto">
        <table>
            <thead>
                <td>Property</td>
                <td>Default Value</td>
                <td>Description</td>
            </thead>
            <tbody>
                <tr>
                    <td>open</td>
                    <td>false</td>
                    <td>This is used to open or close the modal component. Accepted values are <code>true</code> and <code>false</code></td>
                </tr>
                <tr>
                    <td>position</td>
                    <td>bottom</td>
                    <td>This is used to set the position of the modal. Valid values are <code>top</code> and <code>bottom</code></td>
                </tr>
                <tr>
                    <td>showBackdrop</td>
                    <td><code>false</code></td>
                    <td>If set to <code>true</code>, a backdrop will be displayed when the component is shown</td>
                </tr>
                <tr>
                    <td>clickBackdropToClose</td>
                    <td><code>true</code></td>
                    <td>This allows you to close the modal by clicking on the backdrop.</td>
                </tr>
                <tr>
                    <td><code>--sheet-dialog-backdrop-background</code></td>
                    <td><code>rgba(0,0,0,0.7)</code></td>
                    <td>This is the background colour of the backdrop. Any valid CSS background value is accepted</td>
                </tr>
                <tr>
                    <td><code>--sheet-dialog-background</code></td>
                    <td>blue</td>
                    <td>This is used to set the background colour of the modal</td>
                </tr>
                <tr>
                    <td><code>--sheet-dialog-color</code></td>
                    <td>white</td>
                    <td>This is used to set the text color of the modal. Any valid CSS colour is accepted</td>
                </tr>
                <tr>
                    <td><code>--maximum-height</code></td>
                    <td>30%</td>
                    <td>This is used to set the maximum height of the modal</td>
                </tr>
                <tr>
                    <td><code>swipeToClose</code></td>
                    <td><code>True</code></td>
                    <td>Allows the modal to be closed by swiping down on the modal</td>
                </tr>
                <tr>
                    <td>--z-index</td>
                    <td>9999</td>
                    <td>This allows you to set the order stacking of the modal</td>
                </tr>
            </tbody>
        </table>
    </div>
    </article>
</section>
</main> 




<style>
    section {
        margin: 30px 0px;
    }
    main {
        padding: 30px 0px;
    }

    .field {
        margin: 10px 0px;
        border: 1px solid grey;
        padding: 3px;
    }


</style>

<svelte:head>
    <meta name="theme-color" content="#202b38">
    <script defer src="" integrity="" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="h" integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Svelte Sheet Dialog</title>
</svelte:head>