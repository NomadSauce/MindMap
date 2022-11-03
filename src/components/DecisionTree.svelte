<script>
    export let data

    $: rootC = data.children
    let options = {
        width: 1000,
        height: 800,
    }
    $: middle = options.width/2
    $: top = 50
    $: levelLen = 150

    function addNode(node) {
        console.log('Add Node:', node)
    }

    function calcWidth(array) {
        let aLenth = array.length * 50

    }

    function hasChildren(node) {
        return node.children.length > 0
    }
</script>


<div class="Graph border">
    <h4>Graph</h4>
</div>

<svg 
    width={options.width} 
    height={options.height}
>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<g class="node">
    <circle 
        on:click={addNode}
        cx={options.width/2}
        cy=50
        r=10
        stroke='red'
        fill='red'

    />
</g>

<g>
    <rect
        x={middle - (rootC.length/2)*100}
        y={levelLen - top/2}
        rx=10
        height=50
        width={rootC.length * 100}
        stroke='red'
        fill='rgba(204, 36, 36, 0.25)'
    />
    
</g>

{#each rootC as node, i }
    <g class="node">
        <line
            x1={middle}
            y1=50
            x2={(middle - (rootC.length/2) * 100) + (i)*100 + 50 }
            y2={levelLen}
            stroke='red'
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->

        <circle 
                on:click={addNode(node)}
                cx={(middle - (rootC.length/2) * 100) + (i)*100 + 50 }
                cy={levelLen}
                r=10
                fill={(hasChildren(node)) ? 'red' : 'green'}
            />
    
    </g>
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
