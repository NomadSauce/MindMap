<script>
    export let data
    $: nodes = data.nodes
    $: links = data.links

</script>




<div class="sidebar h-100">
    <h4 class="border">SideBar</h4>
    {#each nodes as node }
    <div class="row border">
        <p>{node.id}</p>
        <p>{node.label}</p>
    </div>
    {/each}
    {#each links as link }
    <div class="row border">
        <p>{link.start}</p>
        <p>{link.target}</p>
    </div>
    {/each}

        <!-- <p>{JSON.stringify(data.nodes)}</p> -->
</div>


<style>
    
    .sidebar {
        width: 100%;
        background-color: dark;
        height: 100%;
        border: 1px solid black;
    }
</style>