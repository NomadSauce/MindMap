<script>
    import { hierarchy, tree, stratify, treemap } from 'd3'
    import { onMount } from 'svelte/internal';
    import { nodeStore } from '../stores/store';
    import Node from './Node.svelte';
    export let data
    $: nodes = $nodeStore
    $: display = ''
    $: nodeData = []
    $: grandparents = []
    $: descendants = []


    onMount(() => {
       while (!nodes) {

       }
       console.log('Nodes', nodes)
    //    children=nodes.children
    //    grandparents=nodes.ancestors()
    //    console.log('Children', grandparents)
    })

    $: children = nodes.children
    console.log('Children', children)

    let height = 400
    let width = 300
    let margin = 30

   

    

    $: root = hierarchy(nodes).sort(
        (a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name)
    )


    $: treeGen = tree().size([width - 2 * margin, 100])
    $: treeX = treeGen(root)

    function handleHover(dat) {
        console.log('')
        // console.log('Nodes:', nodes)
        nodeData = dat.data
        children = dat.children
        grandparents = dat.ancestors()
        descendants = dat.descendants()

        // console.log('Nodes:', dat)
        // console.log('Node:', dat.data)
        // console.log('Children', children)
        console.log('Descendants', descendants)
        // console.log('Ancestors', grandparents)
        // console.log('OGNodes', nodes)


    }

    function addNode(d) {
        console.log('Add Node', d)
        if (!d.children) {
            console.log('No Child')
            d.children = []
        }
        d.children=[...d.children, 
            {
                name: Math.random(),
                // parent: d.data.name
            }
        ]
        children = d.children

        // console.log('Kids',children)




    }
</script>
<!-- {treeX.links()} -->
<div class="row col-12">
    <div class="col-4 border justify-content-center">
        {#if nodeData.name}
            <div class="row">
                <h5>Node: {nodeData.name}</h5>
            </div>
            <div class="row">
                {#if descendants}
                    <h5 class="col">{descendants.length -1} descendants</h5>
                {/if}
                {#if nodeData.children}
                    <h5 class="col">{nodeData.children.length} Children</h5>
                {/if}
            </div>
            <div>
                {#if nodeData.children}
                    <ul class="row justify-content-center p-0">
                        {#each nodeData.children as child }
                        <li class="col border">
                            <p>Node: {child.name}</p>
                            {#if child.children}
                                <p>{child.children.length} children</p>
                            {/if}
                            
                        </li>
                        {/each}
                    </ul>
                {/if}
            </div>
            
            <!-- {#if display.ancestors}
                <h5>{display.ancestors.length} ancestors</h5>
                <ul class="row">
                    {#each display.ancestors as ancestor }
                    <li class="col border">
                        <p>{ancestor.name}</p>
                    </li>
                    {/each}
                </ul>
            {/if} -->
        {/if}
        
    </div>
    <div class="col-8 border">
        <svg {width} {height}>
            <g class="everything" style="transform:translate(0px, 30px)">
                {#each treeX.links() as link }
                    <line 
                        x1={link.source.x}
                        x2={link.target.x}
                        y1={link.source.y}
                        y2={link.target.y}
                        stroke='green'
                    />
                {/each}
                {#each treeX.descendants() as d }
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <g
                        class="node"
                        on:mouseover={handleHover(d)}
                        on:click={addNode(d)}
                    >
                        <circle 
                            cx={d.x}
                            cy={d.y}
                            r=10
                            fill={(d.children)? 'green' : 'red'}
                        />
                        <text
                            x={d.x - 5}
                            y={d.y +5}
                            fill='black'
                        >
                            {d.data.name}
                        </text>
                    </g>
                    
                {/each}
            </g>
        </svg>
    </div>
    
</div>





<style>
    svg {
        background-color: black;
    }
    .node :hover {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    .sidebar {
        width: 100%;
        background-color: dark;
        height: 100%;
        border: 1px solid black;
    }
</style>
