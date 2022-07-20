<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { pictures } from '$lib/Pictures/pictures';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte';
	import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
	import ChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';

	/**
	 * Ici les variables doivent être dynamiques à cause de goto
	 */
	$: picture = pictures.find((picture) => picture.url == $page.params.picture);
	$: index = pictures.indexOf(picture);

	const navigate = () => {
		let leftIndex;
		let rightIndex;
		if (index == 0) {
			leftIndex = pictures.length - 1;
			rightIndex = index + 1;
		} else if (index == pictures.length - 1) {
			leftIndex = index - 1;
			rightIndex = 0;
		} else {
			leftIndex = index - 1;
			rightIndex = index + 1;
		}

		return { leftIndex, rightIndex };
	};
</script>

<!-- PARTIE 1 : IMAGE -->
<div
	class="flex flex-col h-screen w-full pt-16
		min-h-[450px] min-w-[265px]"
>
	<button
		class="flex mt-3 mr-auto ml-3  
				text-sm font-medium
				hover:scale-105"
		on:click={() => goto('/galerie')}
	>
		<span class="my-auto"> <ChevronLeft /> </span>
		<p class="my-auto">RETOUR</p>
	</button>

	{#if picture}
		<div class="relative flex h-[calc(100vh-6rem)] w-full my-auto">
			<div
				class="absolute h-full w-[50%] left-0 bottom-0 
					sm:w-[30%]
					cursor-pointer noOutline"
				on:click={() => goto('/galerie/' + pictures[navigate().leftIndex].url, { noscroll: true })}
			/>

			<span class="flex justify-center w-[5%] my-auto mr-auto"> <ArrowLeft /> </span>
			<img class="max-h-[98%] max-w-[90%] m-auto" src={picture.src} alt={picture.name} />
			<span class="flex justify-center w-[5%] my-auto ml-auto"> <ArrowRight /> </span>

			<div
				class="absolute h-full w-[50%] right-0 bottom-0 
					sm:w-[30%]
					cursor-pointer noOutline"
				on:click={() => goto('/galerie/' + pictures[navigate().rightIndex].url, { noscroll: true })}
			/>
		</div>
	{:else}
		<div class="m-auto text-center">
			Désolé nous n'avons trouvé aucune image.
			<img src="/pictures/croped-cat.jpg" alt="Nothing found" class="max-w-[80%] mx-auto" />
		</div>
	{/if}
</div>

{#if picture}
	<!-- PARTIE 2 : INFORMATIONS -->
	<div class="flex flex-col h-full w-full">
		<span class="border-b border-black w-[50%] mx-auto mt-10" />
		<h1
			class="mx-auto mt-5
			text-2xl font-bold text-center"
		>
			{picture.name}
		</h1>
		{#if picture.description}
			<p class="mx-auto mt-5 text-center">
				{picture.description}
			</p>
		{/if}
		<p class="mx-auto mb-5">
			{picture.date}
		</p>
		<span class="border-t border-black w-[50%] mx-auto mb-10" />
	</div>
{/if}

<style>
	.noOutline {
		-webkit-tap-highlight-color: transparent; /* transparent with keyword */
	}
</style>
