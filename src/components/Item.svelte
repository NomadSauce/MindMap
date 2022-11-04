<script>
    import Item from './Item.svelte'
    import { createEventDispatcher } from 'svelte'

    export let node
    export let lastChild

    const dispatch = createEventDispatcher()

    const addSibling = (e) => {
        console.log('Item: AddSibling', e)

        dispatch('addItem', {
            id: Math.random(),
            name: '',
            parent: node.parent.data.id,
        })
    }

    const addItem = (e) => {
        console.log('Item: AddItem', e)

        dispatch('addItem', {
            id: Math.random(),
            name: '',
            parent: node.data.id
        })
    }

    const bubbleUpAdd = (e) => {
        console.log('Item:bubbleUpAdd', e)

        dispatch('addItem', e.detail)
    }

    const deleteItem = (e) => {
        console.log('Item: Delete Item', e, node.children)

        dispatch('deleteItem', { id: node.data.id })
    }

    const bubbleUpDelete = (e) => {
        console.log('Item: bubbleUpDelete', e)
        dispatch('deleteItime', e.detail)
    }

</script>

<div style='margin-left: {node.depth * 40}px;'>
    <input type='text' />
    {#if !node.children}
        <button on:click={addItem}>Add</button>
        {#if !node.children && node.depth > 0}
            <button on:click={deleteItem}>Delete</button>
        {/if}
    {/if}
</div>
{#if node.children}
    {#each node.children as child, i}
        <Item 
            node={child}
            lastChild={i === node.children.length - 1}
            on:addItem={bubbleUpAdd}
            on:deleteItem={bubbleUpDelete}
        />
    {/each}
{/if}
{#if lastChild && node.depth > 0}
    <div style='margin-left: {node.depth * 40}px;'>
        <button on:click={addSibling}>Add</button>
    </div>
{/if}