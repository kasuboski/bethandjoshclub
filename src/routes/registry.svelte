<script>
	import Navbar from '$lib/navbar.svelte';
	import Header from '$lib/header.svelte';
	import Weddinginfo from '$lib/weddinginfo.svelte';
</script>

<svelte:head>
	<title>Our Story | Beth & Josh</title>
	<meta name="description" content="Our Story" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<Header />

<Navbar />

<div class="registry">
	<div style="text-align: center; margin-top: 1%; ">
		<img src="/images/gothicsnooty.jpg" alt="Beth and Josh being snooty" />
	</div>
	<h2>Registry</h2>
	<hr class="smalldivider" />
	<p>More info</p>
	<br />
	<br />
</div>

<style>
	* {
		animation: fadeIn ease 1.5s;
	}
	.registry {
		display: flex;
		flex: 5;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	@media screen and (max-width: 900px) {
		h2,
		p,
		.smalldivider {
			min-width: 75%;
		}

		h2 {
			font-size: 1.25em;
			margin: 1em 0em 0.2em 0em;
		}

		p {
			font-size: 1em;
		}
	}

	h2 {
		width: 40%;
		text-align: center;
	}

	.smalldivider {
		width: 60%;
		border-top: 1px dotted green;
	}

	p {
		width: 60%;
	}

	img {
		max-width: 100%;
		height: auto;
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
