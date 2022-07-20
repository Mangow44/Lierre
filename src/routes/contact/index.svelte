<script>
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Instagram from 'svelte-material-icons/Instagram.svelte';
	import Pinterest from 'svelte-material-icons/Pinterest.svelte';
	import EmailOutline from 'svelte-material-icons/EmailOutline.svelte';

	let socialNetworks = ['Twitter', 'Instagram', 'Pinterest', 'Email'];
</script>

<div
	class="flex flex-col h-[calc(100vh-5rem)] w-screen pt-16
        min-h-[450px] min-w-[265px]"
>
	<div class="my-auto">
		<img src="/pictures/croped-cat.jpg" alt="Looking at you" class="max-w-[80%] mx-auto" />
		<h1 class="text-center">Retrouvez moi sur vos réseaux sociaux.</h1>
	</div>

	<ul
		class="flex flex-col items-center 
            h-auto w-full m-auto
            font-medium"
	>
		{#each socialNetworks as sn}
			<li class="flex cursor-pointer hover:scale-110 my-1">
				{#if sn == 'Twitter'}
					<span class="mr-3"><Twitter size={26} /></span>
				{:else if sn == 'Instagram'}
					<span class="mr-3"><Instagram size={26} /></span>
				{:else if sn == 'Pinterest'}
					<span class="mr-3"><Pinterest size={26} /></span>
				{:else if sn == 'Email'}
					<span class="mr-3"><EmailOutline size={26} /></span>
				{/if}

				{sn}
			</li>
		{/each}
	</ul>

	<p class="m-auto font-medium text-sm my-[2rem]">
		Site développé par
		<span class=" underline cursor-pointer">Thomas Clouet</span>
		.
	</p>
</div>
