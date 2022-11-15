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
    let todoCategory = 'Todo'
    let categories = ['Todo', 'In-Progress', 'Done', 'Hold']
    $: todoList = $todoStore
    $: doList = $todoStore.filter(el => el.category_id === 'Todo')
    $: ipList = $todoStore.filter(el => el.category_id === 'In-Progress')
    $: doneList = $todoStore.filter(el => el.category_id === 'Done')
    $: holdList = $todoStore.filter(el => el.category_id === 'Hold')


    

    async function sendForm(data, cat) {
        console.log('Send Form', data, cat)
        let todo = {
            id: Math.floor((Math.random() * 100000) + 1),
            name: data,
            category_id: cat
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
        let result = await fetch('http://localhost:8181/todos')
        const todos = await result.json()
        console.log('Store: ', todos)
        $todoStore = todos
    }

    async function delTodo(todo) {
        console.log('Delete Todo:', todo)
        let id = todo.id
        let res = await fetch('http://localhost:8181/del/' + id, {
            method: 'DELETE',
        })
        return res
    }
</script>


<div class="container-fluid border m-0 p-0 col-12 row w-100 d-inline-flex">
    <h5>Trello-Clone {$todoStore.length}</h5>
    <div class='row m-2'>
        <div class='col-4 border row'>
            <div class='col'>
                <input bind:value={todoVal} type="text" placeholder={todoVal}>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {todoCategory}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {#each categories as category}
                        <button on:click={() => todoCategory = category} >{category}</button>
                    {/each}
                </div>
              </div>


        </div>
        <div class='col-8 border p-1'>
            <button class='btn btn-dark btn-sm' on:click={sendForm(todoVal, todoCategory)}>
                Send Form
            </button>
            <button class='btn btn-dark btn-sm' on:click={updateDB(todoVal)}>
                Update DB
            </button>
        </div>
    </div>

    
    <div class='col-6'>
        <!-- {#if todoList.length > 0}
            {#each $todoStore as todo, index }
                <div class='row p-3 m-3 border d-flex-inline col-12'>
                    {index}
                    {todo.id}
                    {todo.name}
                    {todo.category_id}
                    <button on:click={delTodo(todo)} class='btn btn-dark btn-sm'>X</button>
                </div>
            {/each}
        {/if} -->
    </div>
    <div class="row">
        <section class="d-inline-flex">
            <div class='border'>
                <h5>ToDo</h5>
                {#each doList as todo }
                    <!-- <h5>{}</h5> -->
                    <Card card={todo} />
                {/each}
            </div>
            <!-- {#each data as board}
            <div class="card col">
                <CardBoard board={board} width={data.length * 75} />
            </div>
            {/each} -->
        </section>
        
    </div>
</div>

<style>
    .border {
        border-radius: 15px!important;
        border-color: darkslategray!important;
    }
</style>