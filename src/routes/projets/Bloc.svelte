<script>
	export let projet = null;
</script>

{#if projet}
	<div
		class="flex flex-col h-screen w-full pt-16
            min-h-[450px] min-w-[265px]
            sm:flex-row"
	>
		<img
			class="h-auto w-[15rem] m-auto
                sm:w-[30%] sm:ml-auto"
			src={projet.src}
			alt={projet.name}
		/>
		<div
			class="flex flex-col h-auto w-auto m-auto mt-1 
            overflow-auto p-2
            sm:mr-auto sm:my-auto sm:max-w-[600px] "
		>
			<h1 class="mx-auto font-medium">
				{projet.name}
			</h1>
			<p class="mx-auto text-justify">{projet.description}</p>
		</div>
	</div>

	<div class="flex flex-wrap justify-center h-auto w-full">
		{#each projet.pictures as pic}
			<img class="h-[24rem] w-[24rem] m-2" style="object-fit: cover;" src={pic.src} alt={pic.alt} />
		{/each}
	</div>
{/if}
