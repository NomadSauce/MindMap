<script>
    import { trelloStore } from "../stores/store"
    export let card
    export let board

    let titleVal = card.title

    let categories = ['Todo', 'In-Progress', 'Done', 'Hold']


    async function delTodo(todo) {
        console.log('Delete Todo:', todo)
        let id = todo.id
        let res = await fetch('http://localhost:8181/del/' + id, {
            method: 'DELETE',
        })
        return res
    }

    function moveTodo(direction) {
        console.log('Move Direction', direction)
    }

    function moveLeft() {

    }
</script>

<div class="m-2 p-0 rounded text-white">
    <div class="col text-align-right row">
        <div class='col todo d-flex justify-content-between'>
            <!-- <button on:click={moveTodo('left')} class='btn btn-dark btn-sm'>&larr;</button> -->
            <h3 class=''>{card.name}</h3>
            <!-- <h4>{JSON.stringify(card)}</h4> -->
            <!-- <h4>{JSON.stringify(board)}</h4> -->
            <button on:click={delTodo(card)} class='btn btn-dark btn-sm'>X</button>
            <!-- <button on:click={moveTodo('right')} class='btn btn-dark btn-sm'>&rarr;</button> -->
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {card.category_id}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {#each categories as category}
                        <button on:click={() => todoCategory = category} >{category}</button>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    input {
        background: rgb(0, 0, 0);
        border: 1px solid rgb(85, 85, 85);
        border-radius: 15px;
        color: rgb(94, 94, 94);
        font: 'white';
    }

    .todo {
        background: rgb(0, 0, 0);
        border: 1px solid rgb(85, 85, 85);
        border-radius: 15px;
        color: rgb(94, 94, 94);
        font: 'white';
        overflow: hidden;
    }

</style>