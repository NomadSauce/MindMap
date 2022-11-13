<script>
    import CardBoard from "./CardBoard.svelte";
    // import { get } from '../server'
    import Card from "./Card.svelte";
    export let data

    function tryDB() {
        let test = get()
        console.log('DB:', test)
    }
</script>


<div class="container-fluid border m-0 p-0 col-12 row w-100 d-inline-flex">
    <h5>Trello-Clone</h5>
    <button on:click={tryDB}>
        Connect to DB
       </button>
    <div class="row">
        <section class="d-inline-flex">
            {#each data as board}
            <div class="card col">
                <CardBoard board={board} width={data.length * 75} />
            </div>
            {/each}
        </section>
        
    </div>
</div>