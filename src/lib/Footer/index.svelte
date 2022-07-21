<script>
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Instagram from 'svelte-material-icons/Instagram.svelte';
	import Pinterest from 'svelte-material-icons/Pinterest.svelte';

	let size = 21;
	let socialNetworks = [
		{ name: 'Twitter', url: 'https://twitter.com/lierre_art' },
		{ name: 'Instagram', url: 'https://www.instagram.com/lierre_art/' },
		{ name: 'Pinterest', url: 'https://pin.it/2aZ8cTK' }
	];
</script>

<div class="flex flex-col h-[5rem] w-full">
	<p class="m-auto text-center font-medium text-xs">
		© 2023 - Anaïs Vautier
		<br /> Tous droits réservés
	</p>

	<ul
		class="flex m-auto 
			cursor-pointer"
	>
		{#each socialNetworks as sn}
			<li class="px-1 hover:scale-110" on:click={() => window.open(sn.url, '_blank').focus()}>
				{#if sn.name == 'Twitter'}
					<Twitter {size} />
				{:else if sn.name == 'Instagram'}
					<Instagram {size} />
				{:else if sn.name == 'Pinterest'}
					<Pinterest {size} />
				{/if}
			</li>
		{/each}
	</ul>
</div>
