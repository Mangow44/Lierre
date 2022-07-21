<script>
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Instagram from 'svelte-material-icons/Instagram.svelte';
	import Pinterest from 'svelte-material-icons/Pinterest.svelte';
	import EmailOutline from 'svelte-material-icons/EmailOutline.svelte';

	let socialNetworks = [
		{ name: 'Twitter', url: 'https://twitter.com/lierre_art' },
		{ name: 'Instagram', url: 'https://www.instagram.com/lierre_art/' },
		{ name: 'Pinterest', url: 'https://pin.it/2aZ8cTK' },
		{ name: 'Email', url: 'lipazaran.is.here@gmail.com' }
	];
</script>

<div
	class="flex flex-col h-[calc(100vh-5rem)] w-full pt-16
        min-h-[450px] min-w-[265px]"
>
	<div class="my-auto">
		<img
			src="/pictures/croped-cat.jpg"
			alt="Looking at you"
			class="max-w-[80%] mx-auto
				fade-in-anim"
		/>
		<h1 class="text-center">Retrouvez moi sur vos réseaux sociaux.</h1>
	</div>

	<ul
		class="flex flex-col items-center 
            h-auto w-full m-auto
            font-medium"
	>
		{#each socialNetworks as sn}
			<li
				class="flex cursor-pointer hover:scale-110 my-1"
				on:click={() => {
					if (sn.name == 'Email') {
						location.href = 'mailto:' + sn.url;
						return;
					}
					window.open(sn.url, '_blank').focus();
				}}
			>
				{#if sn.name == 'Twitter'}
					<span class="mr-3"><Twitter size={26} /></span>
				{:else if sn.name == 'Instagram'}
					<span class="mr-3"><Instagram size={26} /></span>
				{:else if sn.name == 'Pinterest'}
					<span class="mr-3"><Pinterest size={26} /></span>
				{:else if sn.name == 'Email'}
					<span class="mr-3"><EmailOutline size={26} /></span>
				{/if}

				{sn.name}
			</li>
		{/each}
	</ul>

	<p class="m-auto font-medium text-sm my-[2rem]">
		Site développé par
		<span
			class="underline cursor-pointer"
			on:click={() => {
				window.open('https://www.linkedin.com/in/thomas-clouet-7379241a3/', '_blank').focus();
			}}
		>
			Thomas Clouet
		</span>
		.
	</p>
</div>
