<script>
	import Navbar from '$lib/navbar.svelte';
	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<title>Q&A | Beth & Josh</title>
	<meta name="description" content="Accommodations" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<Header />

<Navbar />

<div class="mainstuff">
	<div style="text-align: center;">
		<img src="/images/bridgefacecrop.jpeg" alt="Beth and Josh by a bridge" />
	</div>
	<br />
	<br />
	<hr class="smalldivider" />
	<h2>Questions</h2>
	<hr class="smalldivider" />
	<h3>When do I need to RSVP?</h3>
	<p>Please RSVP before May 30, 2023.</p>
	<h3>Can I bring a date?</h3>
	<p>Yes! Please indicate on your RSVP.</p>
	<h3>Are kids welcome?</h3>
	<p>Absolutely! Please indicate the number of kids and any highchairs needed on your RSVP.</p>
	<h3>What should I wear to the wedding?</h3>
	<p>This is a once in a lifetime event for us, so we'd love for you to dress up!</p>
	<h3>What colors are the wedding party wearing?</h3>
	<p>
		The bridal party will be wearing burnt orange attire, and the wedding colors are shades of olive
		green.
	</p>
	<h3>Is there parking?</h3>
	<p>
		We encourage you to take a cab or walk if you are staying nearby, otherwise there is parking at
		the <a
			href="https://www.google.com/maps/place/Brewery+Parking+Structure/@43.0457378,-87.9246908,18z/data=!4m12!1m6!3m5!1s0x8805197097bbc625:0x520f6810dd74598d!2sBest+Place+at+the+Historic+Pabst+Brewery!8m2!3d43.0455111!4d-87.9233972!3m4!1s0x88051995855600b7:0xda5d12a2f242fc59!8m2!3d43.0463128!4d-87.9232916"
			>Brewery District Garage.</a
		>
	</p>
	<h3>Who can I reach out to with questions?</h3>
	<p>Please reach out to Beth and Josh directly.</p>
	<br />
	<br />
	<br />
	<br />
</div>

<style>
	* {
		animation: fadeIn ease 1.5s;
	}
	.mainstuff {
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
		p,
		.smalldivider {
			min-width: 75%;
		}

		h2 {
			font-size: 1.1em;
		}

		h3 {
			font-size: 1em;
		}

		p {
			font-size: 1em;
		}

		.smalldivider {
			margin: 0;
		}
	}

	img {
		max-width: 100%;
		height: auto;
	}
	h2 {
		width: 55%;
		text-align: center;
		margin: 0.5em;
	}

	h3 {
		width: 55%;
		text-align: left;
		margin-bottom: 0;
	}

	.smalldivider {
		width: 55%;
		border-top: 1px dotted green;
	}

	p {
		width: 55%;
		text-align: left;
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
