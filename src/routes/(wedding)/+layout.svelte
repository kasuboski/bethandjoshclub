<script>
	import Navbar from '$lib/navbar.svelte';
	import Header from '$lib/header.svelte';
	import Weddinginfo from '$lib/weddinginfo.svelte';
</script>

<svelte:head>
	<title>Beth and Josh Wedding</title>
	<meta name="description" content="Beth and Josh" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<Header />

<Navbar />

<slot />

<Weddinginfo />
<img id="footer" alt="" src="/longbottomborder.svg"/>

<style>
	* {
		font-family: Montserrat, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	#footer {
		margin: 0;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
