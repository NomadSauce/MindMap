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

<div class="m-2 p-0 rounded text-white">
    <div class="col text-align-right row">
        <div class='col todo d-flex justify-content-between'>
            <button class='btn btn-dark btn-sm'>&larr;</button>
            <h3 class=''>{card.name}</h3>
            <button on:click={delTodo(card)} class='btn btn-dark btn-sm'>X</button>
            <button class='btn btn-dark btn-sm'>&rarr;</button>

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