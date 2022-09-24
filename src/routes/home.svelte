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

<div style="text-align: center; margin-top: 1%;">
	<img src="/images/stairsSitting.jpg" alt="Beth and Josh sitting" />
</div>

<hr />
<Weddinginfo />
<br />
<br />

<style>
	hr {
		width: 90%;
		border-top: 2px dotted green;
		margin-top: 2%;
		margin-bottom: 3%;
		animation: fadeIn ease 1.5s;
	}

	img {
		max-width: 100%;
		height: auto;
		animation: fadeIn ease 1.5s;
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
