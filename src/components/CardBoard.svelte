<script>
    import { dndzone } from 'svelte-dnd-action'
    import { trelloStore } from '../stores/store';
    import { flip } from 'svelte/animate'
    import Card from "./Card.svelte"

    export let board

    $: items = board
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
        console.log('Details: ', e.detail.items)
    }
    async function handleFinal(e) {
        console.log('Finalize', e.detail.items[0].category_id)
        console.log('Finalize2', e.detail.items[e.detail.items.length -1].category_id)
        let destination  = e.detail.items[e.detail.items.length -1].category_id
        console.log('Destination', destination)
        let update = await fetch('http://localhost:8181/update/' + destination)
        // console.log(update)
    }
</script>

<div class="col rounded m-2 p-1 d-flex flex-column">
    <div class="row">
        <div class=" bg-dark d-inline-flex justify-content-around">
            <button class="btn btn-secondary btn-sm" on:click={addBtn}>+</button>
        </div>
    </div>
    <section use:dndzone={{items, flipDuration}} on:consider={handleSort} on:finalize={handleFinal} >
        
        {#each items as item(item.id)}
            <Card class='' card={item} board={board} />
        {/each}
    </section>
</div>

<style>

</style>