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

<div class="ourstory">
	<div style="text-align: center; margin-top: 1%; ">
		<img src="/images/waterreflection.jpg" alt="Beth and Josh in Gothic Quarter" />
	</div>
	<h2>Our Story</h2>
	<hr class="smalldivider" />
	<p>
		Beth and Josh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi.
		Ultrices tincidunt arcu non sodales neque sodales ut. Volutpat lacus laoreet non curabitur
		gravida. Libero id faucibus nisl tincidunt eget nullam non. Id consectetur purus ut faucibus.
		Quis viverra nibh cras pulvinar mattis. Est lorem ipsum dolor sit amet consectetur adipiscing
		elit. Odio eu feugiat pretium nibh. Et tortor consequat id porta nibh.
	</p>
	<br />
	<br />
</div>

<style>
	.ourstory {
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
</style>
