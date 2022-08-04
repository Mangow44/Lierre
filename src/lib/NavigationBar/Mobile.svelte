<script>
	import { goto } from '$app/navigation';
	import { fly, fade } from 'svelte/transition';

	export let navigation = [];
	export let selected = '';
	export let collapse = false;
</script>

<ul
	transition:fly={{ x: -window.innerWidth * 0.6, duration: 500, opacity: 1 }}
	class="fixed left-0 h-screen w-[60%] pt-[7rem] z-10 
        flex flex-col 
        sm:invisible visible
        font-washington bg-c-cream"
>
	{#each navigation as page}
		<li
			class="ml-4 my-3
                text-2xl font-medium 
                cursor-pointer hover:scale-105
                {selected == page.url ? 'underline' : ''}"
			on:click={() => {
				goto(page.url);
			}}
		>
			{page.name}
		</li>
	{/each}
</ul>

<!-- background fade -->
<div
	transition:fade
	class="absolute h-screen w-screen 
				sm:invisible visible
				opacity-60 bg-c-cream"
	on:click={() => (collapse = false)}
/>
