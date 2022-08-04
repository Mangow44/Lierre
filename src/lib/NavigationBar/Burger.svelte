<script>
	import { scale } from 'svelte/transition';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Close from 'svelte-material-icons/Close.svelte';

	export let collapse = false;
</script>

<div
	class="z-20 fixed left-2 top-2.5
    sm:invisible visible
    cursor-pointer"
	on:click={() => (collapse = !collapse)}
>
	{#if !collapse}
		<div in:scale>
			<Menu size={42} />
		</div>
	{:else}
		<div in:scale>
			<Close size={42} />
		</div>
	{/if}
</div>
