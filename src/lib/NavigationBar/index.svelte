<script>
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import Mobile from './Mobile.svelte';
	import Burger from './Burger.svelte';
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';
	import { bind } from 'svelte/internal';

	/**
	 * 	Selected prend l'url de la page
	 * 	Si jamais il correspond à un url du tableau navigation
	 * 	Cet élément sera souligné
	 */
	$: selected = $page.url.pathname;

	let navigation = [
		{ name: 'Galerie', url: '/galerie' },
		{ name: 'Projets', url: '/projets' },
		{ name: 'À propos', url: '/apropos' },
		{ name: 'Contact', url: '/contact' }
	];

	let collapse = false;

	afterNavigate(() => {
		collapse = false;
	});
</script>

<nav
	class="fixed flex h-[4rem] w-full z-10
		bg-white"
>
	<!-- logo -->
	<Logo bind:selected />

	<!-- navigation -->
	<Navigation {navigation} {selected} />

	<!-- burger-->
	<Burger bind:collapse />

	<!-- mobile navigation -->
	{#if collapse}
		<Mobile {navigation} {selected} bind:collapse />
	{/if}
</nav>
