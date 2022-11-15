<script>
    import { trelloStore } from "../stores/store"
    export let card
    export let board

    let titleVal = card.title

    async function delTodo(todo) {
        console.log('Delete Todo:', todo)
        let id = todo.id
        let res = await fetch('http://localhost:8181/del/' + id, {
            method: 'DELETE',
        })
        return res
    }
</script>

<div class="m-2 p-0 rounded text-white border">
    <div class="col text-align-right row">
        
        <h5>{card.name}</h5>
        <h5>{card.category_id}</h5>
        <button on:click={delTodo(card)} class='btn btn-dark btn-sm'>X</button>


        

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