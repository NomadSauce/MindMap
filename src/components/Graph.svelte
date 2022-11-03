<script>
    export let data
    $: nodes = data.nodes
    $: links = data.links
    let options = {
        width: 1000,
        height: 800,
    }

    function addNode(node) {
        console.log('Add Node:', node)
    }
</script>


<div class="Graph border">
    <h4>Graph</h4>
</div>

<svg 
width={options.width} 
height={options.height}
>
    {#each nodes  as node, i }
        {#if node.label === 'Root'}
        <g class="node">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <circle 
                on:click={addNode(node)}
                cx={options.width/2}
                cy=50
                r=25
                fill= 'red'
            />
        </g>
        <!-- {:else} -->
            
        {/if}


    {/each}
    
    
</svg>

<style>
    svg {
        background-color: black;
    }
    .node :hover {
        cursor: pointer;
    }
</style>
