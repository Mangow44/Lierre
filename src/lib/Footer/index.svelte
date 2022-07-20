<script>
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Instagram from 'svelte-material-icons/Instagram.svelte';
	import Pinterest from 'svelte-material-icons/Pinterest.svelte';

	let size = 21;
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
		<li class="px-1 hover:scale-110"><Twitter {size} /></li>
		<li class="px-1 hover:scale-110"><Instagram {size} /></li>
		<li class="px-1 hover:scale-110"><Pinterest {size} /></li>
	</ul>
</div>
