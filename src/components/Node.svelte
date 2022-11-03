<script>
    export let node

    function addNode(node) {
        console.log('Add Node:', node)
    }
</script>

<g>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- <circle 
        on:click={addNode(node)}
        cx={options.width/2}
        cy={options.height/2}
        r=25
        fill= 'red'
    /> -->
</g>