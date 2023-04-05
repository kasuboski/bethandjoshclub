<svelte:head>
	<title>Travel | Beth & Josh</title>
	<meta name="description" content="Accommodations" />
	<meta property="og:image" content="/welcometotheclub.gif" />
</svelte:head>

<div class="ourstory">
	<div style="margin-top: 1%;">
		<img src="/images/gothicstroll.jpg" alt="Beth and Josh walking" />
	</div>
	<br />
	<br />

	<h2>Getting there</h2>

	<p>
		For out-of-state travellers, we recommend flying into General Mitchell Airport or O'Hare. The
		Milwaukee airport is about 20 minutes from the venue. If you fly to Milwaukee, you should be
		able to navigate the city by Uber or Lyft, or by rental car.
	</p>
	<img src="/dividersimple.svg" alt="" style="height: 1.5em; margin-bottom: 1em;"/>
	<h2>Accommodations</h2>
	<p>There are multiple hotels nearby with the below being incredibly close.</p>
	<h3>Hyatt Place Downtown Milwaukee</h3>
	<p><a href="https://goo.gl/maps/APrKLTYw8t6SuoEg6">Google Maps</a></p>
	<br />
	<h3>The Brewhouse Inn & Suites</h3>
	<p><a href="https://goo.gl/maps/UY5rCmuxKDYFRAvv6">Google Maps</a></p>
	<img src="/dividersimple.svg" alt="" style="height: 1.5em; margin-bottom: 1em;"/>
	<h2>While you're here</h2>
	<p>
		Have a couple days to stay in Milwaukee? There is so much to do in the city! Here are a couple
		of options to check out while you're here.
	</p>
	<ul>
		<li>
			<a href="https://milwaukeepublicmarket.org/" rel="noreferrer" target="_blank">The Milwaukee Public Market</a> -
			a great spot for local vendors and tasty food
		</li>
		<li>
			<a href="https://mam.org/" rel="noreferrer" target="_blank">The Milwaukee Art Musuem</a> - if you're looking to
			get your art and architecture fix
		</li>
		<li>
			<a href="https://colectivocoffee.com/" rel="noreferrer" target="_blank">Colectivo Coffee</a> - really good coffee
			with cozy cafes throughout the city
		</li>
		<li>
			<a href="https://www.pabsttheatergroup.com/" rel="noreferrer" target="_blank">The Pabst Theater</a> - beautiful
			theater and worth seeing if anyone you're interested in is performing there
		</li>
		<li>
			<a href="https://www.mitchellparkdomes.com/" rel="noreferrer" target="_blank">Mitchell Park Domes</a> - the domes!
			Basically 3 giant terrarium-meets-greenhouse buildings with the plantlife and conditions of different
			biomes. Highly reccommend.
		</li>
		<li>
			<a href="https://milwaukeezoo.org/" rel="noreferrer" target="_blank">Milwaukee County Zoo</a> - great for kids!
		</li>
		<li>
			Walk around Bradford Beach if it's sunny and warm, book some brewery tours at the local
			breweries (yes, you can even do a Pabst brewery tour at our venue), or walk around the
			Riverwalk District
		</li>
	</ul>
	<br />
</div>

<style>
	.ourstory {
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
		p,
		ul {
			min-width: 80%;
			text-align: left;
			animation: fadeIn ease 1.5s;
		}

		h2 {
			font-size: 1.25em;
			font-family: Merriweather;
			color: #424620;
		}

		h3,
		p {
			font-size: 1em;
		}
	}

	h2,
	h3,
	p {
		animation: fadeIn ease 1.5s;
		margin-bottom: 2em;
	}

	img {
		animation: fadeIn ease 1.5s;
		max-width: 100%;
	}
	h2 {
		width: 50%;
		text-align: center;
		margin: 0.5em;
		margin-top: 1em;
		font-family: Merriweather;
		font-size: 1.75em;
		color: #424620;
	}

	h3 {
		width: 50%;
		margin: 1em 0em 0em 0em;
	}

	a {
		color: #775826;
	}

	p,
	ul {
		width: 50%;
	}

	li {
		margin-top: 0.5em;
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
