<script>
    export let data
    let options = {
        width: 1000,
        height: 800,
    }
</script>


<div class="Graph border">
    <h4>Graph</h4>
</div>

<svg 
width={options.width} 
height={options.height}
>
    
    {#each data.nodes as node }
    <g>
        <!-- < -->
    </g>
    {/each}
    
</svg>

<style>
    svg {
        background-color: black;
    }
</style>