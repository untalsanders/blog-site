<script lang="ts">
    function greet() {
        alert("Welcome to Svelte!")
    }
</script>

<button onclick={greet}>Click me</button>

<style>
    button {
        font-size: 2em;
    }
</style>