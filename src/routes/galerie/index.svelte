<script>
	import { goto } from '$app/navigation';
	import { pictures } from '$lib/Pictures/pictures';

	// pour rendre la galerie plus fluide il faut faire apparaitres des images quand on arrive en bas de la page
</script>

<div
	class="flex flex-wrap justify-center h-auto w-full pt-16
		min-h-[450px] min-w-[265px]"
>
	{#each pictures as picture}
		<div
			class="h-auto w-auto m-2 
                cursor-pointer 
                hover:filter hover:brightness-110 transition"
			on:click={() => goto('/galerie/' + picture.url)}
		>
			<img
				src={picture.src}
				alt={picture.name}
				style="object-fit: cover;"
				class="h-[26rem] w-[26rem]
					fade-in-anim"
			/>
		</div>
	{/each}
</div>
