<script>
    import Card from "./Card.svelte"
    export let board
    export let width

    function addBtn() {
        console.log('Add:', board.todos)
        let temp = {
            title: 'New Todo',
            status: 'Todo',
            sublist: []
        }
        board.todos = [...board.todos, temp]
    }
</script>

<div class="col border rounded m-2 p-1 d-flex flex-column">
    <div class="card">
        <div class="card-header bg-dark d-inline-flex justify-content-around">
            <h5>{board.title}</h5>
            <button class="btn btn-secondary btn-sm" on:click={addBtn}>+</button>

        </div>

    </div>
    {#each board.todos as task}
        <Card card={task} board={board} />
    {/each}
</div>