<script>
    import { trelloStore } from "../stores/store"
    export let card
    export let board

    let titleVal = card.title
</script>

<div class="m-2 p-0 rounded text-white border">
    <div class="col text-align-right row">
        
        <h5>{card.name}</h5>
        <h5>{card.category_id}</h5>

        

        <input type="text" bind:value={card.name}>
    </div>
    <!-- <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {board.title}
          </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {#each $trelloStore as tcard}
                <a class="dropdown-item">{tcard.title}</a>
            {/each}
        </div>
    </div> -->
    

</div>

<style>
    input {
        background: rgb(80, 80, 80);
        border: none;
        color: deeppink;
        font: 'white';
    }
</style>