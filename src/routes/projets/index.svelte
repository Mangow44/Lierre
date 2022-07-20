<script>
	import { projets } from '$lib/Pictures/projets';
	import BlocProjet from './Bloc.svelte';
</script>

{#each projets as projet}
	<BlocProjet {projet} />
{/each}
