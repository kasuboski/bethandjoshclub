<script>
    /** @type {import('./$types').PageData} */
	export let data;
	$: registryURLs = data.registryURLs;
</script>

<svelte:head>
	<title>Our Story | Beth & Josh</title>
	<meta name="description" content="Our Story" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<div class="registry">
	<div style="text-align: center; margin-top: 1%; ">
		<img src="/images/gothicspin.jpg" alt="Beth and Josh being snooty" />
	</div>
	<img src="/dividersimple.svg" alt="" style="height: 1.5em; margin-top: 1.5em;"/>
	<h2>Registry</h2>
	<!-- <hr class="smalldivider" /> -->
	<p>If you'd like to help us with take a honeymoon trip use the link below to add to our honeymoon fund.</p>
	<br />
	<br />

	<button class="button"><a href={registryURLs.honeymoon}>Honeymoon Fund</a></button>
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
		font-family: Montserrat, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	button a {
		text-decoration: none;
	}
	a {
		color: #E7A423;
	}

	button a:hover {
		text-decoration-line: underline;
	}

	.button {
		padding: .5em;
		font-size: large;
		background-color: #775826;
		border-radius: 3px;
		border: none;
	}

	@media screen and (max-width: 900px) {
		h2,
		p {
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
		font-family: Merriweather;
		font-size: 2em;
		color: #424620;
	}

	p {
		width: 60%;
		text-align: center;
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
