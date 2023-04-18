<svelte:head>
	<title>Q&A | Beth & Josh</title>
	<meta name="description" content="Accommodations" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<div class="mainstuff">
	<div style="text-align: center;">
		<img src="/images/bridgeface.jpg" alt="Beth and Josh by a bridge" />
	</div>
	<br />
	<br />
	<img src="/dividersimple.svg" alt="" style="height: 1.5em; margin-top: 1.5em;"/>
	<h2>Questions</h2>
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
			href="https://goo.gl/maps/rT7jxJhA12kY8t55A"
			>nearby garage.</a
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
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
	* {
		animation: fadeIn ease 1.5s;
	}
	.mainstuff {
		display: flex;
		flex: 5;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: Montserrat, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	@media screen and (max-width: 900px) {
		h2,
		h3,
		p {
			min-width: 75%;
		}

		h2 {
			font-size: 1.1em;
			font-family: Merriweather;
			color: #424620;
		}

		h3 {
			font-size: 1em;
		}

		p {
			font-size: 1em;
		}
	}

	img {
		max-width: 100%;
		height: auto;
	}
	h2 {
		width: 55%;
		text-align: center;
		margin-top: .5em;
		margin-bottom: 0.2em;
		font-family: Merriweather;
		font-size: 2em;
		color: #424620;
	}

	h3 {
		width: 55%;
		text-align: left;
		margin-bottom: 0;
		color: #424620;
		font-weight: 600;
	}

	p {
		width: 55%;
		text-align: left;
		font-family: 'Montserrat', sans-serif;
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
