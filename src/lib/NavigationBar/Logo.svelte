<script>
	import { goto } from '$app/navigation';

	export let selected = '';
</script>

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
