<script>
	import { afterNavigate, goto } from '$app/navigation';

	export let navigation = [];
	export let selected = '';
</script>

<ul
	class="flex my-auto ml-auto mx-3 
            sm:visible invisible
			font-washington"
	style="font-size: 20px;"
>
	{#each navigation as page}
		<li
			class="mx-2
                    hover:scale-110 cursor-pointer
                    {selected == page.url ? 'underline' : ''}"
			on:click={() => {
				goto(page.url);
			}}
		>
			{page.name}
		</li>
	{/each}
</ul>
