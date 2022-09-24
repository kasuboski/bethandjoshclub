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
	<div style="margin-top: 1%;">
		<img src="/images/cathedralflying.jpg" alt="Beth and Josh in Gothic Quarter" />
	</div>
	<h2>Wedding Schedule</h2>
	<br />
	<h3>Friday, August 25</h3>
	<hr class="smalldivider" />
	<p>6:30PM Rehearsal Dinner</p>
	<br />
	<h3>Saturday, August 26</h3>
	<hr class="smalldivider" />
	<p>4:00PM Ceremony</p>
	<br />
	<h3>Sunday, August 27</h3>
	<hr class="smalldivider" />
	<p>10:00AM Brunch</p>
</div>

<style>
	* {
		animation: fadeIn ease 1.5s;
	}
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
		h3,
		p {
			min-width: 75%;
			text-align: center;
		}

		h2 {
			font-size: 1.25em;
		}

		h3 {
			font-size: 1.1em;
			text-align: center;
		}

		p {
			font-size: 1em;
		}

		.smalldivider {
			margin: 0;
			min-width: 60%;
		}
	}

	h2 {
		width: 50%;
		text-align: center;
	}

	h3 {
		width: 50%;
		margin: 0 0 0.3em 0;
	}

	.smalldivider {
		width: 50%;
		border-top: 1px dotted green;
	}

	p {
		width: 50%;
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
