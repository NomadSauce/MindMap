<script>
    import CardBoard from "./CardBoard.svelte";
    import Card from "./Card.svelte";
    export let data
</script>


<div class="container-fluid border m-0 p-0 col-12 row w-100 d-inline-flex">
    <h5>Trello-Clone</h5>
    <div class="row">
        {#each data as board}
            <CardBoard board={board} width={data.length * 75} />
        {/each}`
    </div>
</div>