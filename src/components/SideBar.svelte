<script>
    export let data

</script>




<div class="sidebar h-100">
    <h4 class="border">SideBar</h4>
        <p>{JSON.stringify(data.nodes)}</p>


</div>


<style>
    
    .sidebar {
        width: 100%;
        background-color: dark;
        height: 100%;
        border: 1px solid black;
    }
</style>