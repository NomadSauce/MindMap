<script>
    import { dndzone } from 'svelte-dnd-action'
    import { flip } from 'svelte/animate'
    import Card from "./Card.svelte"

    export let board
    export let width

    $: items = board.todos
    const flipDuration = 200

    function addBtn() {
        console.log('Add:', board.todos)
        let temp = {
            title: 'New Todo',
            id: Math.random(),
            sublist: []
        }
        board.todos = [...board.todos, temp]
    }

    function handleSort(e) {
        items = e.detail.items
    }
</script>

<div class="col border rounded m-2 p-1 d-flex flex-column">
    <div class="card row">
        <div class="card-header bg-dark d-inline-flex justify-content-around">
            <h5>{board.title}</h5>
            <button class="btn btn-secondary btn-sm" on:click={addBtn}>+</button>
        </div>
    </div>
    <section use:dndzone={{items, flipDuration}} on:consider={handleSort} on:finalize={handleSort} >
        
        {#each items as item(item.id)}
            <Card card={item} board={board} />
        {/each}
    </section>
    
    
</div>