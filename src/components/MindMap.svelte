<script>
    import Graph from "./Graph.svelte";
    import SideBar from "./SideBar.svelte";
    import { nodeStore } from '../stores/store'

</script>

<h3>MindMap</h3>

<div class="col-12 border h-100 row">

    <div class="col-3 sidebar">
        <SideBar data={$nodeStore} />
    </div>
    <div class="col-9">
        <Graph data={$nodeStore} />
    </div>

</div>

<style>
</style>