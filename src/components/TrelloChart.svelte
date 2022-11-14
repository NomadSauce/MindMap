<script>
    import CardBoard from "./CardBoard.svelte";
    import { onMount } from "svelte";
    // import { get } from '../server'
    import Card from "./Card.svelte";
    import { todoStore } from "../stores/store";
    // import { createNote } from '../lib/db.js'
    export let data

    onMount(async () => {
        let result = await fetch('http://localhost:8181/todos')
        const todos = await result.json()
        $todoStore = todos
    })


    let todoVal = 'Todo'

    async function sendForm(data) {
        console.log('Send Form', data)
        let todo = {
            id: Math.floor((Math.random() * 100000) + 1),
            name: data,
            todo: 'false'
        }
        let result = await fetch('http://localhost:8181/todos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(todo)
        }
        )
        return result
    }
    

    async function updateDB() {
        
        const todos = await result.json()
        console.log('Store: ', todos)
        $todoStore = todos
    }
</script>


<div class="container-fluid border m-0 p-0 col-12 row w-100 d-inline-flex">
    <h5>Trello-Clone {$todoStore.length}</h5>
    <div class='row m-2'>
        <div class='col-3 border'>
            <input bind:value={todoVal} type="text" placeholder={todoVal}>
        </div>
        <div class='col-9 border'>
            <button class='btn btn-dark btn-sm' on:click={sendForm(todoVal)}>
                Send Form
            </button>
            <button class='btn btn-dark btn-sm' on:click={updateDB(todoVal)}>
                Update DB
            </button>
        </div>
    </div>

    
    <div class='row d-flex-inline'>
        {#if $todoStore.length > 0}
            {#each $todoStore as todo, index }
                <div class='row p-3 m-3 border'>
                    {index}
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