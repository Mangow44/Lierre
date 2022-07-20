<script>
	import '../app.css';
	import NavigationBar from '$lib/NavigationBar/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
</script>

<NavigationBar />
<slot />
<Footer />
