<script>
	import Navbar from '$lib/navbar.svelte';
	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<title>Schedule | Beth & Josh</title>
	<meta name="description" content="Schedule" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<Header />

<Navbar />

<div class="schedule">
	<div style="margin: 1em;">
		<img src="/images/cathedralflying.jpg" alt="Beth and Josh in Gothic Quarter" />
	</div>
	<div class="content">
		<br />
		<h3>Friday, August 25</h3>
		<hr class="smalldivider" />
		<div class="activities">
			<p class="time">5:30PM</p>
			<p class="description">Rehearsal at the Best Place at the Historic Pabst Brewery</p>
		</div>
		<div class="activities">
			<p class="time">6:30PM</p>
			<p class="description">Rehearsal Dinner at City Lights Brewery</p>
		</div>
		<br />
		<h3>Saturday, August 26</h3>
		<hr class="smalldivider" />
		<div class="activities">
			<p class="time">2:00PM</p>
			<p class="description">Wedding party photos</p>
		</div>
		<div class="activities">
			<p class="time">4:30PM</p>
			<p class="description">Ceremony at the Best Place at the Historic Pabst Brewery</p>
		</div>
		<div class="activities">
			<p class="time">5:00 to 6:30PM</p>
			<p class="description">Photos and cocktail hour</p>
		</div>
		<div class="activities">
			<p class="time">6:30 to 11:00PM</p>
			<p class="description">Dinner and Reception</p>
		</div>
		<div class="activities">
			<p class="time">11:00PM to 2:00AM</p>
			<p class="description">After party at On Tap</p>
		</div>
		<br />
		<h3>Sunday, August 27</h3>
		<hr class="smalldivider" />
		<div class="activities">
			<p class="time">10:00AM</p>
			<p class="description">Brunch at the Klassen family household in Elm Grove, WI</p>
		</div>
		<br />
		<br />
	</div>
</div>

<style>
	* {
		animation: fadeIn ease 1.5s;
	}
	.schedule {
		display: block;
		text-align: center;
		margin: auto;
		font-family: Montserrat, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		width: 100%;
	}

	.content {
		width: 50%;
		display: block;
		text-align: center;
		margin: auto;
	}

	.activities {
		width: 100%;
		display: flex;
		flex-direction: row;
		text-align: left;
		margin-bottom: 1em;
	}

	.description {
		flex: 4;
		margin-left: 5em;
	}
	.time {
		flex: 1;
		margin-left: 2em;
	}
	@media screen and (max-width: 900px) {
		.content {
			width: 70%;
		}
		.activities,
		.time,
		.description {
			flex-direction: column;
			margin-left: 0;
			text-align: left;
		}

		.description {
			margin-top: 0em;
			margin-bottom: 1em;
		}
		h2,
		h3 {
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
			min-width: 75%;
			text-align: left;
		}

		.smalldivider {
			margin-bottom: 0.75em;
			min-width: 60%;
		}
	}

	h2 {
		text-align: center;
	}

	h3 {
		margin: 0 0 0.3em 0;
	}

	.smalldivider {
		border-top: 1px dotted green;
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
