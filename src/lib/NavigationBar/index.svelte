<script>
	import { page } from '$app/stores';
	import { scale, fly, fade } from 'svelte/transition';
	import { afterNavigate, goto } from '$app/navigation';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import Close from 'svelte-material-icons/Close.svelte';

	/**
	 * 	Selected prend l'url de la page
	 * 	Si jamais il correspond à un url du tableau navigation
	 * 	Cet élément sera souligné
	 */
	$: selected = $page.url.pathname;

	let collapse = false;
	let navigation = [
		{ name: 'Galerie', url: '/galerie' },
		{ name: 'Projets', url: '/projets' },
		{ name: 'À propos', url: '/apropos' },
		{ name: 'Contact', url: '/contact' }
	];

	afterNavigate(() => {
		collapse = false;
	});
</script>

<nav
	class="fixed flex h-[4rem] w-full z-10
		bg-white"
>
	<!-- logo -->
	<div
		class="fixed h-auto w-full min-w-[300px] 
			sm:w-auto"
	>
		<h1
			class="mt-3 text-center 
				font-morris text-5xl
				hover:scale-110 cursor-pointer"
			on:click={() => {
				selected = '';
				goto('/');
			}}
		>
			LIERRE
		</h1>
	</div>

	<!-- navigation -->
	<ul
		class="flex my-auto ml-auto mx-3 
            sm:visible invisible"
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

	<!-- burger-->
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

	<!-- mobile navigation -->
	{#if collapse}
		<ul
			transition:fly={{ x: -window.innerWidth * 0.6, duration: 500, opacity: 1 }}
			class="z-10 fixed left-0 h-screen w-[60%] pt-[7rem]
				flex flex-col 
				sm:invisible visible
				bg-c-cream"
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
	{/if}
</nav>
