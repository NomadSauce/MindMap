<script>
    import Graph from "./Graph.svelte";
    import SideBar from "./SideBar.svelte";
    import DecisionTree from "./DecisionTree.svelte";
    import LinkTree from './LinkTree.svelte'
    import { nodeStore, nodeStore2 } from '../stores/store'

</script>

<h3>MindMap</h3>

<div class="col-12 border h-100 row">

    <div class="col-3 sidebar">
        <!-- <SideBar data={$nodeStore2} /> -->
    </div>
    <div class="col-9">
        <!-- <DecisionTree data={$nodeStore} /> -->
        <LinkTree data={$nodeStore} />
        <!-- <Graph data={$nodeStore} /> -->
    </div>

</div>

<style>
</style>