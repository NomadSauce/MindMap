<script>
    export let card
    export let board

    $: titleVal = card.title
</script>

<div class="m-2 p-0 rounded fled d-inline-flex text-white">
    <input type="text" bind:value={card.title}>
    <!-- {card.title} -->
    <h6 class="">{card.status}</h6>

</div>

<style>
    input {
        background: none;
        border: none;
        font: 'white';
    }
</style>