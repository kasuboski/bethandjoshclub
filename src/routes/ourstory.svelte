<script>
	import Navbar from '$lib/navbar.svelte';
	import Header from '$lib/header.svelte';
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
	<div class="thestory">
		<p>
			Beth and Josh's story starts when the two found themselves at several of the same college
			outings while attending UW-Madison. Beth, working as a student caterer, had befriended Josh's
			roommates and had no idea that through her new friends, she would meet the man of her dreams.
			Josh, a shy computer engineering student known for his observant zingers, charmed Beth with
			his witty and dry remarks. Josh was truly smitten by Beth's sense of humor, and the two began
			dating their senior year of college.
		</p>
		<p>
			After graduation, they embarked on a long-distance journey, as Josh had accepted a job in
			Austin, while Beth started working in Madison. For almost two years they would travel back and
			forth between cities on weekends, spending many weeknights on Google Hangouts and tallying
			their text count as it hit the ten thousands.
		</p>
		<p>
			Having had their fair share of missed connections and lonely nights, they decided to be
			together in Madison. Josh was lucky to find a remote job (before it was cool!) so he could
			move to Madison in 2018. The two lived happily ever after...
		</p>
		<p>
			But wait! After a year together in Madison, it was time for them to experience a different
			city. After much debate, Beth and Josh realized Austin was the place where they fell in love,
			and wanted to experience more. They moved to Austin in August 2019 and have lived there ever
			since, enjoying the breakfast tacos, live music, and breweries.
		</p>
		<p>
			In 2022, after 6 years together, Josh proposed in the courtyard near their apartment. Beth, of
			course, said yes, and the couple is excited to celebrate their next journey with you.
		</p>
		<img src="/images/ringhands.jpg" style="margin: 2em" alt="Beth and Josh in Gothic Quarter" />
	</div>
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

	.thestory {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@media screen and (max-width: 900px) {
		h2,
		p,
		.smalldivider {
			min-width: 75%;
			animation: fadeIn ease 1.5s;
		}

		h2 {
			font-size: 1.25em;
			margin: 1em 0em 0.2em 0em;
			animation: fadeIn ease 1.5s;
		}

		p {
			font-size: 1em;
			width: 100%;
		}
	}

	@media screen and (min-width: 900px) {
		p {
			width: 60%;
		}
	}

	h2,
	p,
	.smalldivider {
		animation: fadeIn ease 1.5s;
	}
	h2 {
		width: 40%;
		text-align: center;
	}

	.smalldivider {
		width: 60%;
		border-top: 1px dotted green;
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
