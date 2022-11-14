<script>
    import CardBoard from "./CardBoard.svelte";
    import { onMount } from "svelte";
    // import { get } from '../server'
    import Card from "./Card.svelte";
    import { todoStore } from "../stores/store";
    // import { getNotes } from '../lib/db.js'
    export let data

    onMount(async () => {
        let result = await fetch('http://localhost:8181/todos')
        const todos = await result.json()
        $todoStore = todos

    })
    

    async function tryDB() {
        let result = await fetch('http://localhost:8181/todos')
        const todos = await result.json()
        console.log('Store: ', todos)
        $todoStore = todos
    }
</script>


<div class="container-fluid border m-0 p-0 col-12 row w-100 d-inline-flex">
    <h5>Trello-Clone</h5>
    <button class='btn btn-dark btn-sm' on:click={tryDB}>
        Connect to DB
       </button>
    <div class='row d-flex-inline'>
        {#if $todoStore.length > 0}
            {#each $todoStore as todo }
                <div class='row p-3 m-3 border'>
                    {todo.id}
                    {todo.name}
                    {todo.todo}
                </div>
            {/each}
        {/if}
    </div>
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